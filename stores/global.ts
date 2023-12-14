import { defineStore } from 'pinia'

interface IProduct { [key: string]: {
  name: string
  short: string
  long: string
  one: number
  three: number
  img: string
  model: boolean
}}

interface IStart {
  [key: string]: string
}

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    products: <IProduct>{
      product_1: {
        name: 'Estrogen Patch',
        short: `This natural, FDA approved patch is safe, proven, and effective. It'll have you feeling and looking your best by returning your hormones to normal, youthful levels.`,
        long: `It’s not magic, but it might feel like it. With one clear, tiny, and powerful patch you can start fighting the symptoms associated with aging. Prescribed online, dosed for your exact body, and shipped to your door. As easy as that.`,
        one: 149,
        three: 399,
        img: 'estrogen-patch',
        model: true,
      },
      product_2: {
        name: 'Progesterone Capsule',
        short: `This natural, FDA approved treatment is often taken with estrogen, but can also be taken alone to help restore healthy hormone levels.`,
        long: `A natural ‘feel good’ treatment, progesterone anti-aging capsule is not magic, but it can feel like it. Start fighting many of the symptoms associated with aging, and prevent future symptoms today. Prescribed online, at the dosage you need, and shipped to your door. As easy as that.`,
        one: 39,
        three: 99,
        img: 'capsule-scaled',
        model: true,
      }
    },
    productsShip: <string>'one',
    shipping: null,
    billing: null,
    payment: null,
    billingSame: true,
    progress: 0,

    startData: <IStart>{
      birthday: '',
      sex: '',
    },
    intake: <number>0,
    onboarding: <number>0,
  }),
  actions: {
    changeProductsShip(val: string){
      this.productsShip = val
    },
    changeShipping(obj: any){
      this.shipping = obj
    },
    changeBilling(obj: any){
      this.billing = obj
    },
    changePayment(obj: any){
      this.payment = obj
    },
    changeBillingSame(boolean: boolean){
      this.billingSame = boolean
    },
    changeProgress(val: number){
      this.progress = val
    },
    changeModel(key: any, value: boolean){
      this.products[key].model = value
    },

    setStartData(key: any, value: any){
      this.startData[key] = value
    },
    setIntake(val: number){
      this.intake = val
    },
    setOnboarding(val: number){
      this.onboarding = val
    }
  }
})
