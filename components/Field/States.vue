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
        :value="state.abbreviation">{{ state.name }}</option>
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

const states = [
  { name: 'ALABAMA', abbreviation: 'AL'},
  { name: 'ALASKA', abbreviation: 'AK'},
  { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
  { name: 'ARIZONA', abbreviation: 'AZ'},
  { name: 'ARKANSAS', abbreviation: 'AR'},
  { name: 'CALIFORNIA', abbreviation: 'CA'},
  { name: 'COLORADO', abbreviation: 'CO'},
  { name: 'CONNECTICUT', abbreviation: 'CT'},
  { name: 'DELAWARE', abbreviation: 'DE'},
  { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
  { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
  { name: 'FLORIDA', abbreviation: 'FL'},
  { name: 'GEORGIA', abbreviation: 'GA'},
  { name: 'GUAM', abbreviation: 'GU'},
  { name: 'HAWAII', abbreviation: 'HI'},
  { name: 'IDAHO', abbreviation: 'ID'},
  { name: 'ILLINOIS', abbreviation: 'IL'},
  { name: 'INDIANA', abbreviation: 'IN'},
  { name: 'IOWA', abbreviation: 'IA'},
  { name: 'KANSAS', abbreviation: 'KS'},
  { name: 'KENTUCKY', abbreviation: 'KY'},
  { name: 'LOUISIANA', abbreviation: 'LA'},
  { name: 'MAINE', abbreviation: 'ME'},
  { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
  { name: 'MARYLAND', abbreviation: 'MD'},
  { name: 'MASSACHUSETTS', abbreviation: 'MA'},
  { name: 'MICHIGAN', abbreviation: 'MI'},
  { name: 'MINNESOTA', abbreviation: 'MN'},
  { name: 'MISSISSIPPI', abbreviation: 'MS'},
  { name: 'MISSOURI', abbreviation: 'MO'},
  { name: 'MONTANA', abbreviation: 'MT'},
  { name: 'NEBRASKA', abbreviation: 'NE'},
  { name: 'NEVADA', abbreviation: 'NV'},
  { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
  { name: 'NEW JERSEY', abbreviation: 'NJ'},
  { name: 'NEW MEXICO', abbreviation: 'NM'},
  { name: 'NEW YORK', abbreviation: 'NY'},
  { name: 'NORTH CAROLINA', abbreviation: 'NC'},
  { name: 'NORTH DAKOTA', abbreviation: 'ND'},
  { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
  { name: 'OHIO', abbreviation: 'OH'},
  { name: 'OKLAHOMA', abbreviation: 'OK'},
  { name: 'OREGON', abbreviation: 'OR'},
  { name: 'PALAU', abbreviation: 'PW'},
  { name: 'PENNSYLVANIA', abbreviation: 'PA'},
  { name: 'PUERTO RICO', abbreviation: 'PR'},
  { name: 'RHODE ISLAND', abbreviation: 'RI'},
  { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
  { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
  { name: 'TENNESSEE', abbreviation: 'TN'},
  { name: 'TEXAS', abbreviation: 'TX'},
  { name: 'UTAH', abbreviation: 'UT'},
  { name: 'VERMONT', abbreviation: 'VT'},
  { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
  { name: 'VIRGINIA', abbreviation: 'VA'},
  { name: 'WASHINGTON', abbreviation: 'WA'},
  { name: 'WEST VIRGINIA', abbreviation: 'WV'},
  { name: 'WISCONSIN', abbreviation: 'WI'},
  { name: 'WYOMING', abbreviation: 'WY' }
]
</script>