/**
 * @type POST
 * @name /api/login
 * @description DB request for login user.
 */

import query from '../mysql/query'
import md5 from 'md5'

const config = useRuntimeConfig(),
      prefix = md5(config.mdp)

export default defineEventHandler(async event => {
  const body = await readBody(event),
        date = new Date(),
        time = date.getTime(),
        passHesh = md5(prefix + body.password)

  const existUser = await query(`SELECT * FROM ${config.mysql.prefix}users WHERE user_email = '${ body.email }'`)

  let result

  if(existUser.length === 0){
    result = {
      status: 'error',
      msg: 'This email does not exist.'
    }
  } else {
    if(existUser[0].user_password === passHesh){
      result = await query(`UPDATE ${config.mysql.prefix}users SET user_sessionId = '${ time }' WHERE user_email = '${ body.email }'`)
      result.user = existUser[0]
    } else {
      result = {
        status: 'error',
        msg: 'Wrong password!'
      }
    }
  }

  return result
})