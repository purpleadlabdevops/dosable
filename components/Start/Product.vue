<template>
  <div class="product" :id="`product_${ID}`" :class="`product__${data.model}`">
    <div class="product__left">
      <div class="product__checkbox">
        <input type="checkbox" v-model="model" @change="changeCheckbox(ID)" :id="`model_${ID}`" :checked="data.model" :data-checked="data.model">
        <label :for="`model_${ID}`"></label>
      </div>
      <div class="h7 product__name">{{ data.name }}</div>
      <Image class="product__image" format="webp" :name="data.img" />
    </div>
    <div class="product__right">
      <div class="h8" v-html="data.title"></div>
      <ul class="product__list" v-if="data.list.length > 0">
        <li v-for="item in data.list" class="h9">{{ item }}</li>
      </ul>
      <div class="h9">
        <div v-html="data[content]"></div>
        <button v-if="data.long.length > 0" class="product__link" @click="changeContent">Read {{content === 'short' ? 'more' : 'less'}}</button>
      </div>
      <div class="product__price h9">
        <span>{{ data.price }}$</span>
        ships every 30 days
      </div>
      <div class="product__save h8" v-if="data.save > 0">
        Save {{ data.save }}%
      </div>
      <div class="product__best h8" v-if="data.best">Best Seller</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';

const globalStore = useGlobalStore(),
      content = ref('short'),
      model = ref(true)

const props = defineProps({
  data: Object,
  ID: String
})

const changeContent = (): void => {
  content.value = content.value === 'short' ? 'long' : 'short'
}

const changeCheckbox = (id: string): void => {
  globalStore.changeModel(id, model)
}

// onMounted(() => {
  // console.log(data)
  // console.log(ID)
  // model.value = globalStore.products[ID].model
// })
</script>

<style lang="scss" scoped>
.product{
  max-width: 776px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  transition: .3s;
  @media(min-width:768px){
    display: flex;
  }
  &:not(:first-child){
    margin-top: 4rem;
  }
  &__left, &__right{
    position: relative;
    @media(min-width:768px){
      width: 50%;
    }
  }
  &__right{
    background: rgba(var(--light-blue2-rgb), .5);
    padding: res(15, 30);
  }
  * {
    color: var(--dark-blue);
  }
  .h7{
    @media(max-width:767px){
      max-width: calc(100% - 5rem);
      margin-left: auto;
    }
  }
  .h8{
    margin-bottom: 20px;
  }
  &__list{
    margin-bottom: 20px;
  }
  .h9{
    margin-bottom: 20px;
  }
  &__list{
    padding-left: 1rem;
    li.h9{
      margin-bottom: 0;
    }
  }
  &__price{
    span{
      font-size: 16px;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: 2.4px;
      text-transform: uppercase;
    }
  }
  &__image{
    display: block;
    width: 100%;
  }
  &__name{
    background: var(--light-blue4);
    padding: res(5, 15) res(10, 30);
    position: absolute;
    left: res(10, 24);
    right: res(10, 24);
    top: 0;
    transform: translate(0, -50%);
  }
  &__checkbox{
    position: absolute;
    left: 16px;
    top: -30px;
    transform: translateX(-100%);
    @media(min-width:768px){
      left: -18px;
      top: 3px;
    }
    input{
      display: none;
      &:checked + label{
        &:before{
          opacity: 1;
        }
      }
      &[data-checked="false"] + label{
        &:before{
          opacity: 0;
        }
      }
    }
    label{
      display: block;
      width: 18px;
      height: 18px;
      border-radius: 4px;
      background: var(--dark-blue);
      cursor: pointer;
      &:before{
        content: "\2713";
        color: var(--white);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: .25s;
        opacity: 0;
      }
    }
  }
  &__save, &__best{
    display: inline-flex;
    padding: 4px 15px 3px 15px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    transform: translate(0, -50%);
    color: var(--white) !important;
  }
  &__save{
    background: #00B67A;
    left: 30px;
  }
  &__best{
    background: #ED8000;
    left: 150px;
  }
  &__link{
    color: var(--red);
    font-size: 12px;
    font-weight: 400;
    line-height: 133.333%;
    background: none;
    border: none;
    padding: 0;
    margin-top: 1rem;
  }
  &__false{
    opacity: .3;
  }
}
</style>