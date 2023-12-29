import query from '../mysql/query'

const config = useRuntimeConfig();

export default defineEventHandler(async event => {
  const body = await readBody(event);
  const date = new Date()

  const existUser = await query(`SELECT * FROM ${config.mysql.prefix}users WHERE user_email = '${ body.user_email }'`)

  let result

  if(existUser.length === 0){
    result = await query(`INSERT INTO ${config.mysql.prefix}users (created, user_orders, user_email, user_phone, user_password, user_name, user_role) VALUES ('${date.getTime()}', '${ body.user_orders }', '${ body.user_email }', '${ body.user_phone }', '${ body.user_password }', '${ body.user_name }', '${ body.user_role }')`)
  } else {
    let userOrders = JSON.parse(existUser[0].user_orders)
    let clientUserOrders = JSON.parse(body.user_orders)
    userOrders.push(...clientUserOrders)
    result = await query(`UPDATE ${config.mysql.prefix}users SET user_orders = '${ JSON.stringify(userOrders) }' WHERE user_email = '${ body.user_email }'`)
  }
  return result
})