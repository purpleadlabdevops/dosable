<template>
  <div class="page page__dashboard">
    <h1>Dashboard</h1>
    <div class="admin__board">
      <h4>Orders:</h4>
      <div class="admin__board-item">
        <b>$0.00</b>
        gross total
      </div>
      <div class="admin__board-item">
        <b>$0.00</b>
        0 orders placed
      </div>
      <div class="admin__board-item">
        <b>$0.00</b>
        0 orders refunded
      </div>
      <div class="admin__board-item">
        <b>$0.00</b>
        0 orders with coupon
      </div>
    </div>
    <div class="chart-bar">
      <Bar
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Bar } from 'vue-chartjs'

definePageMeta({
  layout: 'admin'
})

useHead({
  title: 'Dashboard'
})

const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#5793BF',
      data: [40, 20, 12, 50, 10],
    },
  ],
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})

console.log( encrypt( JSON.stringify({name: 'Max Globa', age: 33}) ) )
console.log( decrypt( {iv: '0cf61a466767bc1796c76a8724785d81', content: '8ffaac4a14d5f23e8cae157c0e3a01c4d5fb0db40d2abf82ccd1dea1ce'} ) )
</script>

<style lang="scss" scoped>
.chart-bar{
  height: 500px;
}
</style>