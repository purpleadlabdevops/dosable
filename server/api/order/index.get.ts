import query from '../mysql/query'

const config = useRuntimeConfig();

export default defineEventHandler(async event => {
  const params = await getQuery(event);
  return await query(`SELECT * FROM ${config.mysql.prefix}orders WHERE orderId = '${params.orderId}'`)
})