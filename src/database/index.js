const Sequelize = require('sequelize');
const sequelize = new Sequelize("mydb", "root", "123456", {
    host: 'localhost',
    dialect: 'mysql',
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