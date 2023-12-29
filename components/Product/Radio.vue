<template>
  <div class="product" :id="`product_${ID}`" :class="`product__${data.model}`">
    <div class="product__left">
      <div class="h7 product__name">{{ data.name }}</div>
      <Image class="product__image" format="webp" :name="data.img" />
    </div>
    <div class="product__right">
      <div class="h8">
        <div v-html="data[content]"></div>
        <button v-if="data.long.length > 0" class="product__link" @click="changeContent">Read {{content === 'short' ? 'more' : 'less'}}</button>
      </div>
      <div class="product__price h9">
        <span>{{ data.price }}$</span>
        ships every 30 days
      </div>
      <div class="product__checkbox">
        <input
          @change="changeCheckbox(ID, data.model)"
          type="radio"
          :value="data.model"
          name="products"
          :id="`model_${ID}`"
          :checked="data.model"
          :data-checked="data.model" />
        <label :for="`model_${ID}`">Suggest To Doctor</label>
      </div>
      <div class="product__top" v-if="ID === 'product_2'">
        <div class="product__recom">Recommended</div>
        <div class="product__best">Best Value</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';

const globalStore = useGlobalStore(),
      content = ref('short')

const props = defineProps({
  data: Object,
  ID: String
})

const changeContent = (): void => {
  content.value = content.value === 'short' ? 'long' : 'short'
}

const changeCheckbox = (id: string, model: boolean): void => {
  globalStore.changeProductModel(id, model)
}

if(globalStore.products['product_2'].price === 0 || globalStore.products['product_3'].price === 0){
  getCampaign()
}
</script>
