import { defineStore } from 'pinia'

interface IProduct { [key: string]: {
  name: string
  short: string
  long: string
  price: number
  img: string
  model: boolean
}}

interface IQuiz {
  [key: string]: {
    value: string | string[],
    question: string
  }
}

interface IStartQuestions {[key: number]: {
  question: string
  description?: string | null
  answers: string[]
  type: string
  condition?: any
  next: number | string
  value: string
}}

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    width: <number>1200,
    url: null,
    campaign: null,
    products: <IProduct>{
      product_2: {
        name: 'Extra Strength Fungaid + FREE Supplement',
        short: `
          <div class="h8">Whether your toenail fungus is annoyingly stubborn, or you just want the issue dealt with quickly, this is our strongest formula available.</div>
          <div class="h8">
            Extra Strength Fungaid Provides:
            <ul>
              <li>Superior Nail Penetration</li>
              <li>Reduced Discoloration</li>
              <li>Reduced Nail Thickness</li>
              <li>Fungal Wall Destruction</li>
              <li>Protection Against Recurrence</li>
            </ul>
          </div>
          <div class="h8">Far more effective than any OTC...</div>
        `,
        long: `
          <div class="h8">Whether your toenail fungus is annoyingly stubborn, or you just want the issue dealt with quickly, this is our strongest formula available.</div>
          <div class="h8">
            Extra Strength Fungaid Provides:
            <ul>
              <li>Superior Nail Penetration</li>
              <li>Reduced Discoloration</li>
              <li>Reduced Nail Thickness</li>
              <li>Fungal Wall Destruction</li>
              <li>Protection Against Recurrence</li>
            </ul>
          </div>
          <div class="h8">Far more effective than any OTC option, it uses 5 powerful ingredients to kill toenail fungus. A custom Rx compounded solution consisting of Itraconazole (1%), Fluconazole (5%), Ibuprofen (2%), Terbinafine (5%), and Tea Tree Oil (10%). Packaged in a convenient pen delivery system for maximum coverage and results.</div>
          <div class="h8">Plus get a FREE 30-day supply of our oral Anti-Fungal supplement that supports your nail matrix cells to help fight off toenail fungus. It contains a combination of Vitamin B12, Biotin and MSM/Collagen to not only support nail health from the inside out but also help support the growth of the nail matrix to produce stronger, and faster growing toenails.</div>
        `,
        price: 0,
        img: 'product_2',
        model: true
      },
      product_3: {
        name: 'Standard DOSABLE',
        short: `
          <div class="h8">If you have a milder form of toenail fungus, or if you want a maintenance dose to try then the Standard FUNGAID may be the solution for you.</div>
          <div class="h8">
            Standard Fungaid Provides:
            <ul>
              <li>Great for year round maintenance</li>
              <li>Extreme Nail Penetration</li>
              <li>Reduces Discoloration</li>
              <li>Reduces Nail Thickness</li>
            </ul>
          </div>
        `,
        long: `
          <div class="h8">If you have a milder form of toenail fungus, or if you want a maintenance dose to try then the Standard FUNGAID may be the solution for you.</div>
          <div class="h8">
            Standard Fungaid Provides:
            <ul>
              <li>Great for year round maintenance</li>
              <li>Extreme Nail Penetration</li>
              <li>Reduces Discoloration</li>
              <li>Reduces Nail Thickness</li>
            </ul>
          </div>
          <div class="h8">Designed with a mixture of Itraconazole (1%) and TeaTree Oil (10%), this formula will fight your toenail fungus to keep your toes looking their best.</div>
        `,
        price: 0,
        img: 'product_3',
        model: false
      }
    },
    productsShip: <string>'one',
    shipping: null,
    billing: null,
    payment: null,
    billingSame: true,
    progress: 0,
    quizData: <IQuiz>{},
    startData: <IQuiz>{},
    intake: <number>0,
    onboarding: <number>0,
    startQuestion: <number>1,
    startQuestions: <IStartQuestions>{
      1: {
        question: 'What nail concerns are you experiencing?',
        answers: ['Thickening of the nail','Discoloration','Change in nail shape','Loosening/lifting of nail','Brittleness','Crumbling of nail edges','Other nail symptom','None of these'],
        type: 'checkbox',
        next: 2,
        value: ''
      },
      2: {
        question: 'What nail(s) are affected?',
        answers: ['One toenail','More than one toenail','All toenails','One fingernail','More than one fingernail','Fingernails and toenails are affected'],
        type: 'checkbox',
        next: 3,
        value: ''
      },
      3: {
        question: 'How long have you been experiencing these symptoms?',
        answers: ['<3 months','3-6 months','6-12 months','>12 months'],
        type: 'radio',
        next: 4,
        value: ''
      },
      4: {
        question: 'Some signs/symptoms can indicate that something other than fungus may be causing your nail symptoms. Have you experienced any of the following?',
        description: 'select all that apply',
        answers: ['Redness/swelling <br>around the nail(s)', 'Pain of the affected <br>nail/toe(s)', 'Bleeding of the <br>affected nail', 'Pus or drainage <br>from the nail(s)', 'Dark black color of <br>the nail bed or surrounding skin', 'Rash on the skin <br>surrounding the affected nail', 'New bump/nodule/growth <br>under the nail or on toe', 'None of the above'],
        type: 'checkbox',
        next: 5,
        value: ''
      },
      5: {
        question: 'Please provide any additional details about your nail symptoms.',
        description: 'If nothing else to add please write none or N/A',
        answers: [],
        type: 'textarea',
        next: 6,
        value: ''
      },
      6: {
        question: 'Have you been previously diagnosed with onychomycosis/ fungal infection of the nail(s) by a healthcare professional?',
        answers: ['Yes', 'No'],
        type: 'radio',
        next: 7,
        value: ''
      },
      7: {
        question: 'Have you used any products/treatments on your nails?',
        description: 'Please list and provide details if any were effective. If none, please write none or N/A',
        answers: [],
        type: 'textarea',
        condition: 8,
        next: 9,
        value: ''
      },
      8: {
        question: 'Have you experienced any adverse reactions from any prior skin products/therapies used on your nails?',
        description: 'If none, please write “none.”',
        answers: [],
        type: 'textarea',
        next: 9,
        value: ''
      },
      9: {
        question: 'Do you have any chronic medical conditions?',
        description: `Please include any history of skin conditions or skin cancer. Also note whether your condition(s) is/are currently well managed. If none, write none or N/A.`,
        answers: [],
        type: 'textarea',
        next: 10,
        value: ''
      },
      10: {
        question: 'Are you currently pregnant, breastfeeding or planning to become pregnant in the next 3 to 6 months?',
        answers: ['Yes', 'No'],
        type: 'radio',
        next: 11,
        value: ''
      },
      11: {
        question: 'List all medications and supplements you are prescribed/taking.',
        description: 'If none, please write “none.”',
        answers: [],
        type: 'textarea',
        next: 12,
        value: ''
      },
      12: {
        question: 'Do you have any allergies or intolerances to food, dyes, medications, antibiotics, or anything else.',
        answers: ['Yes', 'No'],
        type: 'radio',
        condition: 13,
        next: 14,
        value: ''
      },
      13: {
        question: 'Please list all allergies',
        description: '',
        answers: [],
        type: 'textarea',
        next: 14,
        value: ''
      },
      14: {
        question: 'How long ago was your most recent check up with a physician?',
        description: 'Note: We do recommend that our patients have a primary healthcare provider that they see in person on regular basis. If you do not have a primary healthcare provider, you can visit Zocdoc or search federally qualified health centers to find one in your area.',
        answers: ['Within past year','Within 2 years','Within 3-5 years','Over 5 years ago'],
        type: 'radio',
        next: 15,
        value: ''
      },
      15: {
        question: 'Here’s your first message to your doctor.',
        description: 'Please introduce yourself and feel free to ask any questions you have about any medical problem you have which were not discussed above or include anything else you would like the doctor to know.',
        answers: [],
        type: 'textarea',
        next: 16,
        value: ''
      },
      16: {
        question: 'Here’s your first message to your doctor.',
        description: 'Please introduce yourself and feel free to ask any questions you have about any medical problem you have which were not discussed above or include anything else you would like the doctor to know.',
        answers: [],
        type: 'textarea',
        next: 17,
        value: ''
      },
      17: {
        question: 'Which one of the images below most closely resembles the appearance of your toe fungus?',
        answers: ['a15-1', 'a15-2', 'a15-3', 'a15-4', 'a15-5'],
        type: 'images',
        next: 0,
        value: ''
      }
    }
  }),
  actions: {
    setCampaign(obj: any){
      this.campaign = obj
      obj.products.forEach(product => {
        if( this.products[product.clientProductId] ){
          this.products[product.clientProductId].price = product.price
          this.products[product.clientProductId].ID = product.campaignProductId
        }
      })
    },
    setUrl(val: string){
      this.url = val
    },
    setWidth(val: number){
      this.width = val
    },
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
    changeProductModel(key: any, value: boolean){
      Object.keys(this.products).forEach(item => {
        this.products[item].model = false
      })
      this.products[key].model = true
    },
    setQuizData(obj: IQuiz){
      this.quizData = obj
    },
    setStartData(obj: IQuiz){
      this.startData = obj
    },
    setIntake(val: number){
      this.intake = val
    },
    setOnboarding(val: number){
      this.onboarding = val
    },
    setStartQuestion(value: any){
      this.startQuestion = value
    },
    setStartQuestionAnswer(key: number, value: any){
      this.startQuestions[key].value = value

      const questionsCount = Object.keys(this.startQuestions).length
      this.setIntake((90 / questionsCount * this.startQuestion) + 10)

      if(key === 12 && value === 'Yes'){
        this.setStartQuestion(this.startQuestions[key].condition)
        return
      }
      if( key === 7 && ['NONE', 'none', 'N/A', 'n/a', 'NA', 'na'].includes(value) ){
        this.setStartQuestion(this.startQuestions[key].condition)
        return
      }
      this.setStartQuestion(this.startQuestions[key].next)
    },
  }
})
