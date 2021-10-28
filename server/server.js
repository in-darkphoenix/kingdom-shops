const app = require("./app");
const connectDatabase = require("./database/database");
const dotenv = require("dotenv");
const { log } = require("console");

// handling uncaught exception
process.on("uncaughtException", (err) => {
  log(`Error: ${err.message}`);
  log(`Shutting down the server due to Uncaught Exception`);

  process.exit(1);
});

// uncaught exception example
// log(ankit);

// configuration
dotenv.config({ path: "server/config/config.env" });

// database connection
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  log(`Server started at http://localhost:${process.env.PORT}`);
});

// handling promise rejection
process.on("unhandledRejection", (err) => {
  log(`Error: ${err.message}`);
  log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
