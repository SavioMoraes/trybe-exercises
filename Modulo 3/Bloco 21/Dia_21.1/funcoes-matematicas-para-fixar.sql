-- Funções Matemáticas
-- Para Fixar:

-- 1
-- gerar um valor entre 15 e 20:
SELECT ROUND(15 + (RAND() * 5));

-- 2
-- valor arredondado de 15.7515971, com 5 casas decimais:
SELECT ROUND(15.7515971, 5); -- mostra cinco casas decimais
-- SELECT ROUND(15.7515971); -- arredonda para cima a partir de 0.5...
-- SELECT ROUND(15.2515971); -- arredonda para baixo se menor que 0.5...

-- 3
-- valor arredondado para baixo;
-- SELECT ROUND(39.494); -- arredonda para baixo porque é menor que 0.5...
SELECT FLOOR(39.494); -- arredonda obrigatóriamente para baixo!
-- SELECT CEIL(39.494); -- arredonda obrigatóriamente para cima!

-- 4
-- valor aproximado para a média de 85.234%:
SELECT CEIL(85.234); -- resposta do gabarito, obriga a aproximar para cima, no meu entender utilizaria o ROUND:
SELECT ROUND(85.234); -- que vai arredondar de acorco com se é maior ou igual a 0.5 (para cima) e menor do que 0.5 (para baixo)!