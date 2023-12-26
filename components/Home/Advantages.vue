<template>
  <section class="advantages">
    <div class="container">
      <div class="advantages__item" v-for="(item, index) in items">
        <div class="advantages__head">
          <div class="advantages__index">{{ index + 1 }}</div>
          <div>
            <div class="advantages__title h3">{{ item.title }}</div>
            <div class="advantages__subtitle h2"><span>{{ item.subtitle }}</span></div>
          </div>
        </div>
        <Image format="webp" :name="item.img" :alt="item.title" />
        <div class="advantages__content">
          <div class="advantages__text p">{{ item.text }}</div>
          <div class="advantages__subtext h8" v-if="item.subtext">
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.42447 8.15582V8.27347H4.54212H10.3991H10.5167V8.15582V5.97297C10.5167 5.13824 10.2182 4.42252 9.62414 3.83236C9.03014 3.24223 8.31009 2.94593 7.47059 2.94593C6.63109 2.94593 5.91104 3.24223 5.31704 3.83236C4.723 4.42252 4.42447 5.13824 4.42447 5.97297V8.15582ZM2.34659 8.27347H2.46424V8.15582V5.97297C2.46424 4.61062 2.95417 3.44378 3.93969 2.46629C4.92369 1.4887 6.1003 1 7.47059 1C8.84096 1 10.0174 1.48706 11.0013 2.46616C11.9869 3.44534 12.477 4.61228 12.477 5.97297V8.15419V8.27184H12.5946H12.961C13.2359 8.27184 13.4639 8.36582 13.6552 8.55575C13.8469 8.74764 13.9412 8.97409 13.9412 9.24644V15.7917C13.9412 16.0642 13.8468 16.2904 13.6554 16.4806C13.4642 16.6706 13.2344 16.7647 12.961 16.7647H1.98012C1.70519 16.7647 1.47709 16.6707 1.28573 16.4806C1.09446 16.2905 1 16.0627 1 15.7917V9.24644C1 8.974 1.09439 8.74774 1.28573 8.55765C1.47702 8.3676 1.70674 8.27347 1.98012 8.27347H2.34659Z" fill="#083952" stroke="#083952" stroke-width="0.235294"/></svg>
            {{ item.subtext }}
          </div>
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
  subicon?: string
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
    text: `Forget humiliating conversations with your pharmacist. After speaking with our doctors, you'll get DOSABLE shipped directly to your door in discreet packaging. We understand how embarrassing toenail fungus can be. Our safe, secure, private process lets you treat and eliminate your infection from the comfort of your home.`,
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
        padding-left: res(10, 30);
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
  &__subtext{
    position: relative;
    @media(max-width:767px){
      padding-left: 2rem;
    }
    svg{
      position: absolute;
      left: 0;
      bottom: 5px;
      @media(min-width:768px){
        left: -10px;
        transform: translateX(-100%);
      }
    }
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
