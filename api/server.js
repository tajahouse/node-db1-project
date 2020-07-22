const express = require("express");
const server = express();
const AccountRouter = require('../accounts-router');
const db = require("../data/dbConfig.js");
const { Logger } = require("logger");

server.use(Logger)
server.use(express.json());

server.ge('/', (req, res) =>{
 res.send(`<h1>Trying this again.</h1>`)
})

server.use("/api/accounts", AccountRouter)

const Logger = (req, res, next) =>{
console.log(`${req.method} ${req.originalURL} at ${new Date().toString()}`)
next();
}

module.exports = server;
// module.exports = Logger;
