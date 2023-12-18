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
  emit('update:modelValue', (el as HTMLInputElement).value)
  error.value = (el as HTMLInputElement).value && (el as HTMLInputElement).value.length < 15 ? true : false
}
</script>

<template>
  <div class="form__row">
    <label v-if="label" :for="'field__phone'">{{ label }}</label>
    <div class="form__field">
      <input
        type="tel"
        :id="'field__phone'"
        :value="props.modelValue"
        @input="updateValue($event.target)"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :required="required"
        :style="error ? 'border-color: red' : ''"
        v-maska
        data-maska="(###) ###-##-##"
      />
    </div>
  </div>
</template>
