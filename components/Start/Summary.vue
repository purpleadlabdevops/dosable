<template>
  <section class="start__step products products__summary">
    <div class="container">
      <h2>Your visit summary</h2>
      <div class="h7">Almost done! Here’s your personalized treatment plan for the doctor to review. Our board certified doctors are here to determine the right treatment plan for you. In the next step, you’ll add billing information to your account and then a Fungaid doctor will review your medical history and address any questions.</div>
      <h6>Prescription Treatment</h6>
      <div class="products__list">
        <StartProduct v-for="(product, index) in globalStore.products" :data="product" :ID="index" />
      </div>
      <div class="h8">You won't be charged for or shipped this prescription product unless a doctor prescribes it to you.</div>
      <div class="products__benefits">
        <div class="h7">Added Benefits</div>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none"><circle cx="33" cy="33" r="32" fill="#5793BF"/><path d="M22 25H39V28H44.5C45.6667 28.1667 48.2 29.1 49 31.5V38.5H39H22V34.5V25Z" fill="#5793BF"/><path d="M14 27.5H20M12.5 31H18M12 34.5H14M15.5 34.5H22M39 38.5H22V25H39V28M39 38.5V28M39 38.5H49V31.5C48.2 29.1 45.6667 28.1667 44.5 28H39" stroke="black"/><circle cx="27" cy="38.5" r="2" fill="#5793BF" stroke="black"/><circle cx="43" cy="38.5" r="2" fill="#5793BF" stroke="black"/></svg>
            <div class="h8">Added Benefits</div>
            <div class="h9">We offer fast shipping so you have your medication when you need it.</div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none"><circle cx="33" cy="33" r="32" fill="#5793BF"/><path d="M40 39.5003C41 39.667 43.2 39.8003 44 39.0003C45 38.0003 46.5 38.0003 47.5 38.5003C48.5 39.0003 43.5 45.4167 36.5 46C29.5 46.5833 27.1 45.5 23.5 43.5" stroke="black"/><rect x="18.5" y="33.5" width="5" height="12" rx="2.5" stroke="black"/><path d="M36.5 37.5L36.4293 37.005L36.4292 37.005L36.5 37.5ZM39.5 40.5L39.697 40.9596C39.8057 40.913 39.8943 40.8294 39.9472 40.7236L39.5 40.5ZM30.6395 40.7465C30.3744 40.6694 30.0969 40.8219 30.0199 41.0871C29.9428 41.3522 30.0953 41.6297 30.3605 41.7068L30.6395 40.7465ZM23.6581 35.9752C24.3657 35.7393 25.5638 35.4752 26.8173 35.4633C28.0806 35.4513 29.3183 35.6958 30.1877 36.3913L30.8123 35.6104C29.6817 34.7059 28.1694 34.4504 26.8077 34.4634C25.4362 34.4764 24.1343 34.7623 23.3419 35.0265L23.6581 35.9752ZM30.1877 36.3913C31.2731 37.2596 32.5685 37.7004 33.7253 37.9054C34.8816 38.1102 35.9349 38.086 36.5708 37.995L36.4292 37.005C35.8984 37.081 34.9518 37.1071 33.8997 36.9207C32.8482 36.7344 31.7269 36.3421 30.8123 35.6104L30.1877 36.3913ZM36.5707 37.995C37.1267 37.9156 37.9459 37.8714 38.6058 37.9808C38.9389 38.036 39.184 38.123 39.3338 38.226C39.4628 38.3147 39.5 38.3955 39.5 38.5H40.5C40.5 38.0045 40.2456 37.6395 39.9006 37.4021C39.5764 37.1791 39.1652 37.0598 38.7692 36.9942C37.9708 36.8619 37.04 36.9178 36.4293 37.005L36.5707 37.995ZM39.5 38.5C39.5 39.1334 39.4954 39.2984 39.4557 39.4412C39.4376 39.5064 39.4081 39.5782 39.3418 39.7108C39.3086 39.7772 39.2697 39.852 39.2209 39.9466C39.1727 40.0398 39.1168 40.1484 39.0528 40.2764L39.9472 40.7236C40.0082 40.6016 40.0617 40.4977 40.1092 40.4058C40.156 40.3152 40.1992 40.2322 40.2363 40.158C40.3106 40.0093 40.3749 39.8686 40.4193 39.7088C40.5046 39.4016 40.5 39.0666 40.5 38.5H39.5ZM39.303 40.0404C35.921 41.4899 32.5411 41.2992 30.6395 40.7465L30.3605 41.7068C32.4589 42.3167 36.079 42.5101 39.697 40.9596L39.303 40.0404Z" fill="black"/><mask id="path-5-inside-1_584_1977" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M40.5 19C39.1193 19 38 20.1193 38 21.5V24H35.5C34.1193 24 33 25.1193 33 26.5C33 27.8807 34.1193 29 35.5 29H38V31.5C38 32.8807 39.1193 34 40.5 34C41.8807 34 43 32.8807 43 31.5V29H45.5C46.8807 29 48 27.8807 48 26.5C48 25.1193 46.8807 24 45.5 24H43V21.5C43 20.1193 41.8807 19 40.5 19Z"/></mask><path d="M38 24V25H39V24H38ZM38 29H39V28H38V29ZM43 29V28H42V29H43ZM43 24H42V25H43V24ZM39 21.5C39 20.6716 39.6716 20 40.5 20V18C38.567 18 37 19.567 37 21.5H39ZM39 24V21.5H37V24H39ZM35.5 25H38V23H35.5V25ZM34 26.5C34 25.6716 34.6716 25 35.5 25V23C33.567 23 32 24.567 32 26.5H34ZM35.5 28C34.6716 28 34 27.3284 34 26.5H32C32 28.433 33.567 30 35.5 30V28ZM38 28H35.5V30H38V28ZM39 31.5V29H37V31.5H39ZM40.5 33C39.6716 33 39 32.3284 39 31.5H37C37 33.433 38.567 35 40.5 35V33ZM42 31.5C42 32.3284 41.3284 33 40.5 33V35C42.433 35 44 33.433 44 31.5H42ZM42 29V31.5H44V29H42ZM45.5 28H43V30H45.5V28ZM47 26.5C47 27.3284 46.3284 28 45.5 28V30C47.433 30 49 28.433 49 26.5H47ZM45.5 25C46.3284 25 47 25.6716 47 26.5H49C49 24.567 47.433 23 45.5 23V25ZM43 25H45.5V23H43V25ZM42 21.5V24H44V21.5H42ZM40.5 20C41.3284 20 42 20.6716 42 21.5H44C44 19.567 42.433 18 40.5 18V20Z" fill="black" mask="url(#path-5-inside-1_584_1977)"/></svg>
            <div class="h8">Continued Support</div>
            <div class="h9">As a Fungaid patient, you will receive continuous, personalized care from our healthcare team who are specially trained to treat your symptoms.</div>
          </li>
        </ul>
      </div>
      <div class="products__agree">
        <input type="checkbox" id="agree" v-model="agree">
        <label for="agree">I have read and understand the <button class="btn-link" @click.prevent="emit('step', 'safety')">Safety Information</button> associated with these treatments.</label>
      </div>
      <div class="start__group">
        <button
          type="button"
          :disabled="!agree"
          @click.prevent="nextShipping"
          class="btn btn-red">
          CONTINUE
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';

