<template>
  <div class="layout layout__admin" :class="layoutClass">
    <AdminHeader />
    <AdminSidebar />
    <div class="layout__page">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';
const globalStore = useGlobalStore(),
      router = useRouter()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Dosable Admin Panel` : 'Dosable Admin Panel';
  }
})

const layoutClass = ref('')

if(process.client){
  setTimeout(() => {
    globalStore.setWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      globalStore.setWidth(window.innerWidth)
    })
    layoutClass.value = globalStore.width < 768 ? 'layout__admin-collapsed':''
  }, 0)
}

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

<style lang="scss">
@import url("~/assets/styles/admin.scss");
.layout__page{
  max-width: 1200px;
}
</style>