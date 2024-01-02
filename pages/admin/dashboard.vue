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
definePageMeta({
  layout: 'admin'
})

useHead({
  title: 'Dashboard'
})

import { Bar } from 'vue-chartjs'
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
</script>

<style lang="scss" scoped>
.chart-bar{
  height: 500px;
}
</style>