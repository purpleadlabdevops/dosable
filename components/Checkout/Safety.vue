<template>
  <section class="safety">
    <div class="safety__inner" :class="showSafety">
      <button
        class="safety__close"
        type="button"
        @click.prevent="emit('step', 'summary')">
        <svg data-v-25c87022="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="x circle fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle-fill close-icon b-icon bi text-info"><g data-v-25c87022="" transform="translate(8 8) scale(1.3 1.3) translate(-8 -8)"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path></g></svg>
      </button>
      <h1>Safety Information</h1>
      <h3>Estrogen pills, patches and body creams:</h3>
      <p>Primarily used for the relief of menopause and perimenopause symptoms. Estrogen replacement can reduce hot flashes and night sweats, treat vulvar and vaginal atrophy (thinning and drying of the vaginal tissues), prevent and treat osteoporosis and osteopenia (weakening of the bones), treat hypoestrogenism (low estrogen) due to menopause, surgical removal of the ovaries, and primary ovarian failure. <br><br> The most common side effects for women who take estrogen are headaches, breast tenderness, nausea, vaginal spotting, and bloating. For most women these side effects will go away after a few weeks of use. <br><br> Serious side effects are rare, much less than 1%, they include cancer of the uterus, breast, and ovaries, stroke, and blood clots, and gallbladder disease. <br><br> Women with a uterus should use progesterone while using estrogen. <br><br> Women that should not use estrogen include women that are pregnant, breast feeding, have cancer of the breast, uterus, ovaries, or cervix, had a stroke or heart attack in the last year, have or have had blood clots, have active liver disease, or are allergic to estrogen. </p>
      <h3>Progesterone pills:</h3>
      <p>Primarily used to prevent endometrial hyperplasia (overgrowth of the uterine lining) and uterine cancer in women receiving estrogen that still have a uterus. <br><br> The most common side effects for women who take progesterone are headaches, breast tenderness, nausea, vaginal spotting, and bloating. For most women these side effects will go away after a few weeks of use. <br><br> Serious side effects are rare, much less than 1%, they include cancer of the uterus, breast, and ovaries, stroke, and blood clots, and gallbladder disease. <br><br> Women that should not use progesterone include women that are pregnant, breast feeding, have cancer of the breast, uterus, ovaries, or cervix, had a stroke or heart attack in the last year, have or have had blood clots, have active liver disease, or are allergic to progesterone. This product contains peanut oil and should not be used by women allergic to peanuts.</p>
      <h3>Progesterone body cream:</h3>
      <p>Primarily used to prevent endometrial hyperplasia (overgrowth of the uterine lining) and uterine cancer in women receiving estrogen that still have a uterus. <br><br> The most common side effects for women who take progesterone are headaches, breast tenderness, nausea, vaginal spotting, and bloating. For most women these side effects will go away after a few weeks of use. <br><br> Serious side effects are rare, much less than 1%, they include cancer of the uterus, breast, and ovaries, stroke, and blood clots, and gallbladder disease. <br><br> Women that should not use progesterone include women that are pregnant, breast feeding, have cancer of the breast, uterus, ovaries, or cervix, had a stroke or heart attack in the last year, have or have had blood clots, have active liver disease, or are allergic to progesterone.</p>
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
  height: 100vh;
  background: rgba(26, 106, 114, 0.5);
  z-index: 102;
  overflow: hidden;
  &__inner{
    width: calc(100% - 30px);
    margin-left: 100%;
    height: 100vh;
    background: #fff;
    padding: 32px res(15, 32);
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
    right: 24px;
    top: 12px;
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
  h1{
    color: var(--cyan);
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    font-family: 'Hatton', serif;
    margin-bottom: 24px;
  }
  h3{
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 17px;
  }
  p{
    font-size: 15px;
    margin-bottom: 15px;
  }
}
</style>