<template>
  <section class="payment">
    <div class="container">
      <div class="payment__head">
        <h2>Your doctor is waiting</h2>
        <div class="h7">Add a payment method to be used if treatment is prescribed (you will not be charged now).</div>
        <div class="h9"><button class="payment__link" @click.prevent="emit('step', 'billing')" type="button">Why do you need my credit card information?</button></div>
      </div>
      <div class="payment__cart">
        <div class="h8">Your Treatment if Prescribed</div>
        <div class="payment__cart__item">
          <div class="payment__cart__info">
            <div class="h7">Online doctor visit</div>
          </div>
          <div class="payment__cart__price">
            <div class="h7 payment__free">
              <svg xmlns="http://www.w3.org/2000/svg" width="66" height="41" viewBox="0 0 66 41" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M45.8063 2.49047C41.0096 1.53427 37.016 0.773111 36.9315 0.798973C36.847 0.82473 34.6176 2.02883 31.9773 3.47459C19.9053 10.0847 3.77843 18.8879 2.71067 19.4502C2.06298 19.7914 1.39929 20.1606 1.23581 20.2706L0.938563 20.4707L4.64291 27.2241C6.68029 30.9384 8.54572 34.3341 8.78836 34.7702C9.03101 35.2064 9.88502 36.7595 10.6862 38.2216C11.4874 39.6838 12.1986 40.906 12.2668 40.9378C12.3351 40.9695 12.9433 40.6894 13.6184 40.3151C15.4967 39.274 18.8741 37.4209 20.3202 36.6381C21.0337 36.2518 22.1049 35.6693 22.7005 35.3437C23.2962 35.0181 25.4 33.8699 27.3759 32.7923C29.3516 31.7146 34.6204 28.8339 39.0842 26.3908C43.548 23.9476 47.4512 21.8133 47.758 21.6478L48.3157 21.3469L49.722 17.7416C50.4955 15.7586 51.7631 12.5098 52.539 10.5221C53.3149 8.53433 54.0147 6.70953 54.094 6.46698C54.2152 6.09639 54.2795 6.03007 54.496 6.05211C57.5259 6.36047 59.1018 6.70497 60.753 7.42017C62.6384 8.23663 63.6533 9.01601 64.0598 9.95946C64.3893 10.7241 64.1374 11.2108 63.1164 11.7824C61.9321 12.4455 59.698 12.79 57.4663 12.6537C56.1584 12.5738 54.096 12.2096 53.0811 11.8792L52.3779 11.6503L52.3361 12.0057C52.3132 12.2012 52.2807 12.4031 52.264 12.4545C52.1838 12.7007 55.0751 13.3458 56.9488 13.4998C60.7862 13.8151 64.0089 12.936 64.8729 11.3385C65.5705 10.0485 64.6393 8.49515 62.4039 7.21988C60.7494 6.27612 56.7792 5.21325 54.8511 5.1979C54.6557 5.19642 54.645 5.14003 54.7681 4.7619C54.881 4.41516 54.871 4.31782 54.7184 4.27842C54.6135 4.25123 50.6029 3.44667 45.8063 2.49047ZM48.9678 6.09254C47.71 6.73094 47.1751 7.45745 47.2532 8.42148C47.2961 8.95259 47.7393 9.9055 47.9772 9.97857C48.0687 10.0066 48.3623 10.0062 48.6296 9.9776L49.1155 9.92561L48.727 9.51058C48.289 9.04285 48.0417 8.34368 48.1723 7.94239C48.3086 7.5238 49.0423 6.94608 49.7859 6.67195C50.5582 6.38722 50.5874 6.38856 50.7278 6.71517C51.0979 7.57555 50.856 8.81021 50.1882 9.46971C48.6492 10.9899 46.1456 10.2633 45.7709 8.1875C45.6483 7.50872 46.042 6.46154 46.6086 5.9594C47.4073 5.25172 48.1512 5.0986 49.1959 5.42699L49.8648 5.63727L48.9678 6.09254ZM39.199 5.86886L39.7227 6.78482L39.3545 7.0265C39.152 7.1594 38.021 7.78723 36.8411 8.42184L34.6957 9.57571L35.544 11.1343C36.0106 11.9915 36.4188 12.7041 36.451 12.7177C36.4832 12.7313 37.4772 12.2073 38.6599 11.5533C39.8426 10.8993 40.8614 10.3808 40.9237 10.4011C40.9862 10.4215 41.2436 10.8471 41.4959 11.347L41.9545 12.256L41.2128 12.7012C40.8049 12.9461 40.3328 13.2077 40.1636 13.2825C39.9944 13.3573 39.3277 13.7174 38.6818 14.0827L37.5076 14.7468L37.8071 15.2663C37.9719 15.552 38.4346 16.3874 38.8357 17.1227C39.2366 17.858 39.6037 18.4723 39.6514 18.4878C39.6991 18.5033 40.8179 17.9244 42.1377 17.2015C43.4574 16.4785 44.5752 15.8992 44.6216 15.9143C44.668 15.9294 44.9311 16.349 45.2063 16.8466L45.7065 17.7515L45.2292 18.0347C44.9667 18.1906 43.3955 19.0578 41.7376 19.962L38.7233 21.606L38.0056 20.317C37.6108 19.6079 36.9941 18.4915 36.635 17.8359C36.2759 17.1804 35.0135 14.8942 33.8297 12.7555C32.6459 10.6169 31.7047 8.81413 31.7381 8.74932C31.7996 8.6305 38.5213 4.90752 38.6213 4.93699C38.651 4.94571 38.9109 5.36505 39.199 5.86886ZM31.4428 11.2614C31.4354 11.3288 30.3279 11.9816 28.9817 12.7123L26.5339 14.0407L27.3949 15.6323L28.2557 17.224L30.484 16.0183L32.7123 14.8125L33.0726 15.3909C33.2707 15.709 33.5174 16.1479 33.6208 16.3661L33.8087 16.763L31.5668 17.9654L29.325 19.1678L30.3549 21.0777C30.9214 22.1281 31.4211 22.9886 31.4654 22.99C31.5096 22.9913 32.6616 22.3816 34.0254 21.6353L36.505 20.2783L37.0115 21.2713L37.5181 22.2645L35.3792 23.4354C34.2027 24.0795 32.6326 24.9302 31.8899 25.3258L30.5396 26.0452L30.3435 25.7079C30.0339 25.1757 25.0934 16.1912 24.2506 14.6278L23.4904 13.2176L23.8631 12.9863C24.068 12.859 25.6381 11.9911 27.352 11.0575L30.4682 9.36004L30.9621 10.2496C31.2338 10.7387 31.4501 11.194 31.4428 11.2614ZM23.338 16.4842C24.0181 17.1389 24.5893 18.3009 24.7023 19.2589C24.7672 19.8097 24.7312 20.1361 24.5388 20.7409L24.2921 21.5165L24.7272 21.6583C25.7126 21.9791 26.9107 23.0511 28.3858 24.932C28.8916 25.577 29.3737 26.2035 29.4573 26.3244C29.6014 26.533 29.563 26.5711 28.6969 27.0782C28.1952 27.3719 27.7244 27.5927 27.6507 27.5687C27.577 27.5447 27.3568 27.2971 27.1617 27.0186C26.1084 25.5156 24.757 24.2024 23.8192 23.7707C22.9869 23.3874 22.543 23.4354 21.5274 24.018C21.0462 24.2941 20.6417 24.553 20.6286 24.5934C20.6155 24.6337 21.2554 25.8487 22.0508 27.2932L23.4968 29.9196L22.5379 30.442C22.0106 30.7292 21.5495 30.9547 21.5133 30.943C21.4773 30.9312 19.9046 28.1088 18.0186 24.6709C15.8414 20.7024 14.6275 18.3734 14.6937 18.2919C14.8991 18.0387 16.2325 17.0428 16.9973 16.5713C19.5283 15.011 21.7758 14.9801 23.338 16.4842ZM20.1998 17.6519C19.5687 17.7452 17.5107 18.7468 17.5166 18.9578C17.5204 19.0967 19.4357 22.5332 19.5255 22.5625C19.5642 22.5751 20.0447 22.3428 20.5934 22.0464C22.5397 20.9948 22.9791 20.0971 22.2319 18.6983C21.739 17.7754 21.2093 17.5026 20.1998 17.6519ZM14.0646 19.6546L14.5226 20.5626L13.9496 20.9009C13.6344 21.0869 12.4595 21.7353 11.3387 22.3418L9.3009 23.4447L10.2183 25.1195L11.1358 26.7943L13.5616 25.4603C14.8957 24.7266 16.0117 24.1347 16.0414 24.1449C16.0711 24.1552 16.3328 24.5786 16.623 25.0861L17.1507 26.0087L15.2843 27.018C14.2578 27.5732 13.1464 28.1881 12.8145 28.3844L12.2112 28.7414L13.0374 30.2438C13.4919 31.0701 14.1895 32.3422 14.5877 33.0708L15.3116 34.3954L14.3134 34.9359L13.3152 35.4764L12.8873 34.6782C12.6519 34.2391 11.0627 31.3393 9.35592 28.234L6.25266 22.5882L7.29865 22.0153C7.87394 21.7003 9.47889 20.8205 10.8651 20.0602C12.2513 19.2999 13.4352 18.6933 13.496 18.7123C13.5568 18.7312 13.8126 19.1552 14.0646 19.6546Z" fill="#E31837"/></svg>
              $50.00
            </div>
          </div>
        </div>

        <div class="payment__cart__item" v-for="product in globalStore.products" :class="`payment__cart__item-`+product.model">
          <div class="payment__cart__info">
            <div class="h7">{{ product.name }}</div>
            <div class="h9">Ship every 1 month</div>
          </div>
          <div class="payment__cart__price">
            <div class="h7">${{ getProductShip(product) }}</div>
          </div>
        </div>

        <div class="payment__cart__item">
          <div class="payment__cart__info">
            <div class="h7">Shipping</div>
          </div>
          <div class="payment__cart__price">
            <div class="h7">${{ shippingAmount }}</div>
          </div>
        </div>

        <div class="payment__cart__item payment__cart__item-last">
          <div class="payment__cart__info">
            <div class="h7">Total amount</div>
          </div>
          <div class="payment__cart__price">
            <div class="h7">${{ amount }}</div>
          </div>
        </div>
      </div>
      <form @submit.prevent="submitForm" class="form">
        <div class="form__field">
          <div class="payment__card">
            <div class="payment__card__head">
              <button class="payment__choose">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 1.24323L7.03917 12L0 6.36759L1.32815 4.83746L6.74034 9.16686L14.3813 0L16 1.24323Z" fill="white"/></svg>
              </button>
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
                inputmode="numeric"
                pattern="[0-9]{10}" />
              <input
                class="payment__card__date"
                id="payment__card__date"
                v-model="cardDate"
                @input="inputCardDate"
                type="text"
                v-maska
                data-maska="##/##"
                placeholder="DD/MM"
                inputmode="numeric"
                pattern="[0-9]{10}" />
              <input
                class="payment__card__code"
                id="payment__card__code"
                v-model="cardCode"
                type="text"
                v-maska
                :data-maska="['####', '###']"
                placeholder="CVV"
                inputmode="numeric"
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
          <label for="billingSame">
            <svg v-if="billingSame" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 1.24323L7.03917 12L0 6.36759L1.32815 4.83746L6.74034 9.16686L14.3813 0L16 1.24323Z" fill="white"/></svg>
            My billing information is the same as my shipping information
          </label>
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
          <button class="btn btn-red" type="submit" :disabled="billingLoading" @click.prevent="submitForm">
            {{ billingLoading ? 'Loading...' : 'SUBMIT' }}
          </button>
        </div>
        <Transition name="slide">
          <div
            v-if="billingFormFeedback || konnektiveError"
            class="form__field form__feedback"
            :class="'form__feedback-'+billingFormFeedback"
            v-html="konnektiveError ? konnektiveError : billingTextFeedback[billingFormFeedback]">
          </div>
        </Transition>
      </form>
      <p class="form__small">By adding a payment method and clicking "Submit," you're agreeing to opt into a subscription with Winona. However, you won't be charged unless your physician prescribes a treatment plan. If prescribed, your payment method will be charged at that time for the cost of your prescription(s). Your subscription will renew every month or every 3 months, depending on your preference. Please note you can cancel your subscription and stop receiving treatment at any time, by contacting the Patient Care Team.</p>
      <!-- <div class="payment__security">
        <svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" ><g><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path></g></svg>
        256-BIT TLS SECURITY
      </div> -->
    </div>
  </section>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { useGlobalStore } from '~/stores/global'
