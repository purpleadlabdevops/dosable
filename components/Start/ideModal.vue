<template>
  <section class="identity">
    <div class="identity__inner" :class="showIdentity">
      <button
        class="identity__close"
        type="button"
        @click.prevent="emit('step', 'identity')">
        <svg data-v-25c87022="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="x circle fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle-fill close-icon b-icon bi text-info"><g data-v-25c87022="" transform="translate(8 8) scale(1.3 1.3) translate(-8 -8)"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path></g></svg>
      </button>
      <div class="identity__card">
        <Image format="webp" name="identity" alt="default identify id" />
      </div>
      <h4>IDENTITY VERIFICATION</h4>
      <h3>Why do you need a photo of my ID?</h3>
      <p>We use your ID photo to verify your identity, for example your name and date of birth. Telemedicine laws require us to verify this information before prescribing medication.</p>
      <h3>Who sees this?</h3>
      <p>The photo of your ID will be stored securely and will only be shared with the patient support team and our identity verification platform.</p>
      <button
        type="button"
        class="btn"
        @click.prevent="emit('step', 'identity')">
        I understand
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
const emit = defineEmits(['step']),
      showIdentity = ref<String | Boolean>(false)

onMounted(() => {
  setTimeout(()=>{
    showIdentity.value = 'identity__inner-in'
  }, 250)
  document.documentElement.style.overflow = 'hidden'
  document.documentElement.style.height = '100vh';
  document.documentElement.style.width = '100vw';
})

onBeforeUnmount(() => {
  showIdentity.value = false
  document.documentElement.style.overflow = 'auto'
  document.documentElement.style.height = 'auto';
  document.documentElement.style.width = 'auto';
})
</script>

<style lang="scss" scoped>
.identity{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(var(--light-blue-rgb), 0.5);
  z-index: 102;
  overflow: hidden;
  &__inner{
    width: calc(100% - 30px);
    margin-left: 100%;
    height: 100vh;
    background: #fff;
    padding: 32px res(15, 32);
    transition: .5s ease;
    overflow-y: auto;
    @media(min-width:768px){
      width: 50%;
    }
    &-in{
      margin-left: 30px;
      @media(min-width:768px){
        margin-left: 50%;
      }
    }
  }
  &__close{
    background: none;
    padding: 0;
    border: none;
    position: absolute;
    right: 24px;
    top: 12px;
    * {
      pointer-events: none;
    }
    svg{
      width: 20px;
      height: auto;
      border-radius: 50%;
    }
    path{
      fill: var(--purple);
    }
  }
  h3{
    margin-top: res(20, 26);
    margin-bottom: 6px;
  }
  p{
    margin-bottom: 16px;
  }
  &__card{
    background: #f6f6f6;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    margin-left: -32px;
    margin-right: -32px;
    margin-top: -32px;
    @media(min-width:768px){
      min-height: 40vh;
    }
    & > img{
      display: block;
      margin: 0 auto 30px;
      width: 80%;
      @media(min-width:768px){
        width: 70%;
      }
    }
  }
}
</style>