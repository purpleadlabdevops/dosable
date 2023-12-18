<template>
  <section class="status">
    <div class="container">
      <ul class="status__progress">
        <li class="h9">
          <span :style="`width: ${globalStore.intake}%`"></span>
          Intake
        </li>
        <li class="h9">
          <span :style="`width: ${globalStore.onboarding}%`"></span>
          Onboarding Complete
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global'

const globalStore = useGlobalStore()
</script>

<style lang="scss" scoped>
.status{
  background: var(--white);
  z-index: 100;
  position: absolute;
  left: 0;
  top: 97px;
  padding: 1.5rem 0;
  width: 100%;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 784px;
  }
  &__progress{
    display: flex;
    justify-content: space-between;
    width: 100%;
    li{
      width: 100%;
      position: relative;
      padding-top: 15px;
      list-style: none;
      @media(min-width:768px){
        width: calc(100% / 2 - 24px);
      }
      &:before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: var(--dark-grey);
        height: 8px;
        border-radius: 10px;
      }
      span{
        background: var(--light-blue);
        height: 8px;
        border-radius: 10px;
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