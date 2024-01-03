<template>
  <section class="start__step buttons">
    <div class="container">
      <h2>{{ globalStore.startQuestions[globalStore.startQuestion].question }}</h2>
      <h6 v-if="globalStore.startQuestions[globalStore.startQuestion].description">{{ globalStore.startQuestions[globalStore.startQuestion].description }}</h6>
      <div class="start__form">
        <div class="start__images">
          <button
            type="button"
            v-for="item in globalStore.startQuestions[globalStore.startQuestion].answers"
            class="img"
            :class="model === item ? 'img-active' : ''"
            @click="setModel(item)">
            <Image format="webp" :name="item" alt="nail image" />
          </button>
          <label class="start__upload" for="nail">
            <div class="h3">{{ file ? "REUPLOAD" : "UPLOAD" }}</div>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5445 0.172543C18.1349 0.267622 17.0648 0.50936 16.1664 0.709814C15.268 0.910216 13.8736 1.22284 13.0676 1.40445C12.2617 1.58612 10.8781 1.89683 9.9929 2.09502C9.10771 2.29316 7.75651 2.59641 6.99022 2.76891C6.22394 2.94142 5.12357 3.18655 4.54499 3.31365C3.42401 3.55992 3.44351 3.55379 3.27892 3.71255C3.12984 3.85638 3.13835 3.99882 3.36299 5.11789C3.46869 5.64445 3.55517 6.08427 3.55517 6.09529C3.55517 6.10636 2.81843 6.11537 1.91801 6.11537H0.280858L0.140429 6.26584L0 6.4163V14.5577V22.6991L0.140429 22.8495L0.280858 23H8.56925H16.8576L16.9924 22.8758L17.1273 22.7516L17.1513 20.2643L17.1753 17.7769L17.6797 17.6623C18.1377 17.5583 21.7535 16.7478 22.3879 16.607C22.9307 16.4865 23.0656 16.3076 22.9732 15.8304C22.9446 15.6825 22.8028 14.9476 22.6581 14.1973C22.5135 13.4471 22.3295 12.5089 22.2493 12.1125C22.1691 11.7161 22.0371 11.0443 21.9558 10.6197C21.8096 9.85562 21.7267 9.43021 20.9228 5.31746C20.0481 0.841802 19.9365 0.289139 19.8888 0.193494C19.7625 -0.0592609 19.557 -0.0624525 18.5445 0.172543ZM19.44 2.44157C19.6809 3.66107 19.8723 4.64424 20.4908 7.83986C20.6114 8.46274 20.8166 9.50516 20.9468 10.1564C21.0771 10.8075 21.2266 11.572 21.279 11.8551C21.3314 12.1382 21.4843 12.9258 21.6185 13.6053C22.0034 15.553 22.0189 15.6432 21.9738 15.6864C21.9506 15.7088 21.6072 15.7983 21.2109 15.8855C20.8145 15.9728 19.7621 16.2077 18.872 16.4077C17.982 16.6076 17.2307 16.7712 17.2025 16.7712C17.1665 16.7712 17.1513 15.2279 17.1513 11.5938V6.4163L17.0108 6.26584L16.8704 6.11537H10.6763H4.48215L4.33019 5.33033C4.2466 4.89854 4.17857 4.50808 4.17895 4.46253C4.17953 4.40086 4.27456 4.35885 4.55205 4.29764C4.75686 4.25245 5.44325 4.09951 6.07741 3.95779C6.71158 3.81607 7.70606 3.59384 8.28738 3.46396C8.8687 3.33404 10.0037 3.07943 10.8096 2.89812C12.1821 2.58936 14.7307 2.01884 16.0943 1.71517C16.4246 1.64161 17.2353 1.45789 17.8959 1.3068C18.5565 1.15576 19.115 1.04972 19.137 1.07113C19.1591 1.0925 19.2954 1.70925 19.44 2.44157ZM16.2266 14.5448L16.2144 22.0477L8.56363 22.0607L0.912813 22.0737V14.5578V7.04196H8.57578H16.2388L16.2266 14.5448ZM2.06584 8.08557C1.99978 8.12109 1.90792 8.23094 1.86175 8.32962C1.7832 8.49744 1.77773 8.9019 1.77773 14.5577C1.77773 20.2135 1.7832 20.6179 1.86175 20.7857C1.90792 20.8844 1.99978 20.9943 2.06584 21.0298C2.16077 21.0809 3.53994 21.0918 8.63987 21.082L15.0937 21.0696L15.2097 20.9251L15.3256 20.7807V14.5577V8.33467L15.2097 8.19022L15.0937 8.04577L8.63987 8.03337C3.53994 8.02354 2.16077 8.0345 2.06584 8.08557ZM14.4128 13.9988V18.9996L13.6235 17.7696C11.8153 14.9519 11.5519 14.549 11.4512 14.4477C11.3165 14.312 11.0322 14.3064 10.8975 14.4367C10.8166 14.515 10.4062 15.1249 9.90455 15.9126L9.81207 16.0577L9.34043 15.3206C9.08105 14.9151 8.72015 14.3518 8.53845 14.0686C8.3568 13.7855 8.08704 13.3608 7.93902 13.1249C7.55804 12.5176 7.44207 12.3956 7.24586 12.3956C7.15664 12.3956 7.03649 12.431 6.97884 12.4743C6.92119 12.5176 6.56596 13.033 6.18945 13.6197C5.81294 14.2063 5.11838 15.2887 4.64603 16.0248C4.17367 16.7609 3.55661 17.7271 3.27484 18.1717C2.99302 18.6164 2.74627 18.9813 2.72643 18.9825C2.70659 18.9837 2.6904 16.7378 2.6904 13.9914V8.99811H8.55162H14.4128V13.9988ZM11.5921 10.1294C11.2801 10.2985 11.0533 10.5521 10.9291 10.8709C10.8196 11.1516 10.8355 11.7477 10.9597 12.0228C11.2508 12.6669 11.9564 13.0039 12.589 12.8008C13.0493 12.653 13.4625 12.1112 13.5298 11.5669C13.5926 11.0603 13.3046 10.4563 12.8599 10.1617C12.6719 10.0371 12.5662 10.0066 12.2611 9.989C11.9204 9.96933 11.8665 9.98066 11.5921 10.1294ZM12.5109 11.1127C12.6794 11.3272 12.6738 11.5385 12.4948 11.7304C12.2047 12.0413 11.7486 11.85 11.7486 11.4176C11.7486 11.136 11.9262 10.9543 12.2013 10.9543C12.3491 10.9543 12.4116 10.9862 12.5109 11.1127ZM8.00643 14.9438C9.8726 17.842 11.2901 20.0624 11.2901 20.0878C11.2901 20.104 9.44978 20.1173 7.20056 20.1173C3.13724 20.1173 3.11149 20.1166 3.17697 20.0155C3.21325 19.9596 3.68474 19.2241 4.22474 18.3811C4.76474 17.5381 5.37195 16.5936 5.57412 16.2822C5.77623 15.9707 6.22788 15.2691 6.57783 14.7229L7.21401 13.7298L7.34502 13.925C7.41708 14.0323 7.71471 14.4908 8.00643 14.9438ZM12.5006 17.7236C13.1722 18.7711 13.7917 19.7382 13.8774 19.8727L14.0331 20.1173L13.2261 20.1172L12.4191 20.1172L11.3957 18.5208C10.7731 17.5496 10.3857 16.8995 10.4067 16.8607C10.4256 16.8256 10.6024 16.5458 10.7994 16.2389C11.0938 15.7807 11.1687 15.6932 11.2187 15.7499C11.2521 15.7878 11.829 16.676 12.5006 17.7236Z" fill="black"/></svg>
            <div class="h8">None of the above I would like to upload my own image</div>
            <input
              id="nail"
              type="file"
              @change="changeFile"
              accept="image/png, image/jpeg" />
          </label>
        </div>
        <div class="start__image" v-if="file">
          <img :src="file" alt="you nail image" />
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
            class="btn btn-light">
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
      globalStore = useGlobalStore(),
      emit = defineEmits(['step']),
      file = ref<HTMLImageElement["src"] | null>(null)

