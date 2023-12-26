<template>
  <section class="review">
    <div class="container">
      <ClientOnly>
        <div class="review__title h2" v-if="$width() < 768">Real Results, Real Fast</div>
      </ClientOnly>
      <div class="review__img"><Image format="webp" name="review" alt="review picture" /></div>
      <div class="review__info">
        <ClientOnly>
          <div class="review__title h2" v-if="$width() > 768">Real Results, Real Fast</div>
        </ClientOnly>
        <p class="p-lg">DOSABLE gives you the confidence to enjoy your feet again by eliminating stubborn & unsightly fungus.</p>
        <ul>
          <li>Clinically proven ingredients to reduce nail fungus in as little as 3 months.</li>
          <li>Dermatologist Approved for the treatment of toenail fungus.</li>
          <li>Doctor formulated to penetrate the thick nail bed for effective treatment of fungal infections.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.review{
  background: rgba(var(--light-blue-rgb), 30%);
  padding-top: res(50, 100);
  padding-bottom: res(50, 100);
  text-align: center;
  position: relative;
  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__info{
    @media(min-width:768px){
      max-width: 55%;
    }
  }
  &__img{
    width: 70%;
    position: relative;
    margin-left: 5%;
    display: block;
    @media(max-width:767px){
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
    }
    @media(min-width:768px){
      width: calc(45% - 60px);
    }
    @media(min-width:992px){
      width: calc(35% - 60px);
    }
    &:before{
      content: "";
      position: absolute;
      left: 0; top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgba(var(--light-blue-rgb), 30%);
      transform: translate(-20%, -5%);
    }
    img{
      display: block;
      width: 100%;
      position: relative;
      z-index: 2;
    }
  }
  &__title{
    margin-bottom: 40px;
  }
  ul{
    max-width: 600px;
    text-align: left;
    margin-top: res(30, 50);
    padding-left: 1rem;
  }
  .btn{
    margin-top: res(50, 100);
  }
}
</style>