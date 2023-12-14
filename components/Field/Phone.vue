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
      emit = defineEmits(['update:modelValue']),
      uid = Math.random(100),
      updateValue = value => {
        emit('update:modelValue', value)
        error.value = value && value.length < 15 ? true : false
      }
</script>

<template>
  <div class="form__row">
    <label v-if="label" :for="'field'+uid">{{ label }}</label>
    <div class="form__field">
      <input
        type="tel"
        :id="'field'+uid"
        :value="props.modelValue"
        v-on:input="updateValue($event.target.value)"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :required="required"
        :style="error ? 'border-color: red' : ''"
        v-maska
        data-maska="(###) ###-##-##"
        @maska="rawValue = $event.target.dataset.maskRawValue"
      />
    </div>
  </div>
</template>
