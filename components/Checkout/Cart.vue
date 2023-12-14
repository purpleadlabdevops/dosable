<template>
  <section class="cart">
    <div class="cart__inner" :class="showCart">
      <button
        class="cart__close"
        type="button"
        @click.prevent="emit('step', 'summary')">
        <svg data-v-25c87022="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="x circle fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle-fill close-icon b-icon bi text-info"><g data-v-25c87022="" transform="translate(8 8) scale(1.3 1.3) translate(-8 -8)"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path></g></svg>
      </button>
      <h2>Edit your prescribed treatments</h2>
      <h3>Change of mind? Here are the recommended treatments:</h3>
      <h4>Preferred Treatment Type</h4>
      <div class="cart__head">
        Transdermal (skin) patch
        <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="presentation" aria-label="chevron down" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chevron-down b-icon bi vs__open-indicator"><g><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></g></svg>
      </div>
      <div
        class="cart__product"
        v-for="(product, id) in globalStore.products">
        <div class="cart__checkbox">
          <input
            type="checkbox"
            v-model="product.model"
            @change="changeCheckbox(id)"
            :id?="id"
            :key="id" />
          <label :for?="id"></label>
        </div>
        <div class="cart__info">
          <Image format="webp" :name="product.img" />
          <div class="cart__desc">
            <div class="cart__name">{{ product.name }}</div>
            <div
              class="cart__txt"
              :class="`short-${id}`">
              {{ product.short }}
            </div>
            <div
              class="cart__txt"
              :class="`long-${id}`"
              style="display: none;">
              {{ product.long }}
            </div>
            <button
              class="cart__more"
              @click.prevent="readMore(id, $event.target)"
              :key="`read_${id}`">
              Read More
            </button>
            <ul class="cart__radio">
              <li>
                <input
                  :name="`radio_${id}`"
                  @change="changeShip('three')"
                  :checked="globalStore.productsShip === 'three' ? true : false"
                  type="radio"
                  :id="`three_${id}`">
                <label
                  :for="`three_${id}`">
                  ${{ product.three }} - Ship every 3 months
                </label>
              </li>
              <li>
                <input
                  :name="`radio_${id}`"
                  @change="changeShip('one')"
                  :checked="globalStore.productsShip === 'one' ? true : false"
                  type="radio"
                  :id="`one_${id}`">
                <label
                  :for="`one_${id}`">
                  ${{ product.one }} - Ship every month
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        class="btn btn-lg"
        type="button"
        @click.prevent="emit('step', 'summary')">
        UPDATE
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';

const globalStore = useGlobalStore(),
      emit = defineEmits(['step']),
      showCart = ref<string | boolean>(false)

const changeShip = (val: string): void => {
  globalStore.changeProductsShip(val)
}

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

const readMore = (id: string | number, e: EventTarget | null): void => {
  const btn = (e as HTMLButtonElement),
        short = document.querySelector<HTMLElement>(`.short-${id}`),
        long = document.querySelector<HTMLElement>(`.long-${id}`)

  if(btn.innerHTML === 'Read More'){
    btn.innerHTML = 'Read Less'
    if(short !== null && long !== null){
      short.style.display = 'none'
      long.style.display = 'block'
    }
  } else {
    btn.innerHTML = 'Read More'
    if(short !== null && long !== null){
      short.style.display = 'block'
      long.style.display = 'none'
    }
  }
}

const changeCheckbox = (id: string | number): void => {
  if(!globalStore.products['product_1'].model && !globalStore.products['product_2'].model){
    alert(' Please select at least one product. Because of your medical history, it would not be safe to take Estrogen without Progesterone.')
    globalStore.changeModel(id, true)
  }
}
</script>

<style lang="scss" scoped>
.cart{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(26, 106, 114, 0.5);
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
  h2{
    font-size: 26px;
    font-weight: 500;
    font-family: "Atten New";
    margin-bottom: 8px;
  }
  h3{
    font-size: 18px;
    margin-bottom: 76px;
    font-weight: 400;
  }
  h4{
    font-size: 17px;
    margin-bottom: 8px;
    font-weight: 400;
  }
  &__head{
    position: relative;
    padding: 8px 12px;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 24px;
    border-bottom: 1px solid var(--text);
    svg{
      display: block;
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &__product{
    margin-top: 24px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
  }
  &__radio{
    margin-top: 30px;
    @media(min-width:768px){
      display: flex;
    }
    li{
      &:not(:first-child){
        @media(max-width:767px){
          margin-top: 15px;
        }
        @media(min-width:768px){
          margin-left: 15px;
        }
      }
    }
    label{
      font-size: 15px;
      position: relative;
      padding-left: 24px;
      display: block;
      &:before{
        content: "";
        position: absolute;
        left: 0; top: 0;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        border: 1px solid var(--cyan);
      }
    }
    input{
      display: none;
      &:checked + label:before{
        display: block;
        background: var(--cyan);
      }
    }
  }
  &__checkbox{
    width: 24px;
    label{
      font-size: 15px;
      position: relative;
      padding-left: 24px;
      display: block;
      &:before{
        content: "";
        position: absolute;
        background: var(--cyan);
        width: 16px;
        height: 16px;
        border-radius: 2px;
        left: 0; top: 0;
      }
      &:after{
        content:"\2713";
        position: absolute;
        color: var(--white);
        left: 3px; top: 2px;
        display: none;
        font-size: 12px;
        font-weight: 700;
      }
    }
    input{
      display: none;
      &:checked + label:after{
        display: block;
      }
    }
  }
  &__info{
    background: rgb(248, 248, 248);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    img{
      width: res(70, 235);
      height: auto;
    }
  }
  &__desc{
    padding: res(15, 24);
  }
  &__name{
    margin-bottom: res(10, 13);
    font-size: res(15, 17);
    font-weight: 700;
  }
  &__more{
    font-size: res(11, 13);
    color: var(--purple);
    background: none;
    padding: 0;
    border: none;
    margin-top: 5px;
  }
  .btn-lg{
    width: 100%;
    color: rgb(205, 252, 177);
    @media(min-width:768px){
      width: 250px;
    }
  }
}
</style>