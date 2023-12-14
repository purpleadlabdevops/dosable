<template>
  <section class="identity">
    <div class="container">
      <h1>Identity Verification</h1>
      <h2>Upload a photo of your ID</h2>
      <p>In order to legally prescribe medications, we need a valid government-issued ID that matches your name and date of birth. <button @click="emit('step', 'identityModal')">Why do you need this?</button></p>
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
          class="btn btn-purple_txt identity__upload">{{ file ? "REUPLOAD" : "UPLOAD" }}</label>
        <button
          class="btn btn-purple identity__submit"
          :disabled="!file"
          @click.prevent="emit('step', 'summary')">CONTINUE</button>
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

onMounted(() => {
  setTimeout(()=>{
    globalStore.changeProgress(10)
  }, 500)
})
</script>

<style lang="scss" scoped>
.identity{
  padding-top: 170px;
  padding-bottom: 50px;
  .container{
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
  h1{
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-100%, -200%);
    @media(max-width:767px){
      display: none;
    }
  }
  h2{
    font-weight: 500;
    font-size: 25px;
    letter-spacing: -0.768px;
    margin-bottom: 12px;
    font-family: "Atten New";
  }
  p{
    font-size: 1.1rem;
    line-height: 22px;
    color: #19191c;
    letter-spacing: .15px;
    & + p{
      margin-top: 30px;
    }
    button{
      font-size: 1.1rem;
      line-height: 22px;
      background: none;
      padding: 0;
      border: none;
      color: rgb(130, 130, 130);
      text-decoration: underline;
    }
  }
  ul{
    padding-left: 30px;
    display: flex;
    flex-wrap: wrap;
    li{
      list-style: outside disc;
      line-height: 1.5;
      width: 50%;
    }
  }
  &__security{
    text-align: center;
    margin-top: 45px;
  }
  &__image{
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__reupload, &__take{
    width: calc(50% - 10px);
  }
  &__submit, &__upload{
    width: 100%;
  }
  &__reupload{}
  &__take{}
  &__submit{
    margin-top: 10px;
  }
  input[type="file"]{
    display: none;
  }
}
</style>
