const express = require('express');

const db = require('./data/dbConfig')

const router = express.Router();

router.get('/', (req, res)=>{
    db.select("*")
    .from('accounts')
    .then( accounts => res.status(200).json({
        data: accounts
    }))
    .catch((err) => console.log(err))
});

router.get("/:id", (req, res)=>{

});

router.post("/:id", (req, res)=>{

});

router.put("/:id", (req, res)=>{

});

router.delete("/:id", (req, res)=>{

});

module.exports = router;