
CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) NOT NULL,
  `sub_descricao` varchar(50) NOT NULL,
  `tipo` varchar(10) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE `compartilhamento_conta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `carteira` (
  `id` int NOT NULL AUTO_INCREMENT,
  `saldo` double DEFAULT NULL,
  `total_receita` double DEFAULT NULL,
  `total_despesa` double DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `idConta` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carteira_FK` (`idConta`),
  CONSTRAINT `carteira_FK` FOREIGN KEY (`idConta`) REFERENCES `compartilhamento_conta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `idConta` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_conta_FK` (`idConta`),
  CONSTRAINT `usuario_FK` FOREIGN KEY (`idConta`) REFERENCES `compartilhamento_conta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;


CREATE TABLE `transacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) NOT NULL,
  `data` date NOT NULL,
  `valor` double NOT NULL,
  `idcategoria` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `idCarteira` int NOT NULL,
  `transacao_efetuada` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_despesa_categoria1` (`idcategoria`),
  KEY `despesa_FK` (`idCarteira`),
  CONSTRAINT `despesa_FK` FOREIGN KEY (`idCarteira`) REFERENCES `carteira` (`id`),
  CONSTRAINT `fk_despesa_categoria1` FOREIGN KEY (`idcategoria`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;