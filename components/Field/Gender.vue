<template>
  <div class="form__row">
    <label v-if="label" for="field_gender">{{ label }}</label>
    <div class="form__field">
      <select :value="props.modelValue" @change="emit('update:modelValue', $event.target.value)" id="field_gender">
        <option value="MALE">MALE</option>
        <option value="FEMALE">FEMALE</option>
        <option value="Not Specified">Not Specified</option>
      </select>
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
