import { Sequelize } from "sequelize";

const isProduction = process.env.NODE_ENV === "production";

const sequelize = isProduction
    ? new Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {
            ssl: {
            require: true,
            rejectUnauthorized: false,
            },
        },
        })
    : new Sequelize({
        database: "lettfaktura_terms",
        username: "postgres",
        password: "123",
        host: "localhost",
        dialect: "postgres",
        port: 5432,
    });

export default sequelize;
