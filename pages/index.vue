<template>
  <div class="page page__home">
    <HomeBanner />
    <HomeBacked />
    <HomeComp />
    <HomeCustomers />
    <HomeReview />
    <HomeAdvantages />
    <HomeFaq />
    <HomeTreatments />
    <HomeDeal />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/stores/global';

useHead({
  title: 'Home page'
})

const globalStore = useGlobalStore()

const getCampaign = async () => {
  const { data } = await useFetch('/api/konnektive', {
    method: 'post',
    body: JSON.stringify({
      endpoint: '/campaign/query',
      params: {
        campaignId: 21
      }
    }),
    onResponseError({ request, response, options }) {
      console.log('onResponseError')
      console.dir(response)
    }
  })
  if(data.value && data.value.result === 'SUCCESS'){
    globalStore.setCampaign(data.value.message.data[21])
  }
}

if(process.client){
  globalStore.setWidth(window.innerWidth)
  window.addEventListener('resize', () => {
    globalStore.setWidth(window.innerWidth)
  })
}

onMounted(() => {
  setTimeout(() => {
    dataLayer.push({'event': 'PageView'});
  }, 2000)
  globalStore.setUrl(window.location.href)
  getCampaign()
})
</script>
