const Sequelize = require('sequelize');
const sequelize = new Sequelize("heroku_06891be3fea6974", "b2d21261a0fac6", "d6da3d49", {
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
  }
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  module.exports = sequelize;