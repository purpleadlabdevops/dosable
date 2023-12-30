import query from '../mysql/query'

const config = useRuntimeConfig();

export default defineEventHandler(async event => await query(`SELECT * FROM ${config.mysql.prefix}users`))