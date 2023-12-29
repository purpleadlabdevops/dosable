<template>
  <div class="page page__quiz quiz">
    <div class="quiz__list">
      <div
        class="quiz__step quiz__step-2"
        v-if="step === 2">
        <h2>{{ averageH2 }}</h2>
        <div class="quiz__buttons">
          <button
            class="btn"
            type="button"
            v-for="(item, index) in averageItems"
            :class="average.includes(item) ? 'btn-gray_red' : 'btn-light_gray'"
            :key="`step_2_${index}`"
            @click.prevent="chooseAverage(item)">
            {{ item }}
          </button>
        </div>
      </div>

      <div
        class="quiz__step quiz__step-3"
        v-if="step === 3">
        <h2 v-html="moodH2"></h2>
        <div class="quiz__buttons">
          <button
            class="btn"
            type="button"
            v-for="(item, index) in moodItems"
            :class="mood.includes(item) ? 'btn-gray_red' : 'btn-light_gray'"
            :key="`step_3_${index}`"
            @click.prevent="chooseMood(item)">
            {{ item }}
          </button>
        </div>
        <div class="quiz__buttons">
          <button
            type="button"
            class="btn btn-light btn-red_text"
            @click.prevent="nextStep(2)">
            BACK
          </button>
        </div>
      </div>

      <div class="quiz__step quiz__step-4" v-if="step === 4">
        <h2>{{ symptomsH2 }}</h2>
        <div class="quiz__group">
          <button
            class="btn"
            type="button"
            v-for="(item, index) in symptomsItems"
            :class="symptoms.includes(item) ? 'btn-gray_red' : 'btn-light_gray'"
            :key="`step_4_${index}`"
            @click.prevent="chooseSymptoms(item)">
            {{ item }}
          </button>
        </div>
        <div class="quiz__buttons">
          <button
            type="button"
            class="btn btn-red"
            :disabled="symptoms.length === 0"
            @click.prevent="nextStep(6)">
            NEXT
          </button>
          <button
            type="button"
            class="btn btn-light btn-red_text"
            @click.prevent="nextStep(3)">
            BACK
          </button>
        </div>
      </div>

      <div class="quiz__step quiz__step-6" v-if="step === 6">
        <h2>{{ therapyH2 }}</h2>
        <div class="quiz__buttons">
          <button
            class="btn"
            type="button"
            v-for="(item, index) in therapyItems"
            :class="therapy.includes(item) ? 'btn-gray_red' : 'btn-light_gray'"
            :key="`step_6_${index}`"
            @click.prevent="chooseTherapy(item)">
            {{ item }}
          </button>
        </div>
        <div class="quiz__buttons">
          <button
            type="button"
            class="btn btn-light btn-red_text"
            @click.prevent="nextStep(4)">
            BACK
          </button>
        </div>
      </div>

      <div class="quiz__step quiz__step-7" v-if="step === 7">
        <h2>{{ triedH2 }}</h2>
        <div class="quiz__buttons">
          <button
            class="btn"
            type="button"
            v-for="(item, index) in triedItems"
            :class="tried.includes(item) ? 'btn-gray_red' : 'btn-light_gray'"
            :key="`step_7_${index}`"
            @click.prevent="chooseTried(item)">
            {{ item }}
          </button>
        </div>
        <div class="quiz__buttons">
          <button
            type="button"
            class="btn btn-light btn-red_text"
            @click.prevent="nextStep(6)">
            BACK
          </button>
        </div>
      </div>

      <div class="quiz__step quiz__step-8" v-if="step === 8">
        <h2>{{ serumsH2 }}</h2>
        <div class="quiz__buttons">
          <button
            class="btn"
            type="button"
            v-for="(item, index) in serumsItems"
            :class="serums.includes(item) ? 'btn-gray_red' : 'btn-light_gray'"
            :key="`step_8_${index}`"
            @click.prevent="chooseSerums(item)">
            {{ item }}
          </button>
        </div>
        <div class="quiz__buttons">
          <button
            type="button"
            class="btn btn-light btn-red_text"
            @click.prevent="nextStep(7)">
            BACK
          </button>
        </div>
      </div>

      <div class="quiz__step quiz__step-9" v-if="step === 9">
        <h2>Based on your answers you qualify for a free televisit</h2>
        <h4>This is your first step for a fungus free life</h4>
        <h5>Here are the next steps</h5>
        <div class="h8">1. Answer some patient intake questions for your no cost doctor appointment.</div>
        <div class="h8">2. Review and choose different medicine options</div>
        <div class="h8">3. Get your prescriptions safely and discreetly mailed to your home</div>
        <nuxt-link
          class="btn btn-red"
          to="/start">
          Start your free visit
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'quiz'
})

