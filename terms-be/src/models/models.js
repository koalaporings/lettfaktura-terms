import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Text = sequelize.define("Text", {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    language: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

export default Text;