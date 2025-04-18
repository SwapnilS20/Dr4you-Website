// Importing required modules
import express from 'express'
import db from './db/index.js'
const app = express()




const [rows] =await db.query('SELECT * FROM employee')
console.log(rows);

export default app