import { useNuxtApp } from '#app';

const nuxtApp = useNuxtApp(),
      globalStore = useGlobalStore(),
      emit = defineEmits(['step']),
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
  if(cardNumber.value.length === 19){
    document.querySelector('.payment__card__date').focus()
  }
}

const inputCardDate = (e: any): void => {
  if(cardDate.value.length === 5){
    document.querySelector('.payment__card__code').focus()
  }
}

let startItem = {}
Object.keys(globalStore.startQuestions).forEach(item => {
  startItem[item] = {
    value: globalStore.startQuestions[item].value,
    question: globalStore.startQuestions[item].question
  }
  globalStore.setStartData(startItem)
})

const konnektiveError = ref<string | null>(null),
      setKonnektiveError = (message) => {
        let errorMessage = ''
        if(typeof message === 'string'){
          errorMessage = message
        } else {
          Object.keys(message).forEach(item => {
            errorMessage += ` ${item}: ${message[item]}`
          })
        }
        konnektiveError.value = errorMessage
        setTimeout(() => {
          konnektiveError.value = null
        }, 3000)
      }

let productsArr: any[] = [],
    amount = ref<number>(0),
    shippingAmount = ref<number>(4.99)

Object.values(globalStore.products).forEach(product => {
  if(product.model){
    productsArr.push({
      name: product.name,
      amount: product.price
    })
    amount.value = amount.value + Number(product.price)

  }
})

