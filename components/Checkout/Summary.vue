<template>
  <section class="checkout__summary">
    <div class="container">
      <h2>Your visit summary</h2>
      <h3>Almost done! Here’s your personalized treatment plan for the doctor to review. Our board certified doctors are here to determine the right treatment plan for you. In the next step, you’ll add billing information to your account and then a Winona doctor will review your medical history and address any questions.</h3>
      <div class="checkout__treatment">
        <h3>Prescription Treatment</h3>
        <button
          class="checkout__edit"
          @click.prevent="emit('step', 'cart')"
          type="button">
          EDIT
        </button>
      </div>
      <div class="checkout__addons">
        <div class="checkout__product" v-for="product in globalStore.products" :class="!product.model ? 'checkout__product-hide':''">
          <h3>{{ product.name }}</h3>
          <p>Ship every {{ globalStore.productsShip === 'one' ? 'month':'3 months' }}</p>
          <p>${{ globalStore.productsShip === 'one' ? product.one : product.three }}.00/month</p>
          <Image format="webp" :name="product.img" />
        </div>
      </div>
      <p>You won't be charged for or shipped this prescription product unless a doctor prescribes it to you.</p>
      <CheckoutBenefits />
      <div class="checkout__safety">
        <input
          id="safety"
          type="checkbox"
          v-model="safety"
        />
        <label for="safety">
          I have read and understand the <button @click.prevent="emit('step', 'safety')">Safety Information</button> associated with these treatments.
        </label>
      </div>
      <button
        class="btn btn-purple checkout__submit"
        :disabled="!safety"
        @click.prevent="emit('step', 'shipping')">CONTINUE</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global'

const globalStore = useGlobalStore(),
      emit = defineEmits(['step']),
      safety = ref<Boolean>(true)

onMounted(() => {
  setTimeout(()=>{
    globalStore.changeProgress(50)
  }, 500)
})
</script>

<style lang="scss">
.checkout{
  &__summary{
    padding-top: 170px;
    padding-bottom: 50px;
    .container{
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    h2{
      font-weight: 500;
      font-size: 25px;
      letter-spacing: -0.768px;
      margin-bottom: 12px;
      font-family: "Atten New";
    }
    h3{
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 0.15px;
      margin-bottom: 24px;
    }
  }
}
</style>

<style lang="scss" scoped>
.checkout{
  &__treatment{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    h3{
      margin: 0;
    }
  }
  &__edit{
    color: var(--cyan);
    background: none;
    padding: 0;
    border: none;
    font-size: 17.6px;
    text-decoration: underline;
    letter-spacing: 0.15px;
    line-height: 1;
  }
  &__product{
    background-color: rgba(242, 242, 242, 0.5);
    border-radius: 0;
    margin-bottom: 1.5rem;
    box-shadow: 0 0.75rem 1.5rem rgba(79,79,79,.03);
    padding-bottom: 24px;
    padding-top: 24px;
    position: relative;
    border: 1px solid #edf2f9;
    padding-left: 24px;
    &-hide{
      display: none;
    }
    h3{
      margin-bottom: 6px;
      font-size: 17px;
      letter-spacing: -0.34px;
      font-weight: 500;
    }
    p{
      font-size: 15px;
      & + p{
        margin-top: 40px;
        font-weight: 500;
      }
    }
    img{
      display: block;
      position: absolute;
      right: 24px;
      top: 6px;
      height: calc(100% - 12px);
      width: auto;
    }
  }
  &__safety{
    margin-bottom: 24px;
    label{
      font-size: 15px;
      position: relative;
      padding-left: 24px;
      display: block;
      &:before{
        content: "";
        position: absolute;
        background: var(--purple);
        width: 16px;
        height: 16px;
        border-radius: 2px;
        left: 0; top: 0;
      }
      &:after{
        content:"\2713";
        position: absolute;
        color: var(--white);
        left: 3px; top: 2px;
        display: none;
        font-size: 12px;
        font-weight: 700;
      }
    }
    input{
      display: none;
      &:checked + label:after{
        display: block;
      }
    }
    button{
      font-size: 15px;
      padding: 0;
      background: none;
      border: none;
      color: var(--purple);
      text-decoration: underline;
    }
  }
  &__submit{
    display: block;
    width: 100%;
  }
}
</style>