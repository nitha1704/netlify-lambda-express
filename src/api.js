const express = require('express');
const app = express();
const router = express.Router();

const cors = require('cors');
const serverless = require('serverless-http');

app.use(cors());
router.get('/',(req,res)=>{
    res.json(
        {name:'puxer',lastname: 'maxson'}
    )
})

router.get('/hell',(req,res)=>{
    res.send('hell')
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app);