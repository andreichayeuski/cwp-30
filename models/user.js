module.exports = (Sequelize, sequeize) => {
    return sequeize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        codes: {
            type: Sequelize.STRING
        }
    })
};