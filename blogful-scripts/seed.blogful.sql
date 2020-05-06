INSERT INTO blogful_articles (title, date_published, content)
VALUES 
('Elephants', now(), 'About our long-trunked friends'),
('Rabbits', now() - '1 days'::INTERVAL, 'About our hoppity friends'),
('Rhinos', now() - '3 days'::INTERVAL, 'Not about republicans'),
('Triceratops', now() - '7 days'::INTERVAL, 'Three-horned ancient badasses'),
('T-Rex', now() - '2 days'::INTERVAL, 'Don''t call him ''stubs''!'),
('Water Chevrotain', now(), 'The best creature on the planet');