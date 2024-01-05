import mysql from 'mysql2';

const config = useRuntimeConfig()

const mysqlOptions = {
  host:     config.mysql.host,
  database: config.mysql.name,
  user:     config.mysql.user,
  password: config.mysql.pass
}

if(process.env.NODE_ENV === 'development'){
  mysqlOptions.port = 8889
}

const query = sqlQuery => {
  return new Promise((resolve, reject) => {
    const conn = mysql.createConnection(mysqlOptions)

    conn.connect()

    conn.query(sqlQuery, (err, rows, fields) => {
      if(err) reject(err);
      resolve(rows)
    })

    conn.end()
  })
}
export default query;

// CREATE TABLE mg_orders (ID INT AUTO_INCREMENT, created VARCHAR(255), orderId VARCHAR(255), sessionId VARCHAR(255), campaignId VARCHAR(255), quizData TEXT, startData TEXT, paymentData TEXT, shipping TEXT, billing TEXT, PRIMARY KEY(ID))
// CREATE TABLE mg_users (ID INT AUTO_INCREMENT, created VARCHAR(255), user_orders TEXT, user_email VARCHAR(255) NOT NULL UNIQUE, user_phone VARCHAR(255), user_password VARCHAR(255), user_name VARCHAR(255), user_role INT(11), PRIMARY KEY(ID))

// ALTER TABLE mg_users ADD COLUMN user_birthday VARCHAR(50);
// ALTER TABLE mg_users ADD COLUMN user_gender VARCHAR(50);
