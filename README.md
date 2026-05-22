# Dattero di Mare — Sito Ristorante

Next.js 14 · App Router · TypeScript · Tailwind CSS · Supabase

---

## Setup locale

```bash
npm install
cp .env.local.example .env.local   # compila con le tue credenziali
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

---

## Variabili d'ambiente

| Variabile | Dove trovarla |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Dashboard Supabase → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Dashboard Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Dashboard Supabase → Settings → API |
| `TELEGRAM_BOT_TOKEN` | @BotFather su Telegram |
| `TELEGRAM_CHAT_ID` | ID della chat/canale che riceve le notifiche |
| `RESEND_API_KEY` | Dashboard Resend → API Keys |

---

## Database — applicare la migration

Le tabelle (`dishes`, `bookings`) sono definite in:

```
supabase/migrations/0001_initial_schema.sql
```

### Opzione A — Supabase CLI (consigliata)

```bash
# prima installazione
npm install -g supabase

# login e link al progetto
supabase login
supabase link --project-ref <PROJECT_REF>

# applica la migration
supabase db push
```

### Opzione B — SQL Editor nella dashboard

1. Vai su [supabase.com](https://supabase.com) → il tuo progetto → **SQL Editor**
2. Crea una nuova query
3. Copia e incolla il contenuto di `supabase/migrations/0001_initial_schema.sql`
4. Clicca **Run**

---

## Seed dati di esempio

I piatti di esempio (14 portate per un ristorante di pesce ligure) si trovano in:

```
supabase/seeds/dishes_seed.sql
```

### Come eseguire il seed

1. Vai su [supabase.com](https://supabase.com) → il tuo progetto → **SQL Editor**
2. Clicca **New query**
3. Copia e incolla il contenuto di `supabase/seeds/dishes_seed.sql`
4. Clicca **Run**

> **⚠️ Attenzione:** eseguire il seed **una sola volta**. Non ci sono controlli di unicità sui nomi — rieseguire lo script inserisce nuovamente tutti i 14 piatti, duplicandoli nel database.

---

## Struttura del progetto

```
src/
├── app/                  # pagine e API routes (Next.js App Router)
├── components/           # componenti React
│   ├── layout/           # Navbar, Footer
│   ├── ui/               # componenti riutilizzabili
│   ├── home/
│   ├── menu/
│   ├── prenotazioni/
│   └── chatbot/          # placeholder fase 2
├── lib/
│   ├── supabase.ts       # client browser (supabase) + admin (supabaseAdmin)
│   ├── db/
│   │   ├── dishes.ts     # getDishes(), getDishesByCategory()
│   │   └── bookings.ts   # createBooking(), getAvailableSlots()
│   └── utils.ts
└── types/
    └── database.ts       # Dish, Booking, BookingInsert, DishCategory
```