const changeFile = (event: Event): void => {
  const [_file] = (event.target as HTMLInputElement).files as FileList
  file.value = URL.createObjectURL(_file)
  setModel('own photo')
}

const setModel = (val: string): void => {
  model.value = val
}

const submit = (): void => {
  if(globalStore.startQuestions[globalStore.startQuestion].next === 0){
    emit('step', 'products')
    globalStore.setIntake(100)
    return
  }

  globalStore.setStartQuestionAnswer(globalStore.startQuestion, model.value, 'next')

  model.value = ''

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, 0)
}

const back = (): void => {
  globalStore.setStartQuestionAnswer(globalStore.startQuestion, '', 'prev')
}

onMounted(() => {
  globalStore.setIntake(95)
})
</script>

<style lang="scss" scoped>
.start{
  &__form {
    max-width: 600px;
  }
  &__images{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .img{
      margin-top: 0;
      margin-bottom: res(6, 8);
      border: none;
      background: none;
      transition: .25s;
      padding: 0;
      border-radius: 15px;
      box-shadow: 0px res(2, 4) res(2, 4) 0px rgba(0, 0, 0, 0.25);
      overflow: hidden;
      transition: .3s;
      width: calc(100% / 3 - res(4, 8));
      img{
        display: block;
        width: 100%;
        height: auto;
      }
      &-active{
        outline: res(2, 4) solid var(--light-blue) !important;
      }
      &:hover{
        img{
          filter: grayscale(50%);
        }
      }
    }
  }
  &__upload{
    background: var(--light-blue);
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    margin-bottom: res(6, 8);
    padding: res(8, 16);
    transition: .3s;
    cursor: pointer;
    width: calc(100% / 3 - res(4, 8));
    @media(min-width:768px){
      &:hover{
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        transform: translateY(-2px);
      }
    }
    input[type="file"]{
      display: none;
    }
    svg{
      width: res(35, 80);
      opacity: .5;
      path{
        fill: var(--white);
      }
    }
    @media(max-width:767px){
      .h3{
        font-size: 14px;
        letter-spacing: 0.25px;
      }
      .h8{
        font-size: 10px;
        line-height: 1;
      }
    }
  }
  &__image{
    max-width: 600px;
    margin-bottom: 2rem;
    background-color: #f2f2f2;
    position: relative;
    padding: .5rem res(30, 120);
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    img{
      display: block;
      width: 100%;
    }
  }
}
</style>