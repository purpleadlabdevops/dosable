<template>
  <section class="advantages">
    <div class="container">
      <div class="advantages__item" v-for="(item, index) in items">
        <div class="advantages__head">
          <div class="advantages__index">{{ index + 1 }}</div>
          <ClientOnly>
            <div>
              <div class="advantages__title" :data-width="$width()" :class="$width() < 768 ? 'h5':'h3'">{{ item.title }} {{ $width() }}</div>
              <div class="advantages__subtitle" :data-width="$width()" :class="$width() < 768 ? 'h7':'h2'"><span>{{ item.subtitle }} {{ $width() }}</span></div>
            </div>
          </ClientOnly>
        </div>
        <Image format="webp" :name="item.img" :alt="item.title" />
        <div class="advantages__content">
          <div class="advantages__text p">{{ item.text }}</div>
          <div class="advantages__subtext h8" v-if="item.subtext">{{ item.subtext }}</div>
          <ClientOnly>
            <div class="advantages__btn">
              <nuxt-link class="btn" :class="$width() < 768 ? 'btn-red':''" to="/start">START FREE TELE-VISIT</nuxt-link>
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface ItemType {
  title: string
  subtitle: string
  text: string
  subtext?: string
  img: string
}

const items: Array<ItemType> = [
  {
    title: 'Tele-Visit',
    subtitle: `Easiest doctor's appointment ever.`,
    text: 'Fill out our basic intake form and we will connect you with a specialist to evaluate your condition.',
    subtext: '(We take your privacy seriously, any information you submit will be protected on our secure platform.)',
    img: 'adv-01'
  },
  {
    title: 'Board-Certified Doctors',
    subtitle: 'Your feet are in good hands.',
    text: `You'll be connected with a qualified medical professional who can assist with finding you the best way to treat your toenail fungus. You can send messages directly to your doctor to help ensure all your needs are being met.`,
    img: 'adv-02'
  },
  {
    title: 'Free Delivery, Continued Care',
    subtitle: 'Real relief to your door.',
    text: `Forget humiliating conversations with your pharmacist. After speaking with our doctors, you'll get FUNGAID shipped directly to your door in discreet packaging. We understand how embarrassing toenail fungus can be. Our safe, secure, private process lets you treat and eliminate your infection from the comfort of your home.`,
    img: 'adv-03'
  }
]
</script>

<style lang="scss" scoped>
.advantages{
  .container{
    padding-top: res(150, 200);
    padding-bottom: res(70, 100);
    position: relative;
    &:before{
      content: "";
      background: var(--dark-blue);
      z-index: -1;
      position: absolute;
      left: res(30, 95);
      top: res(0, 50);
      height: 90%;
      width: 4px;
      @media(max-width:767px){
        display: none;
      }
      @media(min-width:992px){
        height: 70%;
      }
    }
  }
  &__item{
    position: relative;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &:not(:first-child){
      margin-top: 170px;
    }
    img{
      display: block;
      @media(min-width:768px){
        width: 40%;
        margin-bottom: 0;
      }
    }
    &:after{
      content: "";
      background: rgba(var(--light-blue2-rgb), .5);
      z-index: -1;
      position: absolute;
      left: 50%; top: 50%;
      height: 75%;
      width: 100vw;
      transform: translate(-50%, -50%);
      @media(max-width:991px){
        display: none;
      }
    }
  }
  &__head{
    display: flex;
    align-items: flex-start;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-70%);
    @media(min-width:768px){
      transform: translateY(-100%);
    }
    @media(min-width:992px){
      transform: translateY(-60%);
    }
  }
  &__index{
    width: res(60, 145);
    height: res(60, 145);
    border-radius: 50%;
    background: var(--dark-blue);
    font-size: res(32, 96);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    @media(min-width:768px){
      margin-right: res(15, 90);
    }
    @media(max-width:767px){
      & + div{
        padding-left: 30px;
        width: calc(100% - 60px);
      }
    }
  }
  &__title{
    margin-bottom: 10px;
    padding-top: 20px;
    color: var(--dark-blue);
  }
  &__subtitle{
    padding: 0 10px;
    display: inline-block;
    color: var(--dark-blue);
    background: var(--light-blue2);
  }
  &__content{
    padding: 2rem 1rem 0;
    @media(min-width:768px){
      width: 60%;
      padding: 2rem 1rem;
    }
    @media(max-width:991px){
      background: rgba(var(--light-blue2-rgb), .5);
    }
  }
  &__text, &__subtext{
    color: var(--dark-blue);
    max-width: 572px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
  &__btn{
    max-width: 572px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: res(30, 80);
    @media(max-width:767px){
      .btn{
        width: calc(100% + 2rem);
        max-width: calc(100% + 2rem);
        margin-left: -1rem;
        margin-right: -1rem;
      }
    }
  }
}
</style>
