<template>
  <section class="checkout__status">
    <div class="container">
      <button class="checkout__back" @click="emit('step', 'start')"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none"><path d="M25 5.7692L5.34058e-05 5.7692" stroke="#1A6A72" stroke-width="1.4"/><path d="M5.76953 0C5.76953 1.92307 3.84631 5.28845 0.000277195 5.28845" stroke="#1A6A72" stroke-width="1.4"/><path d="M5.76953 12.0192C5.76953 10.0961 3.84635 6.24998 0.000313117 6.24998" stroke="#1A6A72" stroke-width="1.4"/></svg></button>
      <ul class="checkout__progress">
        <li>
          <span :style="`width: 100%`"></span>
          Account Creation
        </li>
        <li>
          <span :style="`width: 100%`"></span>
          Intake
        </li>
        <li>
          <span :style="`width: ${globalStore.progress}%`"></span>
          Onboarding Complete
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global'

const globalStore = useGlobalStore(),
      emit = defineEmits(['step'])
</script>

<style lang="scss" scoped>
.checkout{
  &__status{
    background: #fff;
    position: fixed;
    top: 84px;
    left: 0;
    width: 100%;
    padding: res(10, 24) 0;
    z-index: 100;
    .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
  }
  &__back{
    background: none;
    border: none;
    padding: 15px 0;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    @media(min-width:768px){
      width: res(50, 150);
      padding: 0;
      margin-bottom: 0;
    }
  }
  &__progress{
    display: flex;
    justify-content: space-between;
    width: calc(100% - 25px);
    @media(min-width:768px){
      width: calc(100% - res(50, 150));
    }
    li{
      width: 100%;
      position: relative;
      padding-top: 15px;
      font-size: 15px;
      @media(max-width:767px){
        &:not(:last-child){
          display: none;
        }
      }
      @media(min-width:768px){
        width: calc(100% / 3 - 24px);
      }
      &:before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: rgba(167, 131, 255, 0.2);
        height: 8px;
        border-radius: 4px;
      }
      span{
        background: var(--purple);
        height: 8px;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        transition: 1s ease;
      }
    }
  }
}
</style>