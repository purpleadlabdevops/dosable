<template>
  <div class="product" :id="`product_${ID}`" :class="`product__${data.model}`">
    <div class="product__left">
      <div class="product__checkbox">
        <input
          @change="changeCheckbox(ID, data.model)"
          type="checkbox"
          :value="data.model"
          :id="`model_${ID}`"
          :checked="data.model" />
        <label :for="`model_${ID}`" ></label>
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
      content = ref('short')

const props = defineProps({
  data: Object,
  ID: String
})

const changeContent = (): void => {
  content.value = content.value === 'short' ? 'long' : 'short'
}

const changeCheckbox = (id: string, model: boolean): void => {
  globalStore.changeSupplementsModel(id, model ? false : true)
}
</script>
