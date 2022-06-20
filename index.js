const express = require('express')
const app = express()

var cors = require('cors')
app.use(express.urlencoded())
app.use(cors())

const mysql = require('mysql2');
const db = require('./connect-db');
// create the connection to database

app.get('/', function (req, res) {
  res.send('Hello World12345678')
})
app.get('/lunch', async (req, res)=> {
    const sql = "SELECT * FROM `customized_lunch`";
    const [rs] = await db.query(sql);
    res.json(rs);
//     'SELECT * FROM `customized_lunch`'
//   connection.query(
//   ,
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     res.json(results)
//   }
// );
})
app.post('/lunch', async (req, res)=> {
    const sql = "SELECT * FROM `customized_lunch` WHERE sid = ?";
    const [rs] = await db.query(sql,[req.body.sid]);
    res.json({db:rs,data:"a",userLogin:true});
})
console.log('server started:http://localhost:3000')
app.listen(3000)