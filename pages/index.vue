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
})
</script>
