import query from '../mysql/query'

const config = useRuntimeConfig();

export default defineEventHandler(async event => {
  const body = await readBody(event);

  // query(`SELECT * FROM ${config.mysql.prefix}orders`)
  const checkExisting = await query(`SELECT EXISTS(SELECT * FROM ${config.mysql.prefix}orders WHERE orderId = '${body.orderId}')`)
  console.log('-------------------- checkExisting')
  console.dir( checkExisting )

  return {
    msg: 'Hello World!'
  }
})