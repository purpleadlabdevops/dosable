import query from './query'

const config = useRuntimeConfig();

export default defineEventHandler(async event => {
  const params = await getQuery(event);

  console.log('-------------------------params START')
  console.dir(params.dddd)
  console.log('-------------------------params END')

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