<template>
  <section class="payment">
    <div class="container">
      <div class="payment__head">
        <h2>Your doctor is waiting</h2>
        <div class="h7">Add a payment method to be used if treatment is prescribed (you will not be charged now).</div>
        <div class="h9"><button class="payment__link" @click.prevent="openBilling" type="button">Why do you need my credit card information?</button></div>
      </div>
      <div class="payment__cart">
        <div class="h8">Your Treatment if Prescribed</div>
        <div class="payment__cart__item" v-for="product in globalStore.products">
          <div class="payment__cart__info">
            <div class="h7">{{ product.name }}</div>
            <div class="h9">Ship every 3 months</div>
          </div>
          <div class="payment__cart__price">
            <div class="h7">${{ getProductShip(product) }}.00/month</div>
          </div>
        </div>
        <div class="payment__cart__item payment__cart__item-last">
          <div class="payment__cart__info">
            <span>Online doctor visit & shipping</span>
          </div>
          <div class="payment__cart__price">
            <span>$50.00</span> Free
          </div>
        </div>
      </div>
      <form @submit.prevent="submitForm" class="form">
        <div class="form__field">
          <div class="payment__card">
            <div class="payment__card__head">
              <svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(205 252 177)" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path></svg>
              Credit or Debit Card
              <Image format="webp" name="cc" class="payment__banks" />
            </div>
            <div class="payment__card__body">
              <input
                class="payment__card__number"
                :class="detectedCard ? `payment__card__number-${detectedCard}` : false"
                id="payment__card__number"
                v-model="cardNumber"
                @input="inputCardNumber"
                type="text"
                v-maska
                data-maska="#### #### #### ####"
                placeholder="0000 0000 0000 0000"
                pattern="[0-9]{10}" />
              <input
                class="payment__card__date"
                id="payment__card__date"
                v-model="cardDate"
                type="text"
                v-maska
                data-maska="##/##"
                placeholder="DD/MM"
                pattern="[0-9]{10}" />
              <input
                class="payment__card__code"
                id="payment__card__code"
                v-model="cardCode"
                type="text"
                v-maska
                :data-maska="['####', '###']"
                placeholder="CVV"
                pattern="[0-9]{10}" />
            </div>
          </div>
        </div>
        <div class="form__field payment__checkout">
          <input
            type="checkbox"
            id="billingSame"
            v-model="billingSame"
            @change="changeBillingSame">
          <label for="billingSame">My billing information is the same as my shipping information</label>
        </div>
        <FieldText
          v-if="!billingSame"
          v-model="billingFirstName"
          label="First name*"
          placeholder="First name"
          autocomplete="given-name"
          class="form__field-6"
          :required="true" />
        <FieldText
          v-if="!billingSame"
          v-model="billingLastName"
          label="Last name*"
          placeholder="Last name"
          autocomplete="family-name"
          class="form__field-6"
          :required="true" />
        <FieldText
          v-if="!billingSame"
          v-model="billingAddress"
          label="Street Address*"
          placeholder="Street Address"
          autocomplete="street-address"
          class="form__field-8"
          :required="true" />
        <FieldText
          v-if="!billingSame"
          v-model="billingApartment"
          label="Apartment/Suite"
          placeholder="Apartment/Suite"
          class="form__field-4"
          autocomplete="address-line2" />
        <FieldText
          v-if="!billingSame"
          v-model="billingCity"
          label="City*"
          placeholder="City"
          autocomplete="address-level2"
          :required="true" />
        <FieldStates
          v-if="!billingSame"
          v-model="billingState"
          label="State*"
          autocomplete="address-level1"
          :required="true" />
        <FieldPhone
          v-if="!billingSame"
          v-model="billingPhone"
          label="Phone*"
          placeholder="Phone Number"
          autocomplete="phone"
          class="form__field-8"
          :required="true" />
        <FieldText
          v-if="!billingSame"
          v-model="billingZip"
          label="Zip Code*"
          placeholder="Zip Code"
          autocomplete="postal-code"
          class="form__field-4"
          :required="true" />
        <div class="form__field payment__submit">
          <button class="btn" type="submit" @click.prevent="submitForm">
            {{ billingLoading ? 'Loading...' : 'SUBMIT' }}
          </button>
        </div>
        <Transition name="slide">
          <div class="form__field form__feedback" v-if="billingFormFeedback">
            {{ billingTextFeedback[billingFormFeedback] }}
          </div>
        </Transition>
      </form>
      <p class="form__small">By adding a payment method and clicking "Submit," you're agreeing to opt into a subscription with Winona. However, you won't be charged unless your physician prescribes a treatment plan. If prescribed, your payment method will be charged at that time for the cost of your prescription(s). Your subscription will renew every month or every 3 months, depending on your preference. Please note you can cancel your subscription and stop receiving treatment at any time, by contacting the Patient Care Team.</p>
      <div class="payment__security">
        <svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" ><g><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path></g></svg>
        256-BIT TLS SECURITY
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useGlobalStore } from '~/stores/global'
import { useNuxtApp } from '#app';

