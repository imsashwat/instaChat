const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {    
        dialect: 'postgres',        
    });


const Users = db.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
})

db.sync().then(() => console.log("Database is ready"))

exports = module.exports = {
    db,
    Users
}