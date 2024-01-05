import query from '../mysql/query'

const config = useRuntimeConfig();

export default defineEventHandler(async event => {
  const body = await readBody(event);
  const date = new Date()
  const insertOrder = await query(`INSERT INTO ${config.mysql.prefix}orders (created, orderId, sessionId, campaignId, quizData, startData, paymentData, shipping, billing) VALUES ('${date.getTime()}', '${ body.orderId }','${ body.sessionId }','${ body.campaignId }','${ body.quizData }','${ body.startData }','${ body.paymentData }','${ body.shipping }','${ body.billing }')`)
  return insertOrder
})

/** UPDATE USER ORDERS ARRAY
  let userOrders = JSON.parse(existUser[0].user_orders)
      let clientUserOrders = JSON.parse(body.user_orders)
      userOrders.push(...clientUserOrders)
  result = await query(`UPDATE ${config.mysql.prefix}users SET user_orders = '${ JSON.stringify(userOrders) }' WHERE user_email = '${ body.user_email }'`)
 */