<template>
  <section class="treatments">
    <div class="container">
      <div class="treatments__head h2">DOSABLE - The Toenail Fungus Serum <br>That Actually Works</div>
      <div class="treatments__item" v-for="item in items">
        <Image class="treatments__img" format="webp" :name="item.img" :alt="item.title" />
        <div class="treatments__info">
          <div class="treatments__title h5">{{ item.title }}</div>
          <div class="treatments__text p" v-html="item.text"></div>
          <nuxt-link class="treatments__link h6" to="/start">
            START TELE-VISIT
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M1.548 5.718c-.417.022-.82.175-1.12.51-.603.668-.568 1.706.101 2.309l11.954 10.765L24.471 8.537c.67-.603.704-1.64.102-2.31-.602-.669-1.64-.704-2.31-.102l-9.746 8.796-9.78-8.796a1.646 1.646 0 0 0-1.19-.407Z" stroke="0" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface ItemType {
  title: string
  img: string
  text: string
}

const items: Array<ItemType> = [
  {
    title: 'Kill Toenail Fungus For Good',
    img: 'estrogen-therapy',
    text: `DOSABLE combines the 5 most effective ingredients against nail fungus in one affordable, easy-to-use solution. <br><br>It's clinically proven to work in as little as three months, and it begins working as soon as it's applied to the infected toenails. <br><br>With prescription-grade ingredients, DOSABLE's formula gets results faster than the competition.`
  }
]
</script>

<style lang="scss" scoped>
.treatments{
  padding-top: res(50, 100);
  padding-bottom: res(50, 100);
  &__head{
    text-align: center;
    color: var(--dark-blue);
  }
  &__item{
    @media(min-width:768px){
      display: flex;
    }
    &:not(:first-child){
      margin-top: 45px;
    }
  }
  &__img{
    @media(min-width:768px){
      width: 47%;
    }
  }
  &__info{
    padding: res(20, 50) res(20, 75) res(60, 100) res(20, 100);
    background: var(--light);
    position: relative;
  }
  &__title{
    margin-bottom: res(10, 20);
    color: var(--dark-blue);
  }
  &__text{
    margin-bottom: res(18, 20);
    color: var(--dark-blue);
  }
  &__link{
    position: absolute;
    left: 0; bottom: 0; right: 0;
    color: var(--dark-blue);
    padding: 16px 16px 16px 104px;
    background: var(--light-blue);
    transition: 0.25s;
    svg{
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      width: res(15, 25);
      height: auto;
    }
    &:hover{
      background-color: var(--red);
      color: var(--white);
      text-decoration: none;
      svg{
        path{
          fill: var(--white);
        }
      }
    }
  }
}
</style>