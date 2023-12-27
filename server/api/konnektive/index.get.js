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

export default defineEventHandler(async event => {
  return $fetch(getUrl({campaignId: 21}, '/campaign/query'), {method: 'POST'})
    .then(response => JSON.parse(response))
    .catch(error => error)
})