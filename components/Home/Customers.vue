<template>
  <section class="customers" id="customers">
    <div class="customers__title h2">Customer Reviews</div>
    <div class="customers__list">
      <div class="container">
        <carousel class="customers__slider" v-bind="slider.settings" :breakpoints="slider.breakpoints">
          <slide v-for="(item, index) in items" :key="`slide_${index}`">
            <div class="customers__item">
              <Image format="webp" :name="item.image" :alt="item.title" />
              <svg width="41" height="24" viewBox="0 0 41 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.693 0.455996C40.117 2.952 39.509 5.608 38.869 8.424C38.293 11.24 37.749 13.992 37.237 16.68C36.725 19.304 36.309 21.736 35.989 23.976H22.837L22.165 22.92C22.741 20.616 23.477 18.184 24.373 15.624C25.269 13.064 26.229 10.472 27.253 7.848C28.341 5.224 29.397 2.76 30.421 0.455996H40.693ZM18.805 0.455996C18.229 2.952 17.621 5.608 16.981 8.424C16.405 11.24 15.861 13.992 15.349 16.68C14.837 19.304 14.421 21.736 14.101 23.976H0.949L0.277 22.92C0.853 20.616 1.589 18.184 2.485 15.624C3.381 13.064 4.341 10.472 5.365 7.848C6.453 5.224 7.509 2.76 8.533 0.455996H18.805Z" fill="#083952"/></svg>
              <div class="customers__name h7">{{ item.title }}</div>
              <div class="customers__text">{{ item.text }}</div>
            </div>
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const slider = {
  settings: {
    itemsToShow: 1,
    itemsToScroll: 1
  },
  breakpoints: {
    768: {
      itemsToShow: 2,
      itemsToScroll: 1
    },
    992: {
      itemsToShow: 3,
      itemsToScroll: 1
    }
  }
}

interface CustomersItems {
  image: string
  title: string
  text: string
}

const items: Array<CustomersItems> = [
  {
    image: `cus1`,
    title: `Carlos Wilson`,
    text: `I've had discoloration in/on my toe nails for as long as I can remember. Even my parents have this issue. Now it’s so much better. Couldn't be more thrilled.`
  },
  {
    image: `cus2`,
    title: `William Young`,
    text: `I used this daily & it cleared up my mild toenail fungus. I dont feel embarrassed going to the pool anymore-the success comes with consistency. Highly recommend it.`
  },
  {
    image: `cus3`,
    title: `Christina Delgado`,
    text: `I wish I’d taken a before and after photo of my toe nail. My toenail once got so infected I was worried it was going to fall off. I’ve tried so many things before but it never lasted. This finally worked, and faster than I expected.`
  },
]
</script>

<style lang="scss">
.customers{
  .carousel{
    margin-top: -70px;
    @media(min-width:768px){
      margin-top: -130px;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    &__slide{
      padding-top: 70px;
      @media(min-width:768px){
        padding-top: 130px;
      }
    }
    &__next, &__prev{
      @media(min-width:992px){
        display: none;
      }
    }
    &__next, &__prev{
      width: res(45, 58);
      height: res(45, 58);
      border-radius: 50%;
      background: var(--dark-blue);
      @media(max-width:991px){
        top: calc(100% + 3rem);
      }
      path{
        fill: var(--white);
      }
    }
    &__next{
      @media(min-width:992px){
        transform: translateX(25%);
      }
    }
    &__prev{
      @media(min-width:992px){
        transform: translateX(-25%);
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.customers{
  padding-top: res(50, 100);
  &__title{
    text-align: center;
    margin-bottom: res(50, 150);
    padding-left: 1rem;
    padding-right: 1rem;
  }
  &__list{
    background: rgba(var(--light-blue2-rgb), 30%);
    padding-top: 50px;
    padding-bottom: 100px;
  }
  &__item{
    text-align: center;
    background: var(--white);
    padding-bottom: res(30, 75);
    padding-left: res(16, 32);
    padding-right: res(16, 32);
    position: relative;
    max-width: calc(100% - 2rem);
    @media(min-width:1200px){
      max-width: 370px;
    }
    img{
      margin-top: -70px;
      max-width: 70%;
      border-radius: 50%;
      @media(min-width:768px){
        margin-top: -130px;
      }
    }
    svg{
      display: block;
      position: absolute;
      left: 1rem;
      top: 34%;
      width: res(20, 41);
      @media(min-width:768px){
        top: 15%;
      }
      @media(min-width:1200px){
        top: 7rem;
      }
    }
  }
  &__name{
    color: var(--red);
    margin-bottom: 20px;
    margin-top: 40px;
  }
  &__text{
    font-size: res(14, 16);
    line-height: 1.5;
    color: var(--dark-blue);
  }
}
</style>