const nuxtApp = useNuxtApp(),
      globalStore = useGlobalStore(),
      emit = defineEmits(['billing']),
      router = useRouter(),
      productsShip = globalStore.productsShip

const getProductShip = (obj: any): void => {
  return obj.price
}

/* -----START MODELS----- */
const cardNumber       = ref<string>(''),
      cardDate         = ref<string>(''),
      cardCode         = ref<string>(''),
      billingLoading   = ref<boolean>(false),
      success          = ref<boolean>(true),
      billingFirstName = ref<string>(''),
      billingLastName  = ref<string>(''),
      billingAddress   = ref<string>(''),
      billingApartment = ref<string>(''),
      billingCity      = ref<string>(''),
      billingState     = ref<string>(''),
      billingZip       = ref<string>(''),
      billingPhone     = ref<string>(''),
      billingSame      = ref<boolean>(true)

const billingFormFeedback = ref<string | null>(''),
      billingTextFeedback: { [key: string]: string; } = {
        error: 'There was an error processing your request.',
        success: 'Your order was received.',
        incomplete: 'Please complete all required fields.',
        phone: 'Please enter a valid phone number.',
        card: 'Please enter a valid Card Number.',
        date: 'Please enter a valid Card Date.',
        code: 'Please enter a valid Card Code.',
      }

const setFeedback = (type: string, status: any) => {
  billingFormFeedback.value = type
  billingLoading.value = false
  success.value = status
  setTimeout(() => {
    billingFormFeedback.value = null
  }, 4000)
}

const submitForm = async () => {
  billingLoading.value = true
  billingFormFeedback.value = null
  if(!globalStore.billingSame){
    if( !billingAddress.value.trim()
     || !billingCity.value.trim()
     || !billingState.value.trim()
     || !billingZip.value.trim()
     || !billingPhone.value.trim()
     || !billingFirstName.value.trim()
     || !billingLastName.value.trim()
    ){
      setFeedback('incomplete', null)
      return
    }

    if (billingPhone.value && billingPhone.value.length < 15) {
      setFeedback('phone', false)
      return
    }
  }

  if( !cardNumber.value.trim() || !cardDate.value.trim() || !cardCode.value.trim() ){
    setFeedback('incomplete', null)
    return
  }

  const cleanCard = cardNumber.value.trim().replace(/[\s]/g, '')
  if(cleanCard.length < 16){
    setFeedback('card', false)
    return
  }

  const cleanDate = cardDate.value.trim().replace('/', ''),
        date = new Date()
  if( 2000 + Number(cleanDate.slice(-2)) < Number(date.getFullYear()) ){
    setFeedback('date', false)
    return
  }

  const cleanCode = cardCode.value.trim()
  if(cleanCode.length < 3){
    setFeedback('code', false)
    return
  }

  if(globalStore.shipping !== null && globalStore.billingSame){
    globalStore.changeBilling(globalStore.shipping)
  } else {
    globalStore.changeBilling({
      firstName: billingFirstName.value,
      lastName: billingLastName.value,
      address: billingAddress.value,
      apartment: billingApartment.value,
      city: billingCity.value,
      state: billingState.value,
      zip: billingZip.value,
      phone: billingPhone.value
    })
  }

  globalStore.setOnboarding(100)

  globalStore.changePayment({
    cardNumber: cardNumber.value.trim().replace(/[\s]/g, ''),
    cardMonth: cardDate.value.slice(0,2),
    cardYear: cardDate.value.slice(-2),
    cardSecurityCode: cardCode.value,
  })

  let productsArr: any[] = [],
      amount: number = 0

  Object.values(globalStore.products).forEach(product => {
    if(product.model){
      productsArr.push({
        name: product.name,
        amount: product.price
      })
      amount = amount + product.price
    }
  })

  const { data } = await useFetch('/api/stripe', {
    method: 'post',
    body: JSON.stringify({
      productsShip: globalStore.productsShip,
      shipping: globalStore.shipping,
      billing: globalStore.billing,
      payment: globalStore.payment,
      products: productsArr,
      amount: amount,
    }),
    onResponse({ request, response, options }) {
      console.dir(response);
      setFeedback('success', true)
      globalStore.changeProgress(100)
      nuxtApp.$fb.track('Purchase', {value: amount, currency: 'USD'})
      console.log('GTM Purchase - '+ dataLayer.push({'event': 'Purchase'}) )
      setTimeout(() => {
        router.push({ path: "/thanks" })
      }, 3000);
    },
    onResponseError({ request, response, options }) {
      console.dir(response);
      setFeedback('error', true)
    }
  })
}

