<template>
  <div class="page page__home">
    <HomeBanner />
    <HomeBacked />
    <HomeCustomers />
    <HomeComp />
    <HomeReview />
    <HomeAdvantages />
    <HomeFaq />
    <HomeTreatments />
    <HomeDeal />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home page'
})

onMounted(() => {
  setTimeout(() => {
    console.log('dataLayer PageView')
    console.dir(dataLayer)
    dataLayer.push({'event': 'PageView'});
  }, 2000)
})
</script>