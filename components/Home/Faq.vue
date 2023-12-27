<template>
  <section class="faq">
    <div class="container">
      <div class="faq__title h2">Frequently Asked Questions</div>
      <div class="faq__item" v-for="(item, index) in items" :class="itemIndex === index ? 'faq__item-in':''" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><g clip-path="url(#clip0_362_7)"><path d="M12.003 8.88006L14.391 0.0600586L13.221 9.12006L18.8 1.88906L14.25 9.81106L22.179 5.26206L14.94 10.8451L24 9.67406L15.185 12.0641L24 14.4501L14.94 13.2801L22.178 18.8581L14.25 14.3081L18.799 22.2371L13.222 14.9981L14.392 24.0601L12.003 15.2451L9.615 24.0601L10.785 15.0001L5.2 22.2371L9.75 14.3091L1.827 18.8581L9.06 13.2811L0 14.4521L8.82 12.0631L0 9.67506L9.06 10.8451L1.829 5.26006L9.751 9.81006L5.202 1.88706L10.785 9.12006L9.614 0.0600586L12.003 8.88006Z" fill="#083952"/></g><defs><clipPath id="clip0_362_7"><rect width="24" height="24" fill="white" transform="translate(0 0.0600586)"/></clipPath></defs></svg>
        <button type="button" class="faq__question p" @click.prevent="openQuestion(index)" :key="`faq_${index}`">
          {{ item.q }}
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none"><path d="M1.22269 1.81937e-05L8.47155 7.60153L15.7204 1.69254e-05L16.9431 1.2822L8.47155 10.1659L-1.31187e-05 1.2822L1.22269 1.81937e-05Z" fill="#2B2660"/></svg>
        </button>
        <div class="faq__answer p" v-html="item.a"></div>
      </div>
      <div class="faq__btn"><nuxt-link class="btn btn-red" to="/start">START MY FREE TELE-VISIT</nuxt-link></div>
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
    q: `What type of ingredients are in DOSABLE?`,
    a: `
      DOSABLE's unique formula consists of:<br>
      Itraconazole - a well-known antifungal drug from the triazole group with distinct activity against dermatophytes, yeasts, and some molds.
      <br><br>
      Terbinafine - A phase 3 study investigated the efficacy and safety of topical terbinafine solution for the treatment of distal and lateral toenail onychomycosis.
      <br><br>
      Fluconazole - has been studied for its efficacy in the treatment of onychomycosis, a fungal infection of the nail.
      <br><br>
      Ibuprofen - One study demonstrated that Ibuprofen, a non-steroidal anti-inflammatory drug, exhibits antimicrobial activity against Candida albicans and non-albicans strains.
      <br><br>
      Tea Tree Oil - Tea tree oil may be a valuable addition to traditional antifungal drugs due to its antifungal and anti-inflammatory activity.`
  },
  {
    q: `What makes DOSABLE different from other toenail fungus remedies I can find online?`,
    a: `DOSABLE Is a prescription grade which actually kills nail fungus at its root by penetrating the nail bed whereas over the counter products just sit on top of the nail bed with ingredients that dont work.`
  },
  {
    q: `Can you use it on top of nail polish?`,
    a: `Your compounded medication may be used on top of nail polish. For maximum results, it is recommended (or as instructed by your doctor) to be used underneath nail polish.`
  },
  {
    q: `How long does it take to eliminate toenail fungus?`,
    a: `When treating nail fungus with topical Rx treatments the healing process can be lengthy, often spanning several months. This extended duration is primarily due to the slow growth rate of toenails, requiring time for the new, healthy nail to grow and replace the infected portion. The effectiveness of these treatments varies, and their success depends on the topical application consistency and the infection's severity. It's crucial to continue the treatment as directed by your Fungaid doctor and maintain good foot hygiene to prevent the recurrence of the fungus.`
  },
  {
    q: `What studies show the effectiveness of the toenail fungus remedy?`,
    a: `Cochrane Review (2019): This review involved 56 randomized controlled trials with 12,501 participants, focusing on topical drugs for toenail onychomycosis. The studies primarily addressed mild to moderate onychomycosis without matrix involvement. The primary outcomes were complete cure rate and treatment-related adverse effects, with secondary outcomes including mycologic cure rate and clinical cure rate.`
  },
  {
    q: `Is it good for fingernails too?`,
    a: `The compounded medications are made specifically for toenails. Any use of the medication on fingernails would be off-label use. Please follow instructions that your doctor has given you on application location and treatment frequency.`
  },
  {
    q: `Does this work for thick nails?`,
    a: `Topical antifungals can be less effective for treating thickened nails due to a fungal infection. The thickening of the nail plate can act as a barrier, making it difficult for the medication to penetrate the site of the infection. This is especially true in severe cases of nail fungus, where the nail becomes significantly thickened and may even be distorted. This is why we recommend filing your nails between applications with the Fungaid nail debridement kit.`
  }
]

const openQuestion = (index: number): any => {
  itemIndex.value = index === itemIndex.value ? null : index
}
</script>

<style lang="scss" scoped>
.faq{
  background: var(--light-blue3);
  padding: res(50, 100) 0;
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
    color: var(--dark-blue);
    padding-right: 2rem;
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
