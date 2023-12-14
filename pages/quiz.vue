<template>
  <div class="page page__health">
    <div class="health__list">

      <div
        class="health__step health__step-0"
        v-if="step === 0">
        <h1>Discover your best self, today.</h1>
        <p>FIND OUT IF WINONA IS RIGHT FOR YOU</p>
        <button
          type="button"
          class="btn btn-plum"
          @click="nextStep(1)">
          Start quiz
        </button>
      </div>

      <div
        class="health__step health__step-1"
        v-if="step === 1">
        <h3>How old are you?</h3>
        <p>This helps us understand where you are in your journey.</p>
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
          class="btn btn-plum"
          :disabled="!age || age < 18"
          @click.prevent="nextStep(2)">
          continue
        </button>
      </div>

      <div
        class="health__step health__step-2"
        v-if="step === 2">
        <h3>How does your body feel on an average day?</h3>
        <button
          class="btn btn-gray"
          type="button"
          v-for="(item, index) in averageItems"
          :key="`step_2_${index}`"
          @click.prevent="chooseAverage(item, $event.target)">
          {{ item }}
        </button>
        <button
          type="button"
          class="btn btn-cyan"
          :disabled="!average"
          @click.prevent="nextStep(3)">
          NEXT
        </button>
        <button
          type="button"
          class="btn btn-cyan_txt"
          @click.prevent="nextStep(1)">
          BACK
        </button>
      </div>

      <div
        class="health__step health__step-3"
        v-if="step === 3">
        <h3>Are you experiencing uncharacteristic mood changes? <br> (sadness, irritability, etc.)</h3>
        <button
          class="btn btn-gray"
          type="button"
          v-for="(item, index) in moodItems"
          :key="`step_3_${index}`"
          @click.prevent="chooseMood(item, $event.target)">
          {{ item }}
        </button>
        <button
          type="button"
          class="btn btn-cyan"
          :disabled="!mood"
          @click.prevent="nextStep(4)">
          NEXT
        </button>
        <button
          type="button"
          class="btn btn-cyan_txt"
          @click.prevent="nextStep(2)">
          BACK
        </button>
      </div>

      <div class="health__step health__step-4" v-if="step === 4">
        <h3>What are your top three symptoms?</h3>
        <p>Don’t worry, you’ll be able to select more later.</p>
        <div class="health__group">
          <button
            class="btn btn-gray"
            type="button"
            v-for="(item, index) in symptomsItems"
            :key="`step_4_${index}`"
            @click.prevent="chooseSymptoms(item, $event.target)">
            {{ item }}
          </button>
          <p v-if="symptoms.length !== 3">UP TO 3 SYMPTOMS</p>
        </div>
        <button
          type="button"
          class="btn btn-cyan"
          :disabled="symptoms.length !== 3"
          @click.prevent="nextStep(5)">
          NEXT
        </button>
        <button
          type="button"
          class="btn btn-cyan_txt"
          @click.prevent="nextStep(3)">
          BACK
        </button>
      </div>

      <div class="health__step health__step-5" v-if="step === 5">
        <div class="health__menopause">
          <Image format="webp" name="about_menopause" alt="About menopause" />
          <div class="health__menopause__text">
            <h3>You’re not alone. Did you know there are actually 100+ menopause-related symptoms?</h3>
            <p>Want to check all your possible symptoms? Enter your email address below and receive our free ebook to learn how changes in hormone levels during menopause can cause symptoms such as weight gain, fatigue, brain fog, painful sex, poor sleep, and more.</p>
            <div class="health__menopause__buttons">
              <input
                type="email"
                v-model="email"
                v-on:input="emailInput(email)"
                placeholder="yourname@email.com"
                :style="emailError ? 'border-color: red' : ''"
              />
              <button
                type="button"
                class="btn btn-cyan"
                :disabled="emailError"
                @click.prevent="emailSubmit">
                NEXT
              </button>
              <button
                type="button"
                class="btn btn-cyan_txt"
                @click.prevent="nextStep(6)">
                SKIP
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="health__step health__step-6" v-if="step === 6">
        <h3>Are you familiar with Bioidentical Hormone Replacement <br> Therapy (HRT) for women?</h3>
        <button
          class="btn btn-gray"
          type="button"
          v-for="(item, index) in therapyItems"
          :key="`step_6_${index}`"
          @click.prevent="chooseTherapy(item, $event.target)">
          {{ item }}
        </button>
        <button
          type="button"
          class="btn btn-cyan"
          :disabled="!therapy"
          @click.prevent="nextStep(7)">
          NEXT
        </button>
        <button
          type="button"
          class="btn btn-cyan_txt"
          @click.prevent="nextStep(5)">
          BACK
        </button>
      </div>

      <div class="health__step health__step-7" v-if="step === 7">
        <h3>Have you ever tried using Bioidentical Hormone <br> Replacement Therapy (HRT) for treating menopausal <br> symptoms?</h3>
        <button
          class="btn btn-gray"
          type="button"
          v-for="(item, index) in triedItems"
          :key="`step_7_${index}`"
          @click.prevent="chooseTried(item, $event.target)">
          {{ item }}
        </button>
        <button
          type="button"
          class="btn btn-cyan"
          :disabled="!tried"
          @click.prevent="nextStep(8)">
          NEXT
        </button>
        <button
          type="button"
          class="btn btn-cyan_txt"
          @click.prevent="nextStep(6)">
          BACK
        </button>
      </div>

      <div class="health__step health__step-8" v-if="step === 8">
        <h3>Are you currently taking any birth control?</h3>
        <button
          class="btn btn-gray"
          type="button"
          v-for="(item, index) in birthItems"
          :key="`step_8_${index}`"
          @click.prevent="chooseBirth(item, $event.target)">
          {{ item }}
        </button>
        <button
          type="button"
          class="btn btn-cyan"
          :disabled="!birth"
          @click.prevent="nextStep(9)">
          NEXT
        </button>
        <button
          type="button"
          class="btn btn-cyan_txt"
          @click.prevent="nextStep(7)">
          BACK
        </button>
      </div>

      <div class="health__step health__step-9" v-if="step === 9">
        <h4>Based on your responses, we are unable to determine if you are a good candidate for HRT. <br class="hidden desktop-sm:block"> Please take our onboarding quiz, so we can collect more information and give you a definitive answer.</h4>
        <nuxt-link
          class="btn btn-cyan"
          to="/checkout">
          Start my free visit
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'quiz'
})

