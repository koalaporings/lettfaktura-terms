import sequelize from "./db.js";
import Text from './models/models.js'

async function syncDB() {
    try {
        await sequelize.authenticate();
        console.log("Database connected ✅");
        await sequelize.sync();
        console.log("Database synced ✅");
    } catch (err) {
        console.error("DB Error:", err);
    } finally {
        await sequelize.close();
    }
}

syncDB();
