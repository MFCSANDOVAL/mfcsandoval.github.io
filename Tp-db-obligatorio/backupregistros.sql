CREATE TABLE registros(
 id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 nombre VARCHAR(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
 apellido VARCHAR(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
 edad TINYINT(11) NOT NULL,
 fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 provincia VARCHAR(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
 
);

INSERT INTO registros (id,nombre,apellido,edad,fecha,provincia) VALUES(1,'Pepe', 'Alcorta', 30, CURDATE(),'Buenos Aires');
INSERT INTO registros (id,nombre,apellido,edad,fecha,provincia) VALUES(2,'Daniel', 'Daza', 20, CURDATE(),'Tucumán');
INSERT INTO registros (id,nombre,apellido,edad,fecha,provincia) VALUES(3,'Juana', 'Perez', 40, CURDATE(),'Catamarca');
INSERT INTO registros (id,nombre,apellido,edad,fecha,provincia) VALUES(4,'Alberto', 'Alonso', 50, CURDATE(),'Buenos Aires');
INSERT INTO registros (id,nombre,apellido,edad,fecha,provincia) VALUES(5,'Liliana', 'Sanchez', 67, CURDATE(),'Buenos Aires');

SELECT * FROM registros;