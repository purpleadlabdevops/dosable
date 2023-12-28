<template>
  <section class="start__step buttons">
    <div class="container">
      <h2>{{ globalStore.startQuestions[globalStore.startQuestion].question }}</h2>
      <h6 v-if="globalStore.startQuestions[globalStore.startQuestion].description & globalStore.startQuestion !== 14">{{ globalStore.startQuestions[globalStore.startQuestion].description }}</h6>
      <div class="start__form">
        <div class="start__buttons">
          <button
            type="button"
            v-for="item in globalStore.startQuestions[globalStore.startQuestion].answers"
            class="btn"
            :class="model === item ? 'btn-gray_red' : 'btn-light_gray'"
            @click="setModel(item)"
            v-html="item"></button>
        </div>
        <div class="start__group">
          <button
            type="button"
            @click.prevent="back"
            class="btn btn-light btn-red_text">
            BACK
          </button>
        </div>
        <div class="h9" v-if="globalStore.startQuestion === 14">{{ globalStore.startQuestions[globalStore.startQuestion].description }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';

const model = ref<string>(''),
      globalStore = useGlobalStore(),
      emit = defineEmits(['step'])

const setModel = (val: string): void => {
  model.value = val
  setTimeout(() => {
    submit()
  }, 500)
}

const submit = () => {
  globalStore.setStartQuestionAnswer(globalStore.startQuestion, model.value)

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, 0)

  model.value = ''
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
    max-width: 992px;
  }
  &__buttons{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button{
      margin-top: 0;
      margin-bottom: 1rem;
      min-width: 250px;
      &:not(:first-child){
        @media(min-width:768px){
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>