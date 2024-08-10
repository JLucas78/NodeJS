import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import sequelize from 'sequelize';

dotenv.config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

