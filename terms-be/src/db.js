import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    database: "lettfaktura_terms",
    username: "postgres",
    password: "123",
    host: "localhost",
    dialect: "postgres",
    port: 5432
});

export default sequelize;