const step = ref(0)

const emit = defineEmits(['onTesting'])

const layoutQuiz = document.querySelector('.layout__quiz'),
      nextStep = (index: number): void => {
        step.value = index
        if(layoutQuiz !== null){
          if(index > 0){
            layoutQuiz.classList.remove('layout__quiz-bg')
            return
          }
          layoutQuiz.classList.add('layout__quiz-bg')
        }
      }

const age = ref()

const average = ref(false),
      averageItems = ['Great', 'Pretty Good', 'Could be better', `...Don't Ask`],
      chooseAverage = (val: string, e: EventTarget | null): void => {
        document.querySelectorAll('.health__step-2 .btn-gray').forEach(el => el.classList.remove('active'))
        average.value = val ? true : false;
        (e as HTMLButtonElement).classList.add('active')
      }

const mood = ref(false),
      moodItems = ['Yes', 'No'],
      chooseMood = (val: string, e: EventTarget | null): void => {
        document.querySelectorAll('.health__step-3 .btn-gray').forEach(el => el.classList.remove('active'))
        mood.value = val ? true : false;
        (e as HTMLButtonElement).classList.add('active')
      }

const symptoms = ref<Array<string>>([]),
      symptomsItems = ['HOT FLASHES','SLEEP DISRUPTIONS','ANXIETY','LOW LIBIDO','NIGHT SWEATS','MOOD SWINGS','SKIN CHANGES','LOW ENERGY','WEIGHT GAIN','FATIGUE','BRAIN FOG','MUSCLE LOSS','VAGINAL DRYNESS','HAIR CHANGES','URINARY CONCERNS','OTHER'],
      chooseSymptoms = (val: string, e: EventTarget | null) => {
        if(symptoms.value.includes(val)){
          const includedIndex = symptoms.value.indexOf(val)
          symptoms.value.splice(includedIndex, 1);
          document.querySelectorAll('.health__step-4 .btn-gray').forEach(el => {
            el.setAttribute('disabled', '')
          })
        } else {
          symptoms.value.push(val)
          if(symptoms.value.length === 3){
            document.querySelectorAll('.health__step-4 .btn-gray').forEach(el => {
              if( !symptoms.value.includes(el.innerHTML) ){
                el.removeAttribute('disabled')
              }
            })
          }
        }
        (e as HTMLButtonElement).classList.toggle('active')
      }

