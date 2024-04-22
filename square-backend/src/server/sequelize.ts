import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('square', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});