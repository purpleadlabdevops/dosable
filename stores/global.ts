import { defineStore } from 'pinia'

interface IProduct { [key: string]: {
  name: string
  title: string
  list: string[]
  short: string
  long: string
  price: number
  img: string
  save: number
  best: boolean
  model: boolean
}}

interface IQuiz {
  [key: string]: {
    value: string | string[],
    question: string
  }
}

interface IStart {
  [key: string]: string
}

interface IStartQuestions {[key: number]: {
  question: string
  description: string
  answers: string[]
  type: string
  condition?: any
  next: number | string
  value: string
}}

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    products: <IProduct>{
      product_1: {
        name: 'Antifungal Power Pack (Extra Strength)',
        title: `For complete protection for your toes, the Antifungal Power Pack comes with`,
        list: ['Extra strength DOSABLE,','Disposable nail files ','Anti-fungal supplement.'],
        short: `This 30-day supply of Extra Strength DOSABLE is formulated to start killing your toenail fungus the moment it's applied. It's made of Itraconazole (1%), Fluconazole (5%), Ibuprofen (2%), Terbinafine (5%), and Tea Tree Oil (10%), and comes in a pen or dropper.`,
        long: `This 30-day supply of Extra Strength DOSABLE is formulated to start killing your toenail fungus the moment it's applied. It's made of Itraconazole (1%), Fluconazole (5%), Ibuprofen (2%), Terbinafine (5%), and Tea Tree Oil (10%), and comes in a pen or dropper.<br><br>The disposable nail files keep your nails fresh without fear of re-infection. While the anti-fungal supplement is designed to support the growth of the nail matrix to produce stronger, and faster growing toenails.`,
        price: 149,
        img: 'product_1',
        save: 25,
        best: true,
        model: true
      },
      product_2: {
        name: 'Extra Strength DOSABLE',
        title: `Whether your toenail fungus is annoyingly stubborn, or you just want your issue dealt with quickly, this is the strongest formula available.`,
        list: [],
        short: `Far more effective than any OTC option, it uses 5 powerful ingredients to kill toenail fungus. It's made of Itraconazole (1%), Fluconazole (5%), Ibuprofen (2%), Terbinafine (5%), and Tea Tree Oil (10%), and comes in a pen or dropper.`,
        long: ``,
        price: 129,
        img: 'product_2',
        save: 0,
        best: false,
        model: true
      },
      product_3: {
        name: 'Standard DOSABLE',
        title: `If you have a more mild form of toenail fungus, or if you want to try a lower dosage before you bring out the “big guns'' then the Standard DOSABLE may be the solution for you.`,
        list: [],
        short: `Designed with a mixture of Itraconazole (1%) and TeaTree Oil (10%), this formula will fight your toenail fungus to keep your toes looking their best.`,
        long: ``,
        price: 99,
        img: 'product_3',
        save: 0,
        best: false,
        model: true
      },
      product_4: {
        name: 'Anti-Fungal Supplement',
        title: `The Anti-Fungal supplement supports nail health from the inside out, giving the nail matrix the needed help when fighting toenail fungus.`,
        list: ['Extra strength DOSABLE,','Disposable nail files ','Anti-fungal supplement.'],
        short: `This mix of Vitamin B12, Biotin and MSM/Collagen not only helps strengthen your nails but also helps promote new growth.`,
        long: ``,
        price: 39,
        img: 'product_4',
        save: 0,
        best: false,
        model: true
      }
    },
    productsShip: <string>'one',
    shipping: null,
    billing: null,
    payment: null,
    billingSame: true,
    progress: 0,
    quizData: <IQuiz>{},
    startData: <IStart>{
      birthday: '',
      sex: '',
    },
    intake: <number>0,
    onboarding: <number>0,
    startQuestion: <number>1,
    startQuestions: <IStartQuestions>{
      1: {
        question: 'What nail concerns are you experiencing?',
        description: 'FIND WHAT’S RIGHT FOR YOU',
        answers: ['Thickening of the nail','Discoloration','Change in nail shape','Loosening/lifting of nail','Brittleness','Crumbling of nail edges','Other nail symptom','None of these'],
        type: 'checkbox',
        next: 2,
        value: ''
      },
      2: {
        question: 'What nail(s) are affected?',
        description: 'FIND WHAT’S RIGHT FOR YOU',
        answers: ['One toenail','More than one toenail','All toenails','One fingernail','More than one fingernail','Fingernails and toenails are affected'],
        type: 'checkbox',
        next: 3,
        value: ''
      },
      3: {
        question: 'How long have you been experiencing these symptoms?',
        description: 'FIND WHAT’S RIGHT FOR YOU',
        answers: ['<3 months','3-6 months','6-12 months','>12 months'],
        type: 'checkbox',
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
        description: 'FIND WHAT’S RIGHT FOR YOU',
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
        description: 'FIND WHAT’S RIGHT FOR YOU',
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
        description: 'FIND WHAT’S RIGHT FOR YOU',
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
        type: 'checkbox',
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
        description: '',
        answers: ['a15-1', 'a15-2', 'a15-3', 'a15-4', 'a15-5'],
        type: 'images',
        next: 0,
        value: ''
      }
    }
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
      console.log('changeModel model - '+this.products[key].model)
    },
    setQuizData(obj: IQuiz){
      this.quizData = obj
    },
    setStartData(key: any, value: any){
      this.startData[key] = value
    },
    setIntake(val: number){
      this.intake = val
      console.log('intake - '+val)
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
