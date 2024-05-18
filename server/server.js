import express from 'express'
import cors from 'cors'
import mysql from 'mysql'


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM contact';
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: 'Error inside server'})
    })
})

app.post('/contact', (req, res) => {
    const sql = "INSERT INTO contact (`Name`,`Email`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.listen(3000, () => {
    console.log("Deybigboy")
});