const email = ref(''),
      emailError = ref(false),
      regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      emailInput = (val: string | null) => {
        emailError.value = !regex.test(email.value)
      },
      emailSubmit = () => {
        if(regex.test(email.value)){
          emailError.value = false
          step.value = 6
          return
        }
        emailError.value = true
      }

const therapy = ref<string | boolean>(false),
      therapyItems = ['Yes', 'No'],
      chooseTherapy = (val: string, e: EventTarget | null) => {
        document.querySelectorAll('.health__step-6 .btn-gray').forEach(el => el.classList.remove('active'))
        therapy.value = val;
        (e as HTMLButtonElement).classList.add('active')
      }

const tried = ref<string | boolean>(false),
      triedItems = ['Yes', 'No'],
      chooseTried = (val: string, e: EventTarget | null) => {
        document.querySelectorAll('.health__step-7 .btn-gray').forEach(el => el.classList.remove('active'))
        tried.value = val;
        (e as HTMLButtonElement).classList.add('active')
      }

const birth = ref<string | boolean>(false),
      birthItems = ['I am not taking any birth control.', 'Non-hormonal.', 'Hormonal birth control.'],
      chooseBirth = (val: string, e: EventTarget | null) => {
        document.querySelectorAll('.health__step-8 .btn-gray').forEach(el => el.classList.remove('active'))
        birth.value = val;
        (e as HTMLButtonElement).classList.add('active')
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
.page__health{
  position: relative;
  z-index: 2;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  width: 100%;
  h1{
    color: rgb(43, 38, 96);
    font-size: res(30, 48);
    margin-bottom: res(20, 30);
    letter-spacing: -1px;
    text-align: center;
    font-weight: 500;
  }
  p{
    letter-spacing: res(1, 2.24);
    font-size: res(16, 20);
    text-align: center;
  }
  h3{
    font-size: res(26, 40);
    margin-bottom: 8px;
    color: #000;
    text-align: center;
    & + .btn-gray{
      margin-top: res(30, 40);
    }
    @media(max-width:767px){
      br{ display: none; }
    }
  }
  h4{
    font-size: res(20, 28);
    margin-bottom: res(20, 30);
    text-align: center;
    letter-spacing: 0.28px;
  }
  input{
    display: block;
    width: 100%;
    max-width: 410px;
    height: 56px;
    border-radius: 50px;
    font-size: 20px;
    border: 1px solid rgb(107, 114, 128);
    text-align: center;
    padding: 0 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
  }
  .btn{
    width: 100%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    @media(min-width:768px){
      width: 400px;
    }
    &-plum{
      margin-top: 50px;
    }
    &-gray + .btn-cyan{
      margin-top: 100px;
    }
    &-cyan, &-cyan_txt{
      width: 270px;
    }
  }
}
.health{
  &__step{
    padding-left: 10px;
    padding-right: 10px;
    &-0{
      p{
        font-size: 14px;
      }
    }
    &-5{
      h3{
        text-align: left;
      }
      p{
        text-align: left;
        letter-spacing: 0px;
      }
    }
  }
  &__group{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1023px;
    margin-top: 30px;
    margin-bottom: 100px;
    .btn{
      width: auto;
      font-size: res(13, 16);
      padding: res(10, 18) res(20, 40);
      margin: res(5, 8);
      @media(max-width:767px){
        height: auto;
      }
    }
    p{
      width: 100%;
      font-size: 14px;
      margin-top: 15px;
    }
  }
  &__menopause{
    max-width: 1340px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 res(10, 20);
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    img{
      display: block;
      width: 37%;
      @media(max-width:767px){
        display: none;
      }
    }
    &__text{
      @media(min-width:768px){
        width: 63%;
      }
      h3{
        margin-bottom: 30px;
      }
    }
    &__buttons{
      @media(min-width:768px){
        max-width: 450px;
      }
      input{
        margin-bottom: 40px;
      }
    }
  }
}
</style>
