import query from '../mysql/query'
import md5 from 'md5'

const config = useRuntimeConfig(),
      prefix = md5(config.mdp)

const getPassword = () => {
  let password = ''
  const length = 10,
        charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password
}

export default defineEventHandler(async event => {
  const body = await readBody(event);

  const date = new Date()

  const pass = getPassword(), // this part we can send to user by email or to frontend
        passHesh = md5(prefix + pass)

  const existUser = await query(`SELECT * FROM ${config.mysql.prefix}users WHERE user_email = '${ body.user_email }'`)

  let result

  if(existUser.length === 0){
    result = await query(`INSERT INTO ${config.mysql.prefix}users (created, user_orders, user_email, user_phone, user_password, user_name, user_role) VALUES ('${date.getTime()}', '${ body.user_orders }', '${ body.user_email }', '${ body.user_phone }', '${ passHesh }', '${ body.user_name }', '${ body.user_role }')`)
  } else {
    let userOrders = JSON.parse(existUser[0].user_orders)
    let clientUserOrders = JSON.parse(body.user_orders)
    userOrders.push(...clientUserOrders)
    result = await query(`UPDATE ${config.mysql.prefix}users SET user_orders = '${ JSON.stringify(userOrders) }' WHERE user_email = '${ body.user_email }'`)
  }
  return result
})
/*
Daniel
email: daniel@java.blue
pass: daniel123

Dmitry:
email: dmitry@purpleadlab.com
pass: dmitry123
*/