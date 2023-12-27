<template>
  <section class="start__step buttons">
    <div class="container">
      <h2>{{ globalStore.startQuestions[globalStore.startQuestion].question }}</h2>
      <h6 v-if="globalStore.startQuestions[globalStore.startQuestion].description">{{ globalStore.startQuestions[globalStore.startQuestion].description }}</h6>
      <div class="start__form">
        <div class="start__buttons">
          <button
            type="button"
            v-for="item in globalStore.startQuestions[globalStore.startQuestion].answers"
            class="btn"
            :class="model.includes(item) ? 'btn-red' : 'btn-light_gray'"
            @click="setModel(item)"
            v-html="item"></button>
        </div>
        <div class="start__group">
          <button
            type="button"
            :disabled="model.length === 0"
            @click.prevent="submit"
            class="btn btn-red">
            NEXT
          </button>
          <button
            type="button"
            @click.prevent="back"
            class="btn btn-light btn-red_text">
            BACK
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';

const model: Ref<string[]> = ref([]),
      globalStore = useGlobalStore(),
      emit = defineEmits(['step'])

const setModel = (val: string): void => {
  const index = model.value.indexOf(val)
  if (index > -1) {
    model.value.splice(index, 1)
    return
  }
  model.value.push(val)
}

const submit = () => {
  globalStore.setStartQuestionAnswer(globalStore.startQuestion, model.value)
  model.value = []

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, 0)
}

const back = (): void => {
  if(globalStore.startQuestion === 1){
    emit('step', 'form')
    return
  }
  globalStore.setStartQuestion(globalStore.startQuestion - 1)
}
</script>

<style lang="scss" scoped>
.start{
  &__form {
    max-width: 100%;
  }
  &__buttons{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button{
      margin-top: 0;
      margin-bottom: res(8, 16);
      @media(max-width:767px){
        margin-left: 4px;
        margin-right: 4px;
      }
      @media(min-width:768px){
        min-width: 250px;
      }
      &:not(:first-child){
        @media(min-width:768px){
          margin-left: res(8, 16);
        }
      }
    }
  }
}
</style>