const step = ref(2),
      emit = defineEmits(['onTesting']),
      globalStore = useGlobalStore()

const nextStep = (index: number): void => {
  const layoutQuiz = document.querySelector<HTMLElement>('.layout__quiz'),
        headerDescription = document.querySelector<HTMLElement>('.header__description'),
        headerQuiz = document.querySelector<HTMLElement>('.header__quiz')

  step.value = index

  const gtm: any = useGtm()
  if(step.value === 2){
    gtm.trackEvent({
      event: 'QuizStart',
      label: 'QuizStart',
      category: 'category',
      action: 'click',
    })
  }

  if(headerQuiz !== null && layoutQuiz !== null){
    if( [0, 9].includes(step.value)){
      headerQuiz.style.background = 'var(--light-blue2)'
      layoutQuiz.style.background = 'var(--light-blue2)'
    } else {
      headerQuiz.style.background = 'var(--white)'
      layoutQuiz.style.background = 'var(--white)'
    }
  }

  if(layoutQuiz !== null){
    if(index > 0){
      layoutQuiz.classList.remove('layout__quiz-bg')
      return
    }
    layoutQuiz.classList.add('layout__quiz-bg')
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

const average: Ref<string[]> = ref([]),
      averageH2 = 'How do your toes feel on a day-to-day basis?',
      averageItems = ['Terrible','Okay','Good','Great'],
      chooseAverage = (val: string): void => {
        const index = average.value.indexOf(val)
        if (index > -1) {
          average.value.splice(index, 1)
          return
        }
        average.value.push(val)
        setTimeout(() => {
          nextStep(3)
        }, 500)
      }

const mood = ref(''),
      moodH2 = 'Are you experiencing toe fungus symptoms like itchiness and discharge regularly?',
      moodItems = ['Yes', 'No'],
      chooseMood = (val: string): void => {
        mood.value = val;
        setTimeout(() => {
          nextStep(4)
        }, 500)
      }

const symptoms = ref<Array<string>>([]),
      symptomsH2 = 'What are your top three toe fungus symptoms?',
      symptomsItems = ['Itchiness','Thickened Nails','Discolored Nails','Brittle, Crumbly Nails','Misshapen Nails','Smelly Toes','Nails Separated from Nail Bed'],
      chooseSymptoms = (val: string): void => {
        const index = symptoms.value.indexOf(val)
        if (index > -1) {
          symptoms.value.splice(index, 1)
          return
        }
        symptoms.value.push(val)
      }

const therapy = ref(''),
      therapyH2 = 'Have you used other toenail fungus remedies?',
      therapyItems = ['Yes', 'No'],
      chooseTherapy = (val: string) => {
        therapy.value = val;
        setTimeout(() => {
          nextStep(7)
        }, 500)
      }

const tried = ref(''),
      triedH2 = 'Did other toenail remedies work?',
      triedItems = ['Never','A little','Yes'],
      chooseTried = (val: string) => {
        tried.value = val;
        setTimeout(() => {
          nextStep(8)
        }, 500)
      }

const serums = ref(''),
      serumsH2 = 'Are you currently using any toenail fungus serums?',
      serumsItems = ['Yes', 'No'],
      chooseSerums = (val: string) => {
        serums.value = val;
        setTimeout(() => {
          nextStep(9)
        }, 500)

        const quizData = {
          average: {
            value: average.value,
            question: averageH2
          },
          mood: {
            value: mood.value,
            question: moodH2
          },
          symptoms: {
            value: symptoms.value,
            question: symptomsH2
          },
          therapy: {
            value: therapy.value,
            question: therapyH2
          },
          serums: {
            value: serums.value,
            question: serumsH2
          }
        }
        globalStore.setQuizData(quizData)
      }
</script>

<style lang="scss" scoped>
.quiz{
  position: relative;
  z-index: 2;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  padding-top: res(60, 80);
  &__step{
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    &-9{
      h2{
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }
      h5{
        margin: res(16, 32) 0 8px;
      }
      .h8{
        text-align: left;
        max-width: 570px;
        margin-left: auto;
        margin-right: auto;
      }
      .btn{
        margin-top: res(16, 32);
      }
    }
  }
  &__buttons{
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: res(16, 24);
    .btn{
      &:not(:first-child){
        margin-top: res(8, 16);
      }
    }
    & + .quiz__buttons{
      .btn-red{
        margin-top: res(16, 32);
      }
    }
  }
  &__group{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin-top: res(24, 48);
    margin-left: auto;
    margin-right: auto;
    .btn{
      min-width: 100px;
      margin-bottom: res(8, 16);
      &:not(:first-child){
        margin-left: res(8, 16);
      }
    }
  }
}
</style>
