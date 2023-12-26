<script setup>
import { ref } from 'vue'
const props = defineProps({
        modelValue: String,
        placeholder: String,
        autocomplete: String,
        label: String,
        required: Boolean
      }),
      error = ref(false),
      regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      emit = defineEmits(['update:modelValue']),
      uid = Math.random(100),
      updateValue = value => {
        emit('update:modelValue', value)
        error.value = value && !regex.test(value) ? true : false
      }
</script>

<template>
  <div class="form__field">
    <label v-if="label" :for="'field'+uid">{{ label }}</label>
    <input
      type="email"
      :id="'field'+uid"
      :value="props.modelValue"
      v-on:input="updateValue($event.target.value)"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :style="error ? 'border-color: red' : ''"
    />
  </div>
</template>
