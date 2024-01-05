/**
 * @type POST
 * @name /api/konnektive
 * @description Post request to CRM Konnektive to get ccampaign data.
 */
const config = useRuntimeConfig();

const getUrl = (object, endpoint) => {
  let urlParams = '';
  object.ipAddress = config.K_IPAD
  object.loginId = config.K_USER
  object.password = config.K_PASS
  for(let item in object){
    urlParams += `${item}=${encodeURIComponent(object[item])}&`;
  }
  urlParams = urlParams.slice(0, -1);
  return `https://api.konnektive.com${endpoint}/?${urlParams}`
}

export default defineEventHandler(async event => {
  const body = await readBody(event)

  return $fetch(getUrl(body.params, body.endpoint), {method: 'POST'})
    .then(response => JSON.parse(response))
    .catch(error => error)
})