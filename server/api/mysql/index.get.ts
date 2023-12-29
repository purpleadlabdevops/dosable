import query from './query'

const config = useRuntimeConfig();

export default defineEventHandler(async event => {
  // const params = await getQuery(event);

  const orderTable = await query(`SELECT * FROM ${config.mysql.prefix}orders`)

  return {
    status: 'success',
    msg: JSON.stringify(orderTable)
  }
})