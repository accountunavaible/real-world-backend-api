const {DataTypes} = require("sequelize");

module.exports = {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tagList: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    favoritesCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}
