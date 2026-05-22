-- Dattero di Mare — menu v2 (crudi-focused, maggio 2026)
-- Applicare su Supabase: Table Editor → SQL Editor → run

TRUNCATE TABLE dishes RESTART IDENTITY CASCADE;

INSERT INTO dishes (name, description, price, category, available) VALUES

-- Antipasti / Crudi
('Tartare di tonno rosso',       'Cipollotto fresco, capperi di Pantelleria, emulsione di soia',  22, 'antipasti', true),
('Carpaccio di ricciola',        'Olio del Garda, limone, pepe rosa, erba cipollina',              20, 'antipasti', true),
('Ostriche Gillardeau',          'Servite naturali — prezzo al pezzo',                              5, 'antipasti', true),
('Plateau Dattero',              'Selezione del giorno: tartare, carpaccio, ostriche (x2)',        35, 'antipasti', true),
('Battuto di gambero rosso',     'Mango, avocado, lime, semi di sesamo tostati',                   18, 'antipasti', true),
('Fritto del Dattero',           'Mazzancolle, calamari, baccalà in tempura leggera',              16, 'antipasti', true),
('Alici del Cantabrico',         'Su burro di malga, crostini di pane di grano antico',            14, 'antipasti', true),

-- Primi
('Fusillone gamberi e bottarga', 'Gamberi freschi, bottarga di muggine, pomodorino confit',        22, 'primi', true),
('Linguine alle vongole veraci', 'Vongole del giorno, aglio, vino bianco, prezzemolo',             18, 'primi', true),
('Risotto allo zafferano di Navelli', 'Zafferano DOP aquilano, mantecato al parmigiano 36 mesi',  22, 'primi', true),
('Tortelli ricotta e limone',    'Burro aromatico, salvia, scorza di limone Amalfi',               18, 'primi', true),

-- Secondi
('Ricciola scottata',            'Cipollotto fondente, mela verde, olio del Garda',                26, 'secondi', true),
('Baccalà demi-sel',             'Patate schiacciate, olive taggiasche, pomodorino del Piennolo',  24, 'secondi', true),
('Catalana di crostacei',        'Mazzancolle, gamberi, aragostella, verdure croccanti',           28, 'secondi', true),
('Branzino in crosta di sale',   'Per due persone — preparazione al tavolo',                       60, 'secondi', true),

-- Dolci
('Tortino al cioccolato Valrhona', 'Cuore fondente, gelato alla vaniglia Bourbon',                  9, 'dolci', true),
('Cheesecake limone e basilico', 'Base di frollino, coulis di limone Amalfi',                       8, 'dolci', true),
('Sorbetto allo zafferano',      'Zafferano di Navelli DOP, biscotto secco',                        8, 'dolci', true),

-- Bevande
('Calice di vino della casa',    'Bianco o rosso — selezione del giorno',                           8, 'bevande', true),
('Bollicine abruzzesi',          'Consultare la carta dei vini',                                    0, 'bevande', true);
