<template>
  <div class="page page__quiz quiz">
    <div class="quiz__list">

      <div
        class="quiz__step quiz__step-0"
        v-if="step === 0">
        <h2>Discover your best self, today.</h2>
        <h6>FIND OUT IF Dosable IS RIGHT FOR YOU</h6>
        <button
          type="button"
          class="btn btn-red"
          @click="nextStep(2)">
          Start quiz
        </button>
      </div>

<!--       <div
        class="quiz__step quiz__step-1"
        v-if="step === 1">
        <h2>{{ ageH2 }}</h2>
        <h6>{{ ageH6 }}</h6>
        <input
          type="number"
          v-model="age"
          placeholder="Age"
          min="18" max="99"
          inputmode="numeric"
          pattern="[0-9]*"
          minlength="2"
          maxlength="2"
        />
        <button
          type="button"
          class="btn btn-red"
          :disabled="!age || age < 18"
          @click.prevent="nextStep(2)">
          continue
        </button>
      </div> -->

      <div
        class="quiz__step quiz__step-2"
        v-if="step === 2">
        <h2>{{ averageH2 }}</h2>
        <div class="quiz__buttons">
          <button
            class="btn"
            type="button"
            v-for="(item, index) in averageItems"
            :class="average.includes(item) ? 'btn-light' : 'btn-light_gray'"
            :key="`step_2_${index}`"
            @click.prevent="chooseAverage(item)">
            {{ item }}
          </button>
        </div>
        <div class="quiz__buttons">
          <button
            type="button"
            class="btn btn-red"
            :disabled="average.length === 0"
            @click.prevent="nextStep(3)">
            NEXT
          </button>
          <button
            type="button"
            class="btn btn-light btn-red_text"
            @click.prevent="nextStep(1)">
            BACK
          </button>
        </div>
      </div>

      <div
        class="quiz__step quiz__step-3"
        v-if="step === 3">
        <h2 v-html="moodH2"></h2>
        <div class="quiz__buttons">
          <button
            class="btn btn-light_gray"
            type="button"
            v-for="(item, index) in moodItems"
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
            :class="symptoms.includes(item) ? 'btn-light' : 'btn-light_gray'"
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
            class="btn btn-light_gray"
            type="button"
            v-for="(item, index) in therapyItems"
            :key="`step_6_${index}`"
            @click.prevent="chooseTherapy(item)">
            {{ item }}
          </button>
        </div>
        <div class="quiz__buttons">
          <button
            type="button"
            class="btn btn-light btn-red_text"
            @click.prevent="nextStep(5)">
            BACK
          </button>
        </div>
      </div>

      <div class="quiz__step quiz__step-7" v-if="step === 7">
        <h2>{{ triedH2 }}</h2>
        <div class="quiz__buttons">
          <button
            class="btn btn-light_gray"
            type="button"
            v-for="(item, index) in triedItems"
            :key="`step_7_${index}`"
            @click.prevent="chooseTried(item)">
            {{ item }}
          </button>
        </div>
        <div class="quiz__buttons">
          <button
            type="button"
            class="btn btn-red"
            :disabled="tried.length === 0"
            @click.prevent="nextStep(8)">
            NEXT
          </button>
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
            class="btn btn-light_gray"
            type="button"
            v-for="(item, index) in serumsItems"
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
        <h2>Thank You !</h2>
        <h6>Great News! We think DOSABLE can help treat your toenail fungus. Based on your answers, you're eligible for a consultation with a doctor who can walk you through the next steps. You’ve taken the first step to clear, healthy nails with our transformative prescription nail serum!</h6>
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

const step = ref(0),
      emit = defineEmits(['onTesting']),
      globalStore = useGlobalStore()

const nextStep = (index: number): void => {
        const layoutQuiz = document.querySelector('.layout__quiz')
        step.value = index
        if(layoutQuiz !== null){
          if(index > 0){
            layoutQuiz.classList.remove('layout__quiz-bg')
            return
          }
          layoutQuiz.classList.add('layout__quiz-bg')
        }
      }

// const age = ref(),
//       ageH2 = 'How old are you?',
//       ageH6 = 'This helps us understand where you are in your journey.'

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
      }

const mood = ref(''),
      moodH2 = 'Are you experiencing toe fungus symptoms like itchiness and discharge regularly?',
      moodItems = ['Yes', 'No'],
      chooseMood = (val: string): void => {
        mood.value = val;
        nextStep(4)
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
        nextStep(7)
      }

const tried = ref(''),
      triedH2 = 'Did other toenail remedies work?',
      triedItems = ['Never','A little','Yes'],
      chooseTried = (val: string) => {
        tried.value = val;
      }

const serums = ref(''),
      serumsH2 = 'Are you currently using any toenail fungus serums?',
      serumsItems = ['Yes', 'No'],
      chooseSerums = (val: string) => {
        serums.value = val;
        nextStep(9)
        const layoutQuiz = document.querySelector('.layout__quiz')
        if(layoutQuiz !== null){
          layoutQuiz.classList.add('layout__quiz-bg')
        }

        const quizData = {
          // age: {
          //   value: age.value,
          //   question: ageH2
          // },
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
        console.dir(quizData)
      }

onMounted(() => {
  setTimeout(()=>{
    const headerQuiz = document.querySelector<HTMLElement>('.header__quiz'),
          pageHealth = document.querySelector<HTMLElement>('.page__health')
    if(pageHealth !== null && headerQuiz !== null){
      pageHealth.style.height = `calc(100vh - ${headerQuiz.clientHeight}px`
    }
  }, 0)
})
</script>

<style lang="scss" scoped>
.quiz{
  position: relative;
  z-index: 2;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  width: 100%;
  &__step{
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    &-9{
      h6{
        max-width: 630px;
        margin-left: auto;
        margin-right: auto;
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
  }
  &__group{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin-top: 3rem;
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
