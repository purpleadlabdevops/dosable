<template>
  <section class="start__step sex">
    <div class="container">
      <div class="start__sub h8">Account Creation</div>
      <h2>What was the sex assigned to you at birth?</h2>
      <h6>Your sex assignment helps us to determine if you are eligible for treatment.</h6>
      <div class="start__form">
        <div class="start__field">
          <input
            type="radio"
            name="radioList"
            value="FEMALE"
            checked
            @change="model = 'FEMALE'"
            id="field_sex1" />
          <label for="field_sex1" class="h7">FEMALE</label>
        </div>
        <div class="start__field">
          <input
            type="radio"
            name="radioList"
            value="MALE"
            @change="model = 'MALE'"
            id="field_sex2" />
          <label for="field_sex2" class="h7">MALE</label>
        </div>
        <button
          type="button"
          @click.prevent="submit"
          class="btn">
          CONTINUE
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global';

const model = ref<string>('FEMALE'),
      error = ref<string | boolean>(false),
      globalStore = useGlobalStore(),
      emit = defineEmits(['step'])

const submit = () => {
  globalStore.setStartData('sex', model.value)
  globalStore.setIntake(60)
  emit('step', 'form')
}
</script>