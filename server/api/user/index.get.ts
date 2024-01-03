import query from '../mysql/query'

// import crypto from '../crypto'
// console.log( crypto.encrypt( JSON.stringify({name: 'Max Globa', age: 33}) ) )
// console.log( crypto.decrypt({iv: '0cf61a466767bc1796c76a8724785d81', content: '8ffaac4a14d5f23e8cae157c0e3a01c4d5fb0db40d2abf82ccd1dea1ce'}) )

const config = useRuntimeConfig();

export default defineEventHandler(async event => {
  const params = await getQuery(event);
  return await query(`SELECT * FROM ${config.mysql.prefix}users WHERE ID = '${params.id}'`)
})