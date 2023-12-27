<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrap">
        <h1>Enjoy Clear, Healthy, <span>Fungus-Free</span> Toenails</h1>
        <h4>Doctor-formulated topicals, with clinically proven ingredients, will have your nails growing clear again without painful surgery.</h4>
        <div class="banner__btn">
          <nuxt-link class="btn btn-red" to="/start">Check Eligibility</nuxt-link>
          <!-- <nuxt-link class="btn btn-red-border btn-white" to="/quiz">TAKE THE QUIZ</nuxt-link> -->
        </div>
        <ul class="banner__list" v-if="globalStore.width > 767">
          <li
            v-for="item in bannerItems"
            v-html="item.icon + item.text">
          </li>
        </ul>
      </div>
    </div>
    <Image class="banner__img" format="webp" name="banner" alt="banner image" />
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';
const globalStore = useGlobalStore()

interface bannerItemType {
  icon: string
  text: string
}

const bannerItems: Array<bannerItemType> = [
  {
    icon: `<svg style="margin-right: 8px;" width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="20" r="16" stroke="#083952" stroke-width="2"/><ellipse cx="13.5" cy="14.5" rx="2.5" ry="3.5" fill="#083952"/><ellipse cx="22.5" cy="14.5" rx="2.5" ry="3.5" fill="#083952"/><mask id="path-4-inside-1_6_82" fill="white"><path d="M29 20C29 22.9174 27.8411 25.7153 25.7782 27.7782C23.7153 29.8411 20.9174 31 18 31C15.0826 31 12.2847 29.8411 10.2218 27.7782C8.15893 25.7153 7 22.9174 7 20L9.46574 20C9.46574 22.2634 10.3649 24.4342 11.9654 26.0346C13.5659 27.6351 15.7366 28.5343 18 28.5343C20.2634 28.5343 22.4341 27.6351 24.0346 26.0346C25.6351 24.4341 26.5343 22.2634 26.5343 20H29Z"/></mask><path d="M29 20C29 22.9174 27.8411 25.7153 25.7782 27.7782C23.7153 29.8411 20.9174 31 18 31C15.0826 31 12.2847 29.8411 10.2218 27.7782C8.15893 25.7153 7 22.9174 7 20L9.46574 20C9.46574 22.2634 10.3649 24.4342 11.9654 26.0346C13.5659 27.6351 15.7366 28.5343 18 28.5343C20.2634 28.5343 22.4341 27.6351 24.0346 26.0346C25.6351 24.4341 26.5343 22.2634 26.5343 20H29Z" stroke="#083952" stroke-width="4" mask="url(#path-4-inside-1_6_82)"/></svg>`,
    text: 'Easy to Use'
  },
  {
    icon: `<svg style="margin-right: 8px;" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="15" stroke="#083952" stroke-width="2"/><circle cx="16" cy="16" r="10" stroke="#083952" stroke-width="2"/><circle cx="16" cy="16" r="4" stroke="#083952" stroke-width="2"/></svg>`,
    text: 'Targeted Treatment'
  },
  {
    icon: `<svg style="margin-right: 8px;" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6_97)"><circle cx="17" cy="17" r="16" stroke="#083952" stroke-width="2"/><path d="M17 8.5V17L22.5 22.5" stroke="#083952" stroke-width="2"/></g><defs><clipPath id="clip0_6_97"><rect width="34" height="34" fill="white"/></clipPath></defs></svg>`,
    text: 'Proven Results'
  }
]
</script>

<style lang="scss" scoped>
.banner{
  padding-top: res(100, 150);
  padding-bottom: res(50, 150);
  position: relative;
  overflow: hidden;
  .container{
    position: relative;
    z-index: 2;
  }
  &__wrap{
    @media(min-width:768px){
      max-width: 70%;
    }
    @media(min-width:992px){
      max-width: 52%;
    }
  }
  h1{
    margin-bottom: 2rem;
    span{
      color: var(--red);
    }
  }
  h4{
    color: var(--dark-blue);
    margin-bottom: 2rem;
  }
  &__img{
    position: absolute;
    height: 100%;
    width: auto;
    left: 30%;
    top: 0;
    bottom: 0;
    max-width: none;
    @media(max-width:767px){
      display: none;
    }
    @media(min-width:1600px){
      left: 44%;
    }
  }
  &__btn{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .btn{
      width: 100%;
      @media(max-width:767px){
        &:not(:first-child){
          margin-top: 1rem;
        }
      }
      @media(min-width:768px){
        width: calc(50% - 1rem);
      }
    }
  }
  &__list{
    margin-top: 3rem;
    padding-top: res(30, 40);
    padding-left: res(16, 40);
    padding-right: res(16, 40);
    border-top: 1px solid var(--dark-blue);
    max-width: 650px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media(max-width:767px){
      display: none;
    }
    li{
      width: 50%;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      color: var(--dark-blue);
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 2.4px;
      text-transform: uppercase;
      @media(max-width:768px){
        width: 100%;
        justify-content: center;
      }
      svg{
        margin-right: 8px;
      }
    }
  }
}
</style>