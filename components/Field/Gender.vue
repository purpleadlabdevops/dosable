<template>
  <div class="form__row">
    <label v-if="label" for="field_birthday">{{ label }}</label>
    <div class="form__field">
      <div class="start__field">
        <input
          type="radio"
          name="radioList"
          value="FEMALE"
          checked
          @change="emit('update:modelValue', 'FEMALE')"
          id="field_sex1" />
        <label for="field_sex1" class="h7">FEMALE</label>
      </div>
      <div class="start__field">
        <input
          type="radio"
          name="radioList"
          value="MALE"
          @change="emit('update:modelValue', 'MALE')"
          id="field_sex2" />
        <label for="field_sex2" class="h7">MALE</label>
      </div>
      <div class="start__field">
        <input
          type="radio"
          name="radioList"
          value="MALE"
          @change="emit('update:modelValue', 'Not Specified')"
          id="field_sex3" />
        <label for="field_sex3" class="h7">Not Specified</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
        modelValue: String,
        placeholder: String,
        autocomplete: String,
        label: String,
        required: Boolean
      }),
      error = ref<boolean | string>(false),
      emit = defineEmits(['update:modelValue'])
</script>
