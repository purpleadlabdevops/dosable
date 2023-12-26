<template>
  <section class="start__step textarea">
    <div class="container">
      <h2>{{ globalStore.startQuestions[globalStore.startQuestion].question }}</h2>
      <h6>{{ globalStore.startQuestions[globalStore.startQuestion].description }}</h6>
      <div class="start__form">
        <div class="start__field">
          <textarea
            id="field__text"
            v-model="model"
            placeholder="FREE TEXT"></textarea>
          <p class="start__error" v-if="error">{{ error }}</p>
        </div>
        <div class="start__group">
          <button
            type="button"
            :disabled="!model"
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

const model = ref<string>(''),
      error = ref<string | boolean>(false),
      globalStore = useGlobalStore(),
      emit = defineEmits(['step'])

const submit = () => {
  setTimeout(() => error.value = false, 3000)

  if(!model.value){
    error.value = 'Please insert free text'
    return
  }

  globalStore.setStartQuestionAnswer(globalStore.startQuestion, model.value)

  model.value = ''

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
.start__form {
  max-width: 600px;
}
</style>