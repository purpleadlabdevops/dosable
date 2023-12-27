<template>
  <section class="comparison">
    <div class="container">
      <div class="comparison__title h2">Before & Afters</div>
      <div class="comparison__images">
        <Image format="webp" name="comparison-left" alt="comparison 1" />
        <Image format="webp" name="comparison-right" alt="comparison 2" />
      </div>
      <ul class="comparison__list" v-if="globalStore.width < 768">
        <li
          v-for="item in bannerItems"
          v-html="item.icon + item.text">
        </li>
      </ul>
    </div>
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
    icon: `<svg style="margin-right: 8px;" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z" fill="#083952"/><path d="M32 17C32 25.2843 25.2843 32 17 32C8.71573 32 2 25.2843 2 17C2 8.71573 8.71573 2 17 2C25.2843 2 32 8.71573 32 17Z" fill="white"/><path d="M15 11.5C15 13.433 13.8807 15 12.5 15C11.1193 15 10 13.433 10 11.5C10 9.567 11.1193 8 12.5 8C13.8807 8 15 9.567 15 11.5Z" fill="#083952"/><path d="M24 11.5C24 13.433 22.8807 15 21.5 15C20.1193 15 19 13.433 19 11.5C19 9.567 20.1193 8 21.5 8C22.8807 8 24 9.567 24 11.5Z" fill="#083952"/><path d="M28 17C28 19.9174 26.8411 22.7153 24.7782 24.7782C22.7153 26.8411 19.9174 28 17 28C14.0826 28 11.2847 26.8411 9.22183 24.7782C7.15893 22.7153 6 19.9174 6 17H8.46574C8.46574 19.2634 9.36488 21.4342 10.9654 23.0346C12.5659 24.6351 14.7366 25.5343 17 25.5343C19.2634 25.5343 21.4341 24.6351 23.0346 23.0346C24.6351 21.4341 25.5343 19.2634 25.5343 17H28Z" fill="#083952"/></svg>`,
    text: 'Easy to Use'
  },
  {
    icon: `<svg style="margin-right: 8px;" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="15" stroke="#083952" stroke-width="2"/><circle cx="16" cy="16" r="10" stroke="#083952" stroke-width="2"/><circle cx="16" cy="16" r="4" stroke="#083952" stroke-width="2"/></svg>`,
    text: 'Targeted Treatment'
  },
  {
    icon: `<svg style="margin-right: 8px;" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6_971)"><circle cx="17" cy="17" r="16" stroke="#083952" stroke-width="2"/><path d="M17 8.5V17L22.5 22.5" stroke="#083952" stroke-width="2"/></g><defs><clipPath id="clip0_6_971"><rect width="34" height="34" fill="white"/></clipPath></defs></svg>`,
    text: 'Proven Results'
  }
]
</script>

<style lang="scss" scoped>
.comparison{
  padding-top: res(50, 100);
  padding-bottom: res(50, 100);
  &__title{
    text-align: center;
    margin-bottom: 3rem;
  }
  &__images{
    @media(min-width:768px){
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    img{
      display: block;
      @media(min-width:768px){
        width: calc(50% - 20px);
      }
    }
  }
  &__list{
    margin-top: 30px;
    padding-top: res(30, 40);
    padding-left: res(16, 40);
    padding-right: res(16, 40);
    max-width: 650px;
    display: flex;
    flex-wrap: wrap;
    @media(min-width:768px){
      display: none;
    }
    li{
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      color: var(--dark-blue);
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 2.4px;
      text-transform: uppercase;
      svg{
        margin-right: 8px;
      }
    }
  }
}
</style>