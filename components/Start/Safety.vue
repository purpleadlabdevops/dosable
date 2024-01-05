<template>
  <section class="safety">
    <div class="safety__inner" :class="showSafety">
      <button
        class="safety__close"
        type="button"
        @click.prevent="emit('step', 'summary')">
        <svg data-v-25c87022="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="x circle fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle-fill close-icon b-icon bi text-info"><g data-v-25c87022="" transform="translate(8 8) scale(1.3 1.3) translate(-8 -8)"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path></g></svg>
      </button>
      <p><b>Fungaid Custom Rx Topical:</b></p>
      <p><b>Read this safety information before starting this medication and with every refill. There may be new information. This information is not a substitute for discussing your medical condition or treatment with your healthcare provider.</b></p>
      <p><b>This compounded product has not been approved by the FDA. It is only available if prescribed by a dermatologist through Dosable.com who will determine if treatment is suitable. </b></p>
      <h3>What I need to know about topical Fungaid Rx Compound:</h3>
      <p>Fungaid is a compounded topical medication combining itraconazole, fluconazole, terbinafine, ibuprofen, and tea tree oil, compounded together as an off-label topical therapy aiding in promoting a healthy nail matrix, elimination of fungal spores and membranes and preventing further pathological thickening of the nail bed.</p>
      <ul>
        <li><b>Itraconazole</b> is an antifungal medication commonly used to treat nail fungus infections, a condition known as onychomycosis. It belongs to a class of drugs called triazole antifungals. Itraconazole works by inhibiting the synthesis of ergosterol, a crucial component of fungal cells. By inhibiting squalene epoxidase, terbinafine disrupts the synthesis of ergosterol. Without sufficient ergosterol, fungal cell membranes become structurally unstable and more permeable. Additionally, the accumulation of toxic squalene and other intermediates within the fungal cells further disrupts the integrity and function of the cell membrane. </li>
        <li><b>Fluconazole</b> interferes with the activity of certain enzymes known as cytochrome P450 enzymes that are involved in the synthesis of ergosterol, a key component of fungal cell membranes. These enzymes are part of the ergosterol biosynthesis pathway, similar to the way they are targeted by other azole antifungal medications. </li>
        <li><b>Terbinafine</b> targets an enzyme called squalene epoxidase, which is a key enzyme in the fungal ergosterol biosynthesis pathway. Ergosterol is a vital component of fungal cell membranes, similar to cholesterol in human cell membranes.</li>
        <li><b>Ibuprofen</b> acts on isolated dermatophytes may related to the inhibitory action of on-secreted COX that is produced by fungal cells and not to direct toxicity that NSAIDs may have. Inhibition of prostaglandin production is not the only mechanism of ibuprofen in fungal cells.</li>
        <li><b>Tea tree oil</b> contains compounds called terpenes, with terpinen-4-ol being the most well-known and active component. Terpinen-4-ol is believed to have antifungal activity by disrupting the structure and function of fungal cell membranes. It may interfere with fungal enzymes and proteins, leading to the inhibition of fungal growth and proliferation.</li>
      </ul>
      <h3>Absolute Contraindications – DO NOT use Fungaid if you:</h3>
      <ul>
        <li>Are allergic to any of the active ingredients</li>
        <li>Are under 18 or are pregnant, breastfeeding, or planning to become pregnant </li>
      </ul>
      <h3>Drug Interactions – DO NOT use Fungaid if you take: </h3>
      <ul><li>Certain cytochrome 450 related medications (see a doctor in-person about seeking treatment with itraconazole/terbinafine/flucanozole if this applies to you)  </li></ul>
      <h3>Serious Side Effects – STOP treatment and seek emergency medical care or call 911 if you experience:  </h3>
      <ul><li>If you develop skin blisters (dermal vesicles)</li></ul>
      <p>It’s important to closely and regularly monitor for these side effects while applying your custom topical solution, especially when starting or changing your dose, as they can indicate a severe reaction. If you notice any side effects, stop taking your Rx topical solution and get immediate medical attention, or call 911. </p>
      <h3>Common Side Effects  – Talk to your provider about changing your dose/treatment if you experience: </h3>
      <ul>
        <li>Ingrown toenails</li>
        <li>Application site pain</li>
        <li>Dermatitis</li>
      </ul>
      <p>These are not all the possible side effects that may happen with your custom Rx topical solution. For more information, ask your healthcare provider or pharmacist and refer to the complete prescribing information below.</p>
      <p><b>Always use your Fungaid custom Rx topical under the supervision of a healthcare professional and undergo regular medical assessments during treatment.</b></p>
      <h3>Always Inform Medical Professionals:</h3>
      <ul>
        <li>Always consult a healthcare provider immediately about any unusual side effects, concerns or changes noticed during treatment.</li>
        <li>You can message your Dosable dermatologist through your Dosable account (dosable.com) if you have any questions or concerns about your treatment.  </li>
      </ul>
      <h3>Always Provide Accurate Health Information:</h3>
      <p>Failing to provide accurate information about your health and medical history can lead to severe consequences, including harm or, in some instances, death.</p>
      <h3>Report Side Effects to the FDA: </h3>
      <p>Negative side effects should be reported to the FDA at www.fda.gov/medwatch  or call 1-800-FDA-1088.</p>
      <h3>Instructions For Use:</h3>
      <ul>
        <li>Follow your healthcare provider's specific instructions when using this medication</li>
        <li>Do not apply this medication more than the recommended dose; doing so won't enhance results and may raise the likelihood of side effects</li>
        <li>Wash your hands with soap after application</li>
        <li>This product is meant solely for your toenails, repeated contact with other skin areas can potentially result in unwanted skin irritation</li>
        <li>Do not apply on other parts of the body</li>
        <li>Avoid contact with the eyes. In case of accidental contact, rinse eyes with copious amounts of cool tap water </li>
        <li>Do not use this medication for a condition for which it was not prescribed.</li>
        <li>Never share this medication with others, even if their symptoms are similar to yours. It may be harmful to them. </li>
      </ul>
      <h3>Storage Information</h3>
      <ul>
        <li>Keep this medication at a room temperature </li>
        <li>Dispose of the medication if you are no longer using it. </li>
        <li>Keep out of reach of children. If swallowed, get medical help or contact a Poison Control Center right away.</li>
      </ul>
      <p><b>Disclaimer: The FDA has not evaluated all the claims made here. This medication is not guaranteed to diagnose, treat, cure, or prevent any disease. Individual results may vary. This information is not comprehensive. Please see the full prescribing link below for complete safety information: Itraconazole,  Fluconazole, Terbinafine, Ibuprofen</b></p>
    </div>
  </section>
