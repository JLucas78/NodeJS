import { Sequelize } from "sequelize";
import dbConfig from "../config/database.js";

const connection = new Sequelize(dbConfig);

export default connection;