amount.value = Number(amount.value + shippingAmount.value).toFixed(2)

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
      phone: Number(billingPhone.value.replace(/[^\dA-Z]/g, ''))
    })
  }

  globalStore.setOnboarding(100)

  globalStore.changePayment({
    cardNumber: cardNumber.value.trim().replace(/[\s]/g, ''),
    cardMonth: cardDate.value.slice(0,2),
    cardYear: 2000+Number(cardDate.value.slice(-2)),
    cardSecurityCode: cardCode.value,
  })

  landersClicksImportKonnektive()
}

const landersClicksImportKonnektive = async () => {
  console.log('Landers START')
  const lander = await useFetch('/api/konnektive', {
    method: 'post',
    body: JSON.stringify({
      endpoint: '/landers/clicks/import',
      params: {
        campaignId: useState('campaignId').value, //globalStore.campaignId,
        pageType: "checkoutPage",
        requestUri: window.location.href,
        httpReferer: globalStore.url ? globalStore.url : window.location.href
      }
    }),
    onResponseError({ request, response, options }) {
      console.dir(response);
      setFeedback('error', true)
    }
  })

  console.dir(lander)

  if(lander.data.value.result !== 'SUCCESS'){
    setKonnektiveError(lander.data.value.message)
    return
  }

  // globalStore.setSessionId(lander.data.value.message.sessionId)
  useState('sessionId', () => lander.data.value.message.sessionId)
  console.log('sessionId --------- ' + useState('sessionId').value )

  leadsImportKonnektive()
}

