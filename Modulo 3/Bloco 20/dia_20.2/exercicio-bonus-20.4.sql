SELECT * FROM PiecesProviders.Pieces;
SELECT * FROM PiecesProviders.Providers;
SELECT * FROM PiecesProviders.Provides;
-- 1
SELECT Piece, Price From PiecesProviders.Provides
WHERE Provider = 'RBT';
-- 2
SELECT Piece, Price FROM PiecesProviders.Provides
ORDER BY Price DESC LIMIT 5;
-- 3
SELECT Provider, Price FROM PiecesProviders.Provides
ORDER BY Price DESC LIMIT 4 OFFSET 2;
-- 4
SELECT * FROM PiecesProviders.Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;
-- 5
SELECT COUNT(Provider) FROM PiecesProviders.Provides
WHERE Piece = 1;