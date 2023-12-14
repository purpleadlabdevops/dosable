<template>
  <section class="page thanks" :style="`height: calc(100vh - ${footerHeight}px)`">
    <div class="container">
      <h1>
        <span>Thank you!</span> <br>
        Your order was received, we will contact you shortly.
      </h1>
    </div>
  </section>
</template>

<script setup>
const footerHeight = ref(0)
onMounted(function(){
  setTimeout(()=>{
    const footer = document.querySelector('.footer')
    footerHeight.value = footer.clientHeight
  }, 50)
})
</script>

<style lang="scss" scoped>
.thanks{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  h1{
    color: var(--plum);
    font-size: res(40, 72);
    line-height: 1.1;
    font-weight: 500;
    font-family: 'Hatton', serif;
    text-align: center;
    span{
      color: var(--purple);
    }
  }
}
</style>