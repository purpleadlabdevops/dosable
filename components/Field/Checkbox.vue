<script setup>
const props = defineProps({
        modelValue: Boolean,
        label: String,
        required: Boolean
      }),
      model = ref(false),
      emit = defineEmits(['update:modelValue']),
      updateValue = value => {
        console.log(model.value, value)
        emit('update:modelValue', value)
      }
</script>

<template>
  <div class="form__field">
    <input
      type="checkbox"
      :checked="model"
      @change="updateValue($event.target.value)" />
    <label>{{ model }} - I have read and agree to these <nuxt-link to="/terms" target="_blank">Terms & Conditions</nuxt-link> and <nuxt-link to="/privacy" target="_blank">Privacy Policy</nuxt-link></label>
  </div>
</template>

<style lang="scss" scoped>
.form__field{
  display: flex;
  align-items: center;
  label{
    font-size: res(14, 16);
    font-weight: 400;
    color: var(--dark-blue);
    margin: 0 0 0 8px;
    a{
      color: var(--red);
    }
  }
  input[type="checkbox"]{}
}
</style>