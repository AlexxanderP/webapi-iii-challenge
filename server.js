//------Declarations-----//
const express = require("express");

const helmet = require("helmet");

const usersRouter = require("./users/users-router");

const server = express();

//------- Middleware-----//
server.use(express.json());
server.use(helmet());

//-----Routes-----//
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send(`
    <h1> Good Afternoon </h1>
    `);
});

//----Export-----//
module.exports = server;
