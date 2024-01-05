/**
 * @type function
 * @name getPassword
 * @description Password generation for new user.
 * @columns ID: AUTO_INCREMENT
            created: Number
            user_orders: Array
            user_email: String
            user_phone: Number
            user_password: String
            user_name: String
            user_role: Number
            user_sessionId: Number
            user_birthday: String
            user_gender: String
 */

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
  const body = await readBody(event),
        date = new Date(),
        time = date.getTime(),
        pass = getPassword(), // this variable we can be sent to user by email or to frontend
        passHesh = md5(prefix + pass)

  const existUser = await query(`SELECT * FROM ${config.mysql.prefix}users WHERE user_email = '${ body.email }'`)

  let result

  if(existUser.length === 0){
    result = await query(`INSERT INTO ${config.mysql.prefix}users (created, user_orders, user_email, user_phone, user_password, user_name, user_role, user_sessionId, user_birthday, user_gender) VALUES ('${ time }', '${ JSON.stringify([]) }', '${ body.email }', '${ body.phone }', '${ passHesh }', '${ body.name }', '${ 1 }', '${ time }', '${ body.birthday }', '${ body.gender }')`)
  } else {
    result = await query(`UPDATE ${config.mysql.prefix}users SET user_sessionId = '${ time }' WHERE user_email = '${ body.email }'`)
  }

  result.sessionId = time

  return result
})