-- ============================================================
-- supabase/seeds/dishes_seed.sql
-- Piatti di esempio per Dattero di Mare (ristorante di pesce ligure)
-- ⚠️  Eseguire UNA SOLA VOLTA — rieseguire duplica tutti i piatti
-- ============================================================

insert into dishes (name, description, price, category, allergens, available, image_url, order_index)
values

-- ── Antipasti ─────────────────────────────────────────────────
(
  'Crudo di mare',
  'Selezione di gamberi rossi di Sanremo, scampi e ostriche del ponente ligure serviti su ghiaccio. Conditi con olio EVO, sale marino e una goccia di limone di Monterosso.',
  22.00, 'antipasti', ARRAY['pesce', 'crostacei', 'molluschi'], true, null, 0
),
(
  'Alici marinate alla ligure',
  'Filetti di alici freschissime marinati in succo di limone, aglio, prezzemolo e olio extravergine di oliva taggiasca. Servite su crostino di pane di Recco.',
  12.00, 'antipasti', ARRAY['pesce', 'glutine'], true, null, 1
),
(
  'Polpo arrosto con gremolata d''aglio',
  'Polpo verace di scoglio cotto a bassa temperatura e poi rosolato in padella con gremolata di aglio, prezzemolo e scorza di limone. Servito su crema di patate.',
  16.00, 'antipasti', ARRAY['molluschi'], true, null, 2
),

-- ── Primi ─────────────────────────────────────────────────────
(
  'Trofie al pesto con gamberi e fagiolini',
  'Trofie fresche artigianali condite con pesto genovese DOP, gamberi rosa saltati all''aglio e fagiolini di Albenga. Il profumo della Liguria in un piatto.',
  18.00, 'primi', ARRAY['glutine', 'crostacei', 'latticini'], true, null, 0
),
(
  'Spaghetti alle vongole veraci',
  'Spaghetti di Gragnano con vongole veraci pescate localmente, aperte in padella con aglio, olio, peperoncino e vino bianco Pigato. Mantecati al momento.',
  16.00, 'primi', ARRAY['glutine', 'molluschi'], true, null, 1
),
(
  'Risotto alla pescatora',
  'Riso Carnaroli mantecato con cozze, vongole, gamberi e seppia, profumato con pomodorini datterini e basilico fresco. Cremoso e ricco di sapori di mare.',
  20.00, 'primi', ARRAY['crostacei', 'molluschi', 'latticini'], true, null, 2
),

-- ── Secondi ───────────────────────────────────────────────────
(
  'Branzino al sale con erbe aromatiche',
  'Branzino intero di allevamento locale cotto nel sale grosso con timo, rosmarino e alloro. Sfilettato al tavolo e servito con olio EVO e spicchi di limone.',
  28.00, 'secondi', ARRAY['pesce'], true, null, 0
),
(
  'Frittura di paranza',
  'Misto di pesciolini di scoglio, calamari, mazzancolle e acciughe pastellati e fritti in olio di arachide. Croccanti al punto giusto, con maionese alle erbe liguri.',
  22.00, 'secondi', ARRAY['glutine', 'pesce', 'crostacei', 'molluschi'], true, null, 1
),
(
  'Grigliata mista di pesce',
  'Selezione del giorno tra branzino, orata, gamberi, calamari e scampi cotti sulla brace di legna aromatica. Condita con olio EVO, aglio e prezzemolo fresco.',
  35.00, 'secondi', ARRAY['pesce', 'crostacei', 'molluschi'], true, null, 2
),

-- ── Contorni ──────────────────────────────────────────────────
(
  'Patate al rosmarino',
  'Patate di montagna tagliate a spicchi e arrostite in forno con rosmarino fresco, aglio in camicia e olio EVO della riviera. Croccanti fuori, morbide dentro.',
  6.00, 'contorni', ARRAY[]::text[], true, null, 0
),
(
  'Verdure di stagione grigliate',
  'Selezione di zucchine, melanzane, peperoni e cipolla di Tropea grigliate sulla piastra di ghisa. Condite con olio EVO, basilico fresco e aceto balsamico.',
  7.00, 'contorni', ARRAY[]::text[], true, null, 1
),

-- ── Dolci ─────────────────────────────────────────────────────
(
  'Tiramisù della casa',
  'Preparato ogni giorno con savoiardi imbevuti nel caffè espresso, crema di mascarpone montata a mano e abbondante cacao amaro in polvere.',
  8.00, 'dolci', ARRAY['glutine', 'latticini'], true, null, 0
),
(
  'Panna cotta alla vaniglia con coulis di frutti rossi',
  'Panna cotta preparata con panna fresca e bacca di vaniglia del Madagascar, servita con coulis caldo di fragole e lamponi di stagione.',
  7.00, 'dolci', ARRAY['latticini'], true, null, 1
),

-- ── Bevande ───────────────────────────────────────────────────
(
  'Pigato della Riviera Ligure (bicchiere)',
  'Vino bianco della casa: Pigato DOC Riviera Ligure di Ponente, produzione locale. Secco, sapido e minerale — il compagno ideale per ogni piatto di mare.',
  5.00, 'bevande', ARRAY[]::text[], true, null, 0
);
