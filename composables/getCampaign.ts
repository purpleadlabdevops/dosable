import { useGlobalStore } from '~/stores/global'

export const getCampaign = async () => {
  const globalStore = useGlobalStore()

  const campaignId = useState('campaignId', () => 21)

  const { data } = await useFetch('/api/konnektive', {
    method: 'post',
    body: JSON.stringify({
      endpoint: '/campaign/query',
      params: {
        campaignId: campaignId.value
      }
    }),
    onResponseError({ request, response, options }) {
      console.log('onResponseError')
      console.dir(response)
    }
  })

  if(data.value && data.value.result === 'SUCCESS'){
    globalStore.setCampaign(data.value.message.data[campaignId.value])
  }
}