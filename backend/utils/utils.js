const fs = require('fs')
const path = require('path')
const mysql = require('mysql2/promise')
require('dotenv').config();
const { cwd } = process

const connect = () => mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  multipleStatements: true
})

const runSql = (file) => async () => {
  const db = connect()
  const sql = fs.readFileSync(file, 'utf8')
  await db.query(sql)
  await db.end()
}

const runMigration = runSql(path.resolve(cwd(), 'database.sql'))

module.exports = {
  connect,
  runMigration,
}