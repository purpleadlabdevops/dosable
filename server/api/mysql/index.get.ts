import query from './query'

const config = useRuntimeConfig();

export default defineEventHandler(async event => {
  // const params = await getQuery(event);

  const orderTable = await query(`SELECT * FROM ${config.mysql.prefix}orders`)

  console.dir( orderTable )

  return {
    status: 'success 1111111111',
    prefix: config.mysql.prefix
    // msg: JSON.stringify(orderTable)
  }
})