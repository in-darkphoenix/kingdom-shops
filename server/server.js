const app = require("./app");
const connectDatabase = require("./database/database");
const dotenv = require("dotenv");
const { log } = require("console");

// configuration
dotenv.config({ path: "server/config/config.env" });

// database connection
connectDatabase();

app.listen(process.env.PORT, () => {
  log(`Server started at http://localhost:${process.env.PORT}`);
});
