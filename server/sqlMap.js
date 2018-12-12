var sqlMap = {
  getValue: 'SELECT * FROM user WHERE user_name= ? and password= ?',
  setValue: 'UPDATE user SET name = ? WHERE id = ?'
}

module.exports = sqlMap