</template>

<script lang="ts" setup>
const emit = defineEmits(['step']),
      showSafety = ref<String | Boolean>(false)

onMounted(() => {
  setTimeout(()=>{
    showSafety.value = 'safety__inner-in'
  }, 250)
  document.documentElement.style.overflow = 'hidden'
  document.documentElement.style.height = '100vh';
  document.documentElement.style.width = '100vw';
})

onBeforeUnmount(() => {
  showSafety.value = false
  document.documentElement.style.overflow = 'auto'
  document.documentElement.style.height = 'auto';
  document.documentElement.style.width = 'auto';
})
</script>

<style lang="scss" scoped>
.safety{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background: rgba(var(--light-blue-rgb), 0.5);
  z-index: 102;
  overflow: hidden;
  &__inner{
    width: calc(100% - 30px);
    margin-left: 100%;
    height: calc(var(--vh, 1vh) * 100);
    background: #fff;
    padding: 32px res(30, 50) 32px res(15, 32);
    transition: .5s ease;
    overflow-y: auto;
    @media(min-width:768px){
      width: 50%;
    }
    &-in{
      margin-left: 30px;
      @media(min-width:768px){
        margin-left: 50%;
      }
    }
  }
  &__close{
    background: none;
    padding: 0;
    border: none;
    position: absolute;
    right: 1rem;
    top: 1rem;
    * {
      pointer-events: none;
    }
    svg{
      width: 20px;
      height: auto;
      border-radius: 50%;
    }
    path{
      fill: var(--purple);
    }
  }
  &{
    color: var(--dark-blue);
  }
  h2{
    margin-bottom: 1.5rem;
  }
  h3{
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  p{
    margin-bottom: 1rem;
  }
  ul{
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    li{
      list-style: disc;
      margin-bottom: 0.5rem;
    }
  }
}
</style>