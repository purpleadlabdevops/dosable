<template>
  <section class="faq">
    <div class="container">
      <ClientOnly>
        <div class="faq__title" :class="$width() < 768 ? 'h3':'h2'">Frequently Asked Questions</div>
      </ClientOnly>
      <div class="faq__item" v-for="(item, index) in items" :class="itemIndex === index ? 'faq__item-in':''" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><g clip-path="url(#clip0_362_7)"><path d="M12.003 8.88006L14.391 0.0600586L13.221 9.12006L18.8 1.88906L14.25 9.81106L22.179 5.26206L14.94 10.8451L24 9.67406L15.185 12.0641L24 14.4501L14.94 13.2801L22.178 18.8581L14.25 14.3081L18.799 22.2371L13.222 14.9981L14.392 24.0601L12.003 15.2451L9.615 24.0601L10.785 15.0001L5.2 22.2371L9.75 14.3091L1.827 18.8581L9.06 13.2811L0 14.4521L8.82 12.0631L0 9.67506L9.06 10.8451L1.829 5.26006L9.751 9.81006L5.202 1.88706L10.785 9.12006L9.614 0.0600586L12.003 8.88006Z" fill="#083952"/></g><defs><clipPath id="clip0_362_7"><rect width="24" height="24" fill="white" transform="translate(0 0.0600586)"/></clipPath></defs></svg>
        <button class="faq__question p" @click.prevent="openQuestion(index)" :key="`faq_${index}`">
          {{ item.q }}
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none"><path d="M1.22269 1.81937e-05L8.47155 7.60153L15.7204 1.69254e-05L16.9431 1.2822L8.47155 10.1659L-1.31187e-05 1.2822L1.22269 1.81937e-05Z" fill="#2B2660"/></svg>
        </button>
        <div class="faq__answer p" v-html="item.a"></div>
      </div>
      <div class="faq__btn"><nuxt-link class="btn btn-red" to="/start">START FREE TELE-VISIT</nuxt-link></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
let itemIndex = ref()

interface ItemType {
  q: string
  a: string
}