const leadsImportKonnektive = async () => {
  console.log('Leads START')
  const lead = await useFetch('/api/konnektive', {
    method: 'post',
    body: JSON.stringify({
      endpoint: '/leads/import',
      params: {
        campaignId: useState('campaignId').value, // globalStore.campaignId,
        pageType: 'leadPage',
        sessionId: useState('sessionId').value, // globalStore.sessionId,
        emailAddress: globalStore.shipping.email,
        phoneNumber: globalStore.billing.phone,
        billShipSame: globalStore.billingSame || true,
        firstName: globalStore.billing.firstName,
        lastName: globalStore.billing.lastName,
        address1: globalStore.billing.address,
        address2: globalStore.billing.apartment,
        city: globalStore.billing.city,
        country: 'US',
        postalCode: globalStore.billing.zip,
        state: globalStore.billing.state,
        shipFirstName: globalStore.shipping.firstName,
        shipLastName: globalStore.shipping.lastName,
        shipAddress1: globalStore.shipping.address,
        shipAddress2: globalStore.shipping.apartment,
        shipCity: globalStore.shipping.city,
        shipCountry: 'US',
        shipPostalCode: globalStore.shipping.zip,
        shipState: globalStore.shipping.state,
      }
    }),
    onResponseError({ request, response, options }) {
      console.dir(response);
      setFeedback('error', true)
    }
  })

  console.dir(lead)
  if(lead.data.value.result !== 'SUCCESS'){
    setKonnektiveError(lead.data.value.message)
    return
  }

  // globalStore.setOrderId(lead.data.value.message.orderId)
  useState('orderId', () => lead.data.value.message.orderId)

  orderImportKonnektive()
}

