<template>
  <section class="page page__account account">
    <div class="container">
      <div class="account__left">
        <h2>Hi {{ globalStore.userData.firstName }}, we're so glad you're here.</h2>
        <h3>Here's what to expect in the next few days. If have any questions, you can always starts a consultation with your provider.</h3>
      </div>
      <div class="account__right">
        <div class="account__box">
          <h2>What's next?</h2>
          <div class="account__list">
            <div class="account__item">
              <div class="h7">Your Free Visits</div>
              <div class="h8">Your Free Visits</div>
            </div>
            <div class="account__item">
              <div class="h7">Doctor treatment</div>
              <div class="h8">
                If you're eligible for treatment, your doctor will white you a prescription and pass it to our pharmacy.
                <br><br>
                <span>On the 10th week</span>
              </div>
            </div>
            <div class="account__item">
              <div class="h7">Prescription Received</div>
              <div class="h8">You treatment will be prepared and shipped via fast & fee shipping.</div>
            </div>
            <Transition name="slide">
              <div class="account__item" v-if="more">
                <div class="h7">Treatment Shipped</div>
                <div class="h8">Your treatment is no the way. <br><br><span>On the 10th week</span></div>
              </div>
            </Transition>
            <Transition name="slide">
              <div class="account__item" v-if="more">
                <div class="h7">Feel fantastic</div>
              </div>
            </Transition>
          </div>
          <button
            class="btn"
            :class="more ? 'btn-red' : 'btn-red_link'"
            @click="more = more ? false : true">
            show {{ more ? 'less' : 'more' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global'

definePageMeta({
  layout: 'account'
})

const more = ref<boolean>(false)

const globalStore = useGlobalStore()
console.dir(globalStore.userData)
</script>

<style lang="scss" scoped>
.account{
  padding-top: res(80, 126);
  padding-bottom: 3.5rem;
  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
  }
  &__left, &__right{
    @media(min-width:768px){
      width: 50%;
    }
  }
  &__left{
    @media(max-width:767px){
      margin-bottom: 3rem;
    }
    @media(min-width:768px){
      padding-right: 2rem;
    }
  }
  &__right{}
  &__box{
    padding: res(16, 56);
    background: var(--light-blue2, #D5E4EF);
  }
  h2{
    margin-bottom: 2rem;
  }
  &__link{
    color: var(--red);
  }
  .btn{
    margin-top: 2rem;
  }
  &__item{
    padding-left: 34px;
    position: relative;
    &:not(:last-child){
      padding-bottom: 48px;
    }
    &:before{
      content: "";
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--light-blue);
      position: absolute;
      left: 0; top: 0;
    }
    &:not(:last-child){
      &:after{
        position: absolute;
        content: "";
        width: 1px;
        background: var(--light-blue);
        left: 9px;
        height: 100%;
        top: 0;
      }
    }
  }
  .h7{
    & + .h8{
      margin-top: 8px;
    }
  }
  .h8{
    span{
      color: var(--light-blue);
    }
  }
}
</style>