const items: Array<ItemType> = [
  {
    q: 'What is bioidentical HRT?',
    a: `Hormone replacement therapy (HRT) replenishes the levels of estrogen, progesterone, and testosterone that decline and fluctuate with age. Supplementing these hormones helps combat the symptoms of menopause and prevent the development of long-term diseases that can result from hormone deficiencies. The goal of HRT is to help your body maintain healthy, balanced hormone levels for holistic wellness. All of the hormones in Winona treatments are plant-based and bioidentical, meaning they are functionally identical to those produced naturally in your body.`,
  },
  {
    q: 'How safe is HRT? What are the risks?',
    a: `At Winona, patient safety comes first. “Do no harm” has been one of the guiding principles of medicine for millennia, and Winona takes that seriously. For this reason, there are certain conditions that have too high a risk to justify the benefits of HRT. As long as you fill out our questionnaire accurately, our Winona physicians will be able to determine whether or not HRT is a safe option for you.<br><br>That being said, Winona’s medical professionals believe, based on scientific evidence, that HRT is the most effective treatment for menopause symptoms and is worth taking for patients who have been appropriately screened and deemed good candidates. For those patients, the risks are minimal. Your Winona physician can outline the risks and benefits based on your personal medical history and symptoms.`,
  },
  {
    q: 'Do I need blood or saliva hormone testing?',
    a: `Hormone levels vary greatly, not just day-to-day, but even throughout a single day. As a result, tests for hormone levels are inaccurate and therefore not helpful for prescribing treatment. <br><br>HRT is best prescribed and adjusted based on symptoms. We’ll check in with you periodically to see how your symptoms are responding, and we'll recommend dose adjustments based on your experience.<br><br>The body is more sensitive than any laboratory test. The actual lab value isn't really important; what is important is how the body responds. We're not interested in making the labs look good, we're interested in relieving symptoms. Everyone is different in what level of hormones they tolerate without symptoms. The body tells us there's a problem by creating symptoms, which is what we're trying to fix.<br><br>Your Winona physician will determine the proper treatment and dosage after you complete the medical intake process.`,
  },
  {
    q: 'How soon will I see improvements after starting my treatment?',
    a: `Your doctor can answer more specifically for you, as symptoms and intensity vary for each person; but many women start to notice relief from some symptoms within the first couple of weeks. Hot flashes, night sweats, and sleep issues tend to ease early on and continue to improve with time.<br><br>However, for other symptoms like weight loss and muscle gain, it can take up to 3-months to see results. Studies show that this is also the point at which 80% of women experience full relief. These are general patterns, and everyone’s body responds uniquely to any given treatment.`,
  },
  {
    q: 'Will HRT help me manage menopausal weight gain?',
    a: `HRT cream and DHEA work well in tandem to address weight loss - and even more important, fat loss with muscle gain.<br><br>You will see a redistribution of weight to lower your BMI and increase your lean muscle mass. There may be a temporary gain of water weight over the first week or two, but that should go away quickly, and you should then start to see the desired weight loss.<br><br>It's still important to eat well and exercise. In addition to the direct metabolic effects, you should also sleep better with these medications. This in turn helps with weight loss by affecting cortisol and decreasing the food cravings we get when we are tired.<br><br>Don't expect to lose a lot of weight in the first month; slow, steady progress is what to expect, which adds up over time. The medications reverse metabolic effects of declining hormone levels. Like reversing a moving train, first, the weight gain needs to stop before weight loss can occur.`,
  },
  {
    q: 'Are there more natural solutions for treating my menopause symptoms?',
    a: `There are some herbal remedies in circulation for treating menopause symptoms like Evening Primrose Oil and Dong Quai, but these products are not regulated. This means, you cannot be sure of their quality and safety. Be mindful if you choose to try any of these options. <br><br>The reality is that there is nothing more natural than using bioidentical hormones to replace the hormones your body is no longer producing. Bioidentical hormones are also micronized to be better absorbed and utilized by your body.`,
  },
  {
    q: 'How does Winona compare to an in-person visit?',
    a: `Once you complete your onboarding with Winona, you’ll have access to a patient portal, where you can connect with your doctor at any time. Rather than having to wait for an in-person visit, you can be prescribed, receive your medication, and communicate with your doctor all from the comfort of your home.`,
  },
  {
    q: 'Does Winona accept insurance?',
    a: `Some private or employer-designated insurance providers may pay for Winona, but this depends on your specific insurance plan and deductible. You can also opt to pay for your prescription out-of-pocket and submit your receipts to your insurance provider for possible reimbursement.<br><br>You can use your HSA (Health Saving Account) and FSA (Flexible Spending Account) to pay for Winona prescriptions at checkout.`,
  },
  {
    q: 'How do I order?',
    a: `Once you complete your medical questionnaire, you’ll receive a treatment recommendation and be prompted to add your payment method to your patient portal. Once your payment method has been added, a doctor will review the prescription and answer any questions you noted during the onboarding process.<br><br>You can watch our onboarding video to learn more.`,
  },
  {
    q: 'How do I consult a doctor first?',
    a: `Your Winona physician determines the proper treatment and dosage, by reviewing the information you provide during the intake process. During onboarding, you can submit any concerns or questions you'd like to address with the doctor. Assuming there were no questions or concerns from you or the doctor, and the physician has determined that you’re a good candidate for treatment, your prescription(s) will be filled.<br><br>However, if you’d like to consult with your physician before beginning your treatment, you can message them anytime in your patient portal here.`,
  },
  {
    q: 'Which treatment should I add?',
    a: `Treatments must be added by your physician. You'll first need to complete our online questionnaire, to have a prescription order placed with Winona. Once you’ve filled out the questionnaire, you’ll receive a recommended treatment plan. The doctor will review your treatment plan, order your prescription to the pharmacy, and then have it shipped directly to your door.`
  }
]

const openQuestion = (index: number): any => {
  itemIndex.value = index === itemIndex.value ? null : index
}
</script>

<style lang="scss" scoped>
.faq{
  background: var(--light-blue3);
  padding: res(70, 100) 0;
  &__title{
    text-align: center;
    margin-bottom: res(30, 50);
    color: car(--dark-blue);
  }
  &__item{
    position: relative;
    padding: 5px 0 5px 40px;
    max-width: 823px;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 1px solid var(--dark-blue);
    &:not(:first-child){
      margin-top: 2rem;
    }
    & > svg{
      position: absolute;
      left: 0; top: 0;
      background: var(--white);
      border-radius: 50%;
    }
    &-in{
      .faq__question{
        svg{
          transform: rotate(180deg);
        }
      }
      .faq__answer{
        max-height: 2000px;
        transition: 1s ease-in .5s;
      }
    }
  }
  &__question{
    padding-bottom: 1rem;
    width: 100%;
    display: block;
    background: none;
    border: none;
    border-bottom: 0.3px solid var(--darl-blue);
    text-align: left;
    position: relative;
    color: car(--dark-blue);
    svg{
      position: absolute;
      right: 0;
      left: auto;
      top: 10px;
      transition: .5s ease;
    }
  }
  &__answer{
    overflow: hidden;
    transition: .5s ease-out;
    max-height: 0px;
    &:before{
      content:"";
      height: 20px;
      display: block;
    }
    &:after{
      content:"";
      height: 30px;
      display: block;
    }
  }
  &__btn{
    text-align: center;
    margin-top: res(60, 90);
  }
}
</style>