const openBilling = () => emit('step', 'billing')

const changeBillingSame = () => globalStore.changeBillingSame(billingSame.value)

const detectCardType = (number: any) => {
  const re: { [key: string]: RegExp; } = {
      electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
      maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
      dankort: /^(5019)\d+$/,
      interpayment: /^(636)\d+$/,
      unionpay: /^(62|88)\d+$/,
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/,
      diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/
  }

  for(let key in re) {
    if(re[key].test(number)) {
      return key
    }
  }
}

const detectedCard = ref<any>(false)

const inputCardNumber = (e: any): void => {
  const cleanNumber = cardNumber.value.trim().replace(/[\s]/g, '')
  detectedCard.value = detectCardType(cleanNumber)
  console.dir(e)
}
</script>

<style lang="scss" scoped>
.payment{
  &__head{
    text-align: center;
    .h7{
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }
  .form{
    margin-top: 40px;
    margin-bottom: 30px;
    max-width: 726px;
    margin-left: auto;
    margin-right: auto;
    input{
      padding: 0;
    }
  }
  &__link{
    color: rgb(130, 130, 130);
    font-size: 17px;
    text-decoration: underline;
    background: none;
    padding: 0;
    border: none;
  }
  &__cart{
    padding: 24px;
    margin-top: 38px;
    margin-bottom: 24px;
    max-width: 726px;
    margin-left: auto;
    margin-right: auto;
    background: rgba(242, 242, 242, 0.5);
    h3{
      font-size: 17px;
      font-weight: 500;
      margin-bottom: 36px;
    }
    h4{
      font-size: 17px;
      font-weight: 500;
      margin-bottom: 3px;
    }
    &__item{
      margin-bottom: 2rem;
      @media(min-width:768px){
        display: flex;
        justify-content: space-between;
      }
      &-last{
        border-top: 1px solid rgb(25, 25, 28);
        margin-top: 15px;
        padding-top: 15px;
        margin-bottom: 0;
      }
      span{
        font-size: 13px;
      }
    }
    &__price{
      font-size: 13px;
      span{
        text-decoration: line-through;
      }
    }
  }
  &__banks{
    width: res(80, 162);
    margin-left: auto;
  }
  &__card{
    background: #f9f9f9;
    border: 1px solid #edf2f9;
    &__head{
      background: #fff;
      display: flex;
      justify-content: space-between;
      padding: res(4, 8) res(6, 12);
      & > svg{
        background: var(--purple);
        border-radius: 50%;
        width: res(16, 22);
        height: res(16, 22);
        margin-right: res(6, 10);
      }
    }
    &__body{
      display: flex;
      padding: res(12, 24);
      @media(max-width:767px){
        flex-wrap: wrap;
      }
    }
    &__number{
      padding-left: res(30, 45) !important;
      background-size: res(20, 30);
      background-repeat: no-repeat;
      background-position: res(4, 8) center;
      background-image: url('@/assets/card.svg');
      @media(max-width:767px){
        width: 100%;
        margin-bottom: 4px;
      }
      &-mastercard{
        background-image: url('@/assets/mastercard.svg');
      }
      &-visa{
        background-image: url('@/assets/visa.svg');
      }
      &-jcb{
        background-image: url('@/assets/jcb.svg');
      }
    }
    &__date{
      width: 80px;
      @media(max-width:767px){
        margin-right: 4px;
        width: 100px;
        padding-left: 10px !important;
        padding-right: 10px !important;
      }
    }
    &__code{
      width: 50px;
      @media(max-width:767px){
        width: 70px;
        padding-left: 10px !important;
        padding-right: 10px !important;
      }
    }
  }
  &__checkout{
    label{
      font-size: 15px;
      position: relative;
      padding-left: 24px;
      display: block;
      &:before{
        content: "";
        position: absolute;
        background: var(--dark-blue);
        width: 16px;
        height: 16px;
        border-radius: 2px;
        left: 0; top: 0;
      }
      &:after{
        content:"\2713";
        position: absolute;
        color: var(--white);
        left: 2px; top: 0px;
        display: none;
        font-size: 12px;
        font-weight: 700;
      }
    }
    input{
      display: none !important;
      &:checked + label:after{
        display: block;
      }
    }
  }
  &__submit{
    margin-top: 30px;
  }
  &__security{
    text-align: center;
    margin-top: 45px;
  }
  .form__small{
    max-width: 726px;
    margin-left: auto;
    margin-right: auto;
    color: var(--dark-grey);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: 1s ease;
  max-height: 1000px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0px;
  transition: .5s ease;
}
</style>