const globalStore = useGlobalStore(),
      emit = defineEmits(['step']),
      agree = ref(false)

const nextShipping = (): void => {
  let valid: boolean = true
  const products = Object.values(globalStore.products).find(item => item.model === true)
  if(!products){
    alert(' Please select at least one product. Because of your medical history, it would not be safe to take Estrogen without Progesterone.')
    return
  }
  emit('step', 'shipping')
  globalStore.setOnboarding(60)
}

const back = (): void => {
  emit('step', 'question')
}
</script>

<style lang="scss" scoped>
.products{
  &__benefits{
    max-width: 776px;
    margin-left: auto;
    margin-right: auto;
    .h7{
      text-align: left;
      max-width: 776px;
      margin-bottom: 0;
    }
    ul{
      li{
        position: relative;
        padding-left: 90px;
        list-style: none;
        min-height: 65px;
        &:not(:first-child){
          margin-top: 1.5rem;
        }
        svg{
          position: absolute;
          left: 0; top: 0;
        }
        .h8, .h9{
          text-align: left;
        }
        .h8{
          margin-bottom: 8px;
        }
        .h9{
          max-width: 380px;
          margin-bottom: 0;
        }
      }
    }
  }
  &__agree{
    max-width: 776px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    input{
      margin-right: 1rem;
    }
    label{
      color: var(--Dark-Blue, #083952);
      font-size: 12px;
      font-weight: 400;
      line-height: 133.333%;
    }
  }
}
</style>