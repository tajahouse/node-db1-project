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
    const { id } = req.params;
    db('accounts')
    .where('id', id)
    .then((account) => res.status(200).json({
        data: account
    }))
    .catch((err) => console.log(err))
});

router.post("/", (req, res)=>{
    const accountData = req.body;
    db('accounts')
    .insert(accountData)
    .then((id) => res.status(201).json({ 
        data: id[0]
    }))
    .catch((err) => console.log(err))
});

router.put("/:id", (req, res)=>{
    const { id } = req.params;
    const changes = req.body;
    db('accounts')
    .where('id', id)
    .update(changes)
    .then((count) =>{
        count > 0 ?
         res.status(200).json({
            data:count 
        }) :
        res.status(404).json({
            message: 'No record to update'
        })
    })
    .catch((err) => console.log(err))
});

router.delete("/:id", (req, res)=>{
    const { id } = req.params;
    
    db('accounts')
        .where('id', id)
        .del()
        .then((count) => {
            count > 0 ?
            res.status(200).json({
                data:count
            }) :
            res.status(404).json({
                message: 'Nothing to delete'
            })
    })
    .catch((err) => console.log(err))
});

module.exports = router;