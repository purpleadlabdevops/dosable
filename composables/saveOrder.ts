import { useGlobalStore } from '~/stores/global'

export const saveOrder = async () => {
  const globalStore = useGlobalStore()

  const order = await useFetch('/api/order', {
    method: 'post',
    body: JSON.stringify({
      orderId: useState('orderId').value,
      sessionId: useState('sessionId').value,
      campaignId: useState('campaignId').value,
      quizData: JSON.stringify(globalStore.quizData),
      startData: JSON.stringify(globalStore.startData),
      paymentData: JSON.stringify(globalStore.payment),
      shipping: JSON.stringify(globalStore.shipping),
      billing: JSON.stringify(globalStore.billing)
    }),
    onResponseError({ request, response, options }) {
      console.log('------------------------- saveOrder onResponseError')
      console.dir(response)
    }
  })
  console.log('--------------- saveOrder')
  console.dir(order.status.value)
  console.dir(order.data.value)
}