<script setup>
const props = defineProps({
        modelValue: String,
        label: String,
        required: Boolean
      }),
      emit = defineEmits(['update:modelValue']),
      updateValue = value => {
        emit('update:modelValue', value)
      }
</script>

<template>
  <div class="form__field">
    <label>
      <input
        type="checkbox"
        :value="props.modelValue"
        :checked="props.modelValue"
        v-on:input="updateValue($event.target.value)"
      />
      I agree to terms and conditions
    </label>
  </div>
</template>
