<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
        modelValue: String,
        placeholder: String,
        autocomplete: String,
        label: String,
        required: Boolean
      }),
      error = ref<boolean | string>(false),
      emit = defineEmits(['update:modelValue'])

const updateValue = (el: EventTarget | null): void => {
  const modelValue = (el as HTMLInputElement).value,
        modelDate: Date  = new Date(modelValue),
        currentDate: Date  = new Date()

  setTimeout(() => error.value = false, 3000)

  emit('update:modelValue', modelValue)

  if(!modelValue){
    error.value = 'Please insert correct date.'
    return
  }

  if(modelDate.getFullYear() > currentDate.getFullYear() - 21){
    error.value = 'You must be over 21 years old.'
    return
  }

  if(modelDate.getFullYear() < currentDate.getFullYear() - 80){
    error.value = `You mustn't be older than 80 years old.`
    return
  }
}
</script>

<template>
  <div class="form__row">
    <label v-if="label" for="field_birthday">{{ label }}</label>
    <div class="form__field">
      <input
        type="tel"
        id="field_birthday"
        :value="props.modelValue"
        @input="updateValue($event.target)"
        placeholder="MM/DD/YYYY"
        :required="required"
        :style="error ? 'border-color: red' : ''"
        v-maska
        data-maska="##/##/####" />
    </div>
  </div>
</template>
