-- Modelagemde BD's:
-- Transformando ideias em um modelo de BD
-- Exercício Dia_22.1

/*Um zoológico precisa de um banco de dados para armazenar informações 
 sobre os seus animais. As informações a serem armazenadas sobre cada 
 animal são:
	Nome;
	Espécie;
	Sexo;
	Idade;
	Localização;
    
Cada animal também possui vários cuidadores, e cada cuidador pode ser 
responsável por mais de um animal. Além disso, cada cuidador possui um 
gerente, sendo que cada gerente pode ser responsável por mais de um 
cuidador. */

/* 
Solução:

- Identificação das Entidades :
	Entidade 1: Animal ;
	Entidade 2: Cuidador ;
	Entidade 3: Gerente ;
	Entidade 4: Cuidador e Animal ;
    
- Identificação dos Atributos :
	Animal: animal_id , nome , especie , sexo , idade e localização ;
	Cuidador: cuidador_id , nome , gerente_id ;
	Gerente: gerente_id e nome ;
	Cuidador e Animal: cuidador_id e animal_id ;
    
- Identificar os Relacionamentos :
	Um animal pode ter um ou mais cuidadores;
	Um cuidador pode cuidar de um ou mais animais;
	Um gerente pode gerenciar uma ou mais cuidadores;
	Um cuidador possui um gerente;
 */

DROP SCHEMA IF EXISTS zoologico;
    CREATE SCHEMA zoologico;
    USE zoologico;

    CREATE TABLE animal(
        animal_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL,
        especie VARCHAR(50) NOT NULL,
        sexo VARCHAR(50) NOT NULL,
        idade INT NOT NULL,
        localizacao VARCHAR(50) NOT NULL
    );

     CREATE TABLE gerente(
        gerente_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL
    );

    CREATE TABLE cuidador(
        cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL,
        gerente_id INT NOT NULL,
        FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
    );

    CREATE TABLE animal_cuidador(
        animal_id INT,
        cuidador_id INT,
        CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
        FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
        FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
    );
    