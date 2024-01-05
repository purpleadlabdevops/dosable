<template>
  <section class="cart">
    <div class="cart__inner" :class="showCart">
      <button
        class="cart__close"
        type="button"
        @click.prevent="emit('step', 'summary')">
        <svg data-v-25c87022="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="x circle fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle-fill close-icon b-icon bi text-info"><g data-v-25c87022="" transform="translate(8 8) scale(1.3 1.3) translate(-8 -8)"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path></g></svg>
      </button>
      <div class="cart__titles">
        <h2>Edit your prescribed treatments</h2>
        <div class="h7">Change of mind? Here are the recommended treatments:</div>
      </div>
      <div class="h7">Preferred Treatment Type</div>
      <div class="products__list">
        <ProductRadio v-for="(product, index) in globalStore.products" :data="product" :ID="index" :key="index" />
      </div>
      <div class="cart__buttons">
        <button
          type="button"
          class="btn btn-white btn-red-border"
          @click.prevent="emit('step', 'summary')">
          CANCEL
        </button>
        <button
          type="button"
          class="btn btn-red"
          @click.prevent="emit('step', 'summary')">
          UPDATE
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const globalStore = useGlobalStore(),
      emit = defineEmits(['step']),
      showCart = ref<String | Boolean>(false)

onMounted(() => {
  setTimeout(()=>{
    showCart.value = 'cart__inner-in'
  }, 250)
  document.documentElement.style.overflow = 'hidden'
  document.documentElement.style.height = '100vh';
  document.documentElement.style.width = '100vw';
})

onBeforeUnmount(() => {
  showCart.value = false
  document.documentElement.style.overflow = 'auto'
  document.documentElement.style.height = 'auto';
  document.documentElement.style.width = 'auto';
})
</script>

<style lang="scss" scoped>
.cart{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background: rgba(var(--light-blue-rgb), 0.5);
  z-index: 102;
  overflow: hidden;
  &__inner{
    width: calc(100% - 30px);
    margin-left: 100%;
    height: calc(var(--vh, 1vh) * 100);
    background: #fff;
    padding: 32px res(15, 32);
    transition: .5s ease;
    overflow-y: auto;
    @media(min-width:768px){
      width: 70%;
    }
    &-in{
      margin-left: 30px;
      @media(min-width:768px){
        margin-left: 30%;
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
  &__buttons{
    display: flex;
    justify-content: space-between;
    .btn{
      width: calc(50% - 1rem);
    }
  }
  .products__list{
    padding-top: 60px;
    padding-left: 0px;
    padding-bottom: 60px;
  }
  &__titles{
    text-align: center;
    padding-top: res(16, 32);
    margin-bottom: res(32, 64);
  }
}
</style>