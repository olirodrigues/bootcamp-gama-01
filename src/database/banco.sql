-- dbbootcampgama01.carteira definition

CREATE TABLE `carteira` (
  `id` int NOT NULL AUTO_INCREMENT,
  `saldo` double DEFAULT NULL,
  `total_receita` double DEFAULT NULL,
  `total_despesa` double DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

-- dbbootcampgama01.categoria definition

CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) NOT NULL,
  `sub_descricao` varchar(50) NOT NULL,
  `tipo` varchar(10) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- dbbootcampgama01.despesa definition

CREATE TABLE `despesa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) NOT NULL,
  `data` date NOT NULL,
  `valor` double NOT NULL,
  `idcategoria` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_despesa_categoria1` (`idcategoria`),
  CONSTRAINT `fk_despesa_categoria1` FOREIGN KEY (`idcategoria`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- dbbootcampgama01.receita definition

CREATE TABLE `receita` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) NOT NULL,
  `data` date NOT NULL,
  `valor` double NOT NULL,
  `idcategoria` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_receita_categoria1` (`idcategoria`),
  CONSTRAINT `fk_receita_categoria1` FOREIGN KEY (`idcategoria`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- dbbootcampgama01.usuario definition

CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `carteira_idcarteira` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario_carteira_idx` (`carteira_idcarteira`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

CREATE TABLE dbbootcampgama01.compartilhamento_conta (
	id INT auto_increment NOT NULL,
	idusario INT NOT NULL,
	createdAt DATETIME NULL,
	updatedAt DATETIME NULL,
	CONSTRAINT compartilhamento_conta_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb3
COLLATE=utf8_general_ci;