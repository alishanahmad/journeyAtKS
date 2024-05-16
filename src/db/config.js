import { Sequelize } from "sequelize";

const dbName=process.env.DB_NAME;
const dbUsername=process.env.DB_USERNAME;
const dbPassword=process.env.DB_PASSWORD;
const dbHost=process.env.DB_HOST;

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: "postgres",
});
const connectionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("connectDB has been etablished successfully.");
  } catch (error) {
    console.log("nable to connect ot the DatabaseError", error);
  }
};
export { connectionDB };
export default sequelize;
