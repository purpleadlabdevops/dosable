<template>
  <div class="layout layout__default">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Dosable` : 'Dosable';
  }
})

const router = useRouter()

onBeforeMount(() => {
  const sessionId = JSON.parse(sessionStorage.getItem('sessionId')),
        sessionRole = JSON.parse(sessionStorage.getItem('sessionRole'))

  if(typeof sessionId !== 'number' && typeof sessionRole !== 'number'){
    if(sessionRole !== 0){
      router.push('/admin/login')
    }
  }
})
</script>