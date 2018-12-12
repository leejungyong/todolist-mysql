const mysql = require('mysql')

const dbConfig = require('./db')
const sqlMap = require('./sqlMap')

const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  port: dbConfig.port,
  multipleStatements: true // 多语句查询
})

exports.getValue = (req, res, next) => {
  // var id = req.query.id
  var username = req.query.user_name
  var password = req.query.password
  pool.getConnection((err, connection) => {
    var sql = sqlMap.getValue
    connection.query(sql, [username, password], (err, result) => {
      res.json(result)
      connection.release()
    })
  })
}

exports.setValue = (req, res, next) => {
  var id = 1,
    name = '2'
  pool.getConnection((err, connection) => {
    var sql = sqlMap.setValue
    connection.query(sql, [name, id], (err, result) => {
      res.json(result)
      connection.release()
    })
  })
}
