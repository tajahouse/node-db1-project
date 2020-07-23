const express = require("express");
const server = express();
const AccountRouter = require('../accounts-router');
const db = require("../data/dbConfig.js");
// const { Logger } = require("logger");

// server.use(Logger)
server.use(express.json());

server.get('/', (req, res) =>{
 res.send(`<h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>`)
})

server.use("/api/accounts", AccountRouter)

// const logger = (req, res, next) =>{
// console.log(`${req.method} ${req.originalURL} at ${new Date().toString()}`)
// next();
// }

module.exports = server;
// module.exports = Logger;
