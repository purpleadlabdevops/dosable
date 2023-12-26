const getUrl = (object, endpoint) => {
  let urlParams = '';
  object.ipAddress = process.env.K_IPAD
  object.loginId = process.env.K_USER
  object.password = process.env.K_PASS
  for(let item in object){
    urlParams += `${item}=${encodeURIComponent(object[item])}&`;
  }
  urlParams = urlParams.slice(0, -1);
  return `https://api.konnektive.com${endpoint}/?${urlParams}`
}

const konnektive = (url) => {
  return $fetch(url, {method: 'POST'})
}

export default defineEventHandler(async event => {
  const body = await readBody(event)

  return konnektive(getUrl({ campaignId: 21 }, '/campaign/query'))
    .then(response => {
      return {
        status: 'success',
        msg: JSON.stringify(response.body)
      }
    })
    .catch(error => {
      return {
        status: 'error',
        msg: error
      }
    })
})