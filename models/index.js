module.exports = (Sequelize, config) => {
    const options = {
        host: config.host,
        dialect: config.dialect,
        logging: false,
        port: config.port,
    };
    const sequelize = new Sequelize(config.db, config.login, config.password, options);
    console.log(sequelize);
    const User = require('./user')(Sequelize, sequelize);
console.log(333);
    return {
        user: User,
        sequelize,
        Sequelize
    };
};