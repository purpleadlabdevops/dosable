<template>
  <div class="form__field">
    <label v-if="label" :for="'field'+uid">{{ label }}</label>
    <select
      :id="'field'+uid"
      :value="props.modelValue"
      v-on:input="updateValue($event.target.value)"
      :autocomplete="autocomplete"
      :required="required">
      <option selected disabled>Select state</option>
      <option
        v-for="state in states"
        :value="state">{{ state }}</option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
        modelValue: String,
        autocomplete: String,
        label: String,
        required: Boolean
      }),
      uid = Math.random(100),
      emit = defineEmits(['update:modelValue']),
      updateValue = value => {
        emit('update:modelValue', value)
      }

const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming','Virgin Islands']
</script>