const orderImportKonnektive = async () => {
  console.log('Order START')
  let amount = 0

  const orderParams = {
    orderId: useState('orderId').value, //globalStore.orderId,
    sessionId: useState('sessionId').value, //globalStore.sessionId,
    campaignId: useState('campaignId').value, //globalStore.campaignId,
    httpReferer: globalStore.url ? globalStore.url : window.location.href,
    paySource: 'CREDITCARD',
    cardNumber: globalStore.payment.cardNumber,
    cardMonth: globalStore.payment.cardMonth,
    cardYear: globalStore.payment.cardYear,
    cardSecurityCode: globalStore.payment.cardSecurityCode
  }

  Object.keys(globalStore.products).forEach(productKey => {
    if(globalStore.products[productKey].model){
      orderParams.product1_id = globalStore.products[productKey].ID
      amount = Number(globalStore.products[productKey].price)
    }
  })

  if(['max@geekex.com', 'daniel@java.blue', 'dmitry@purpleadlab.com'].includes(globalStore.shipping.email)){
    orderParams.couponCode = 'MGTEST100'
  }

  console.dir(orderParams)

  const payment = await useFetch('/api/konnektive', {
    method: 'post',
    body: JSON.stringify({
      endpoint: '/order/import',
      params: orderParams
    }),
    onResponseError({ request, response, options }) {
      console.log('onResponseError')
      console.dir(response);
      setFeedback('error', true)
    }
  })

  if(payment.data.value.result !== 'SUCCESS'){
    console.log('!== SUCCESS')
    console.dir(payment.data.value.message)
    setKonnektiveError(payment.data.value.message)
    return
  }

  console.dir(payment.data.value.message)

  saveOrder()

  setFeedback('success', true)
  globalStore.changeProgress(100)
  nuxtApp.$fb.track('Purchase', {value: amount, currency: 'USD'})
  useGtm().trackEvent({
    event: 'Purchase',
    label: 'Purchase',
    category: 'category',
    action: 'click',
  })
  setTimeout(() => {
    // router.push({ path: "/thanks" })
    emit('step', 'thanks')
  }, 1000);
}

onMounted(() => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, 0)
})
</script>

