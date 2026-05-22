-- ============================================================
-- 0001_initial_schema.sql
-- Tabelle: dishes, bookings
-- ============================================================

-- ── dishes ──────────────────────────────────────────────────
create table if not exists dishes (
  id           uuid          primary key default gen_random_uuid(),
  name         text          not null,
  description  text,
  price        numeric(6,2)  not null,
  category     text          not null,
  allergens    text[]        default '{}',
  available    boolean       default true,
  image_url    text,
  order_index  integer       default 0,
  created_at   timestamptz   default now(),
  updated_at   timestamptz   default now(),

  constraint dishes_category_check check (
    category in ('antipasti', 'primi', 'secondi', 'contorni', 'dolci', 'bevande')
  )
);

-- ── bookings ─────────────────────────────────────────────────
create table if not exists bookings (
  id          uuid        primary key default gen_random_uuid(),
  name        text        not null,
  phone       text        not null,
  email       text,
  date        date        not null,
  time        time        not null,
  guests      integer     not null,
  notes       text,
  status      text        default 'pending',
  created_at  timestamptz default now(),

  constraint bookings_guests_check check (guests > 0 and guests <= 20),
  constraint bookings_status_check check (
    status in ('pending', 'confirmed', 'cancelled', 'completed')
  )
);

-- ── Indici ───────────────────────────────────────────────────
create index if not exists idx_bookings_date_time     on bookings (date, time);
create index if not exists idx_dishes_category_order  on dishes   (category, order_index);

-- ── Trigger updated_at ───────────────────────────────────────
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger dishes_set_updated_at
  before update on dishes
  for each row
  execute function set_updated_at();

-- ── Row Level Security ────────────────────────────────────────
alter table dishes   enable row level security;
alter table bookings enable row level security;

-- dishes: lettura pubblica solo per piatti disponibili
create policy "dishes_public_select" on dishes
  for select
  to anon, authenticated
  using (available = true);

-- bookings: deny esplicito per anon e authenticated su tutte le operazioni.
-- Il service_role bypassa RLS di default → solo getSupabaseAdmin() può leggere/scrivere.
create policy "bookings_deny_public" on bookings
  as restrictive
  for all
  to anon, authenticated
  using (false)
  with check (false);
