import query from './query'

const config = useRuntimeConfig();

export default defineEventHandler(async event => {
  const body = await readBody(event);

  query(`SELECT * FROM ${config.mysql.prefix}orders`)
    .then(response => {
      console.log('-------------------------response')
      console.dir(response)
    })
    .catch(error => {
      console.log('-------------------------error')
      console.dir(error)
    })

  return {
    msg: 'Hello World!'
  }
})