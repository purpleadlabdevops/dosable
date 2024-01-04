<template>
  <section class="start__step identity">
    <div class="container">
      <h2>Upload a photo of your ID</h2>
      <div class="h7">In order to legally prescribe medications, we need a valid government-issued ID that matches your name and date of birth.</div>
      <p>Acceptable Forms of ID</p>
      <ul>
        <li>Driver License</li>
        <li>Passport</li>
        <li>Identification Card</li>
        <li>Permanent Resident Card</li>
        <li>Consular Card</li>
      </ul>
      <div class="identity__image">
        <img v-if="file" :src="file" alt="you identify document" />
        <Image v-else format="webp" name="identity" alt="default identify id" />
      </div>
      <div class="identity__buttons">
        <input
          id="file"
          type="file"
          @change="changeFile"
          accept="image/png, image/jpeg" />
        <label
          for="file"
          class="btn btn-red identity__upload">{{ file ? "REUPLOAD" : "UPLOAD" }}</label>
        <button
          class="btn identity__submit"
          :disabled="!file"
          @click.prevent="next">CONTINUE</button>
      </div>
      <div class="identity__security">
        <svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" ><g><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path></g></svg>
        256-BIT TLS SECURITY
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global'

const globalStore = useGlobalStore(),
      emit = defineEmits(['step']),
      file = ref<HTMLImageElement["src"] | null>(null)

const changeFile = (event: Event): void => {
  const [_file] = (event.target as HTMLInputElement).files as FileList
  file.value = URL.createObjectURL(_file)
}

const next = (): void => {
  useGtm().trackEvent({
    event: 'ID Upload',
    label: 'ID Upload',
    category: 'category',
    action: 'click',
  })
  emit('step', 'summary')
  globalStore.setOnboarding(40)
}

onMounted(() => {
  setTimeout(()=>{
    globalStore.changeProgress(10)
  }, 500)
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, 0)
})
</script>

<style lang="scss" scoped>
.identity{
  .h7, h2, p{
    max-width: 530px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    text-align: left;
    margin-bottom: 1rem;
  }
  p{
    margin-bottom: res(8, 16);
    text-align: left;
  }
  ul{
    max-width: 460px;
    margin-left: auto;
    margin-right: auto;
    @media(min-width:768px){
      display: flex;
      flex-wrap: wrap;
    }
    li{
      list-style: disc;
      text-align: left;
      @media(min-width:768px){
        width: 50%;
      }
      margin-bottom: 0.5rem;
    }
  }
  &__security{
    text-align: center;
    margin-top: 45px;
  }
  &__image{
    max-width: 530px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-bottom: 20px;
    background-color: #f2f2f2;
    position: relative;
    padding: res(15, 50) res(15, 60);
    margin-top: 30px;
    img{
      display: block;
      width: 100%;
    }
  }
  &__buttons{
    max-width: 530px;
    margin-left: auto;
    margin-right: auto;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
  }
  &__reupload, &__take{
    width: 100%;
    @media(max-width:767px){
      margin-top: 1rem;
    }
    @media(min-width:768px){
      width: calc(50% - 10px);
    }
  }
  &__submit, &__upload{
    width: 100%;
    @media(max-width:767px){
      margin-top: 1rem;
    }
    @media(min-width:768px){
      width: calc(50% - .5rem);
    }
  }
  input[type="file"]{
    display: none;
  }
  &__link{
    background: none;
    padding: 0;
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    color: var(--dark-grey);
  }
}
</style>
