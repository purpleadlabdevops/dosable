<script setup>
const props = defineProps({
        modelValue: String,
        placeholder: String,
        autocomplete: String,
        label: String,
        required: Boolean
      }),
      uid = Math.random(100),
      emit = defineEmits(['update:modelValue']),
      updateValue = value => {
        emit('update:modelValue', value)
      }
</script>

<template>
  <div class="form__field">
    <label v-if="label" :for="'field'+uid">{{ label }}</label>
    <input
      :id="'field'+uid"
      type="text"
      :value="props.modelValue"
      v-on:input="updateValue($event.target.value)"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
    />
  </div>
</template>