<style lang="scss" scoped>
.payment{
  padding: res(32, 64) 0 0;
  &__head{
    text-align: center;
    .h7{
      margin-top: res(20, 40);
      margin-bottom: res(8, 18);
    }
  }
  .h7{
    position: relative;
  }
  &__choose{
    width: res(18, 24);
    height: res(18, 24);
    background: var(--dark-blue);
    padding: 0;
    border: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .75rem;
    svg{
      width: res(12, 16);
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
      border-bottom: 1px solid #000;
      border-radius: 0;
      letter-spacing: 0;
    }
    [type=submit]{
      margin-top: 0;
    }
  }
  &__link{
    color: #C8C8C8;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.2;
    background: none;
    border: none;
  }
  &__cart{
    padding: 32px res(8, 24);
    margin-top: res(24, 38);
    margin-bottom: 18px;
    max-width: 726px;
    margin-left: auto;
    margin-right: auto;
    background: rgba(242, 242, 242, 0.5);
    & > .h8{
      color: var(--dark-blue);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 26px;
    }
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
      display: flex;
      justify-content: space-between;
      &-last{
        border-top: 1px solid rgb(25, 25, 28);
        margin-top: 0;
        padding-top: 62px;
        margin-bottom: 0;
        position: relative;
        &:before{
          content: "";
          height: 1px;
          background: rgb(25, 25, 28);
          left: 0; right: 0;
          position: absolute;
          top: 18px;
        }
      }
      span{
        font-size: 13px;
      }
      &-false{
        display: none;
      }
    }
    &__price{
      font-size: 13px;
    }
    &__info{
      .h7{
        margin-bottom: 8px;
        font-size: res(14, 27);
      }
    }
  }
  &__banks{
    width: res(80, 162);
    margin-left: auto;
  }
  &__card{
    background: #fff;
    border: 1px solid #edf2f9;
    &__head{
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: res(4, 8) res(8, 14) res(8, 14);
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
      border-radius: 40px 40px 0px 0px;
      background: var(--light-gray, #F2F2F2);
      @media(max-width:767px){
        flex-wrap: wrap;
      }
    }
    &__number{
      padding-left: res(30, 45) !important;
      background-size: res(20, 30);
      background-repeat: no-repeat;
      background-position: res(4, 8) center;
      background-image: url('@/assets/img/card.svg');
      @media(max-width:767px){
        width: 100%;
        margin-bottom: 4px;
      }
      &-mastercard{
        background-image: url('@/assets/img/mastercard.svg');
      }
      &-visa{
        background-image: url('@/assets/img/visa.svg');
      }
      &-jcb{
        background-image: url('@/assets/img/jcb.svg');
      }
    }
    &__number{
      @media(max-width:768px){
        width: 215px;
      }
    }
    &__date{
      width: 80px;
      text-align: center;
      @media(max-width:767px){
        width: 64px;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
    }
    &__code{
      width: 50px;
      text-align: center;
      @media(max-width:767px){
        width: 50px;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
    }
  }
  &__checkout{
    label{
      font-size: 16px;
      line-height: 24px;
      position: relative;
      padding-left: 31px;
      display: block;
      margin: 0;
      &:before{
        content: "";
        position: absolute;
        background: var(--dark-blue);
        width: 24px;
        height: 24px;
        border-radius: 4px;
        left: 0; top: 0;
      }
      svg{
        display: block;
        position: absolute;
        left: 3px; top: 6px;
      }
    }
    input{
      display: none !important;
    }
  }
  &__submit{
    margin-top: res(32, 64);
  }
  // &__security{
  //   text-align: center;
  //   margin-top: 45px;
  // }
  .form__small{
    max-width: 726px;
    margin-left: auto;
    margin-right: auto;
    color: var(--dark-grey);
  }
  &__checkout{
    margin-top: res(8, 16);
  }
  &__free{
    &:before{
      content: "";
      height: 2px;
      width: 100%;
      background: var(--red);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    svg{
      position: absolute;
      top: 0;
      left: -60px;
    }
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