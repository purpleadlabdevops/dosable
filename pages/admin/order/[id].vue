<template>
  <div class="page page__order">
    <h1>Order {{ $route.params.id }}</h1>
    <div class="admin__row">
      <p>date: <b>{{ filterDate(order[0].created) }}</b></p>
      <p>campaign: <b>{{ order[0].campaignId }}</b></p>
    </div>
    <div class="admin__row">
      <h4>Quiz data:</h4>
      <div class="admin__row-item" v-for="item in JSON.parse(order[0].quizData)">
        {{ item.question }} <br>
        <b v-if="typeof item.value === 'string'">- {{ item.value }}</b>
        <div v-else-if="typeof item.value === 'object'">
          <b v-for="ans in item.value">- {{ ans }} <br></b>
        </div>
      </div>
    </div>
    <div class="admin__row">
      <h4>Quiz data:</h4>
      <table class="admin__table" v-if="winWidth > 992">
        <thead>
          <tr>
            <th>question</th>
            <th>answer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in JSON.parse(order[0].quizData)">
            <td>{{ item.question }}</td>
            <td>
              <b v-if="typeof item.value === 'string'">- {{ item.value }}</b>
              <span v-else-if="typeof item.value === 'object'">
                <b v-for="ans in item.value">- {{ ans }} <br></b>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <div class="admin__row-item" v-for="item in JSON.parse(order[0].quizData)">
          {{ item.question }} <br>
          <b v-if="typeof item.value === 'string'">- {{ item.value }}</b>
          <div v-else-if="typeof item.value === 'object'">
            <b v-for="ans in item.value">- {{ ans }} <br></b>
          </div>
        </div>
      </div>
    </div>
    <div class="admin__row">
      <h4>Start quiz data:</h4>
      <table class="admin__table" v-if="winWidth > 992">
        <thead>
          <tr>
            <th>question</th>
            <th>answer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in JSON.parse(order[0].startData)">
            <td>{{ item.question }}</td>
            <td>
              <b v-if="typeof item.value === 'string'">- {{ item.value }}</b>
              <span v-else-if="typeof item.value === 'object'">
                <b v-for="ans in item.value">- {{ ans }} <br></b>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <div class="admin__row-item" v-for="item in JSON.parse(order[0].startData)">
          {{ item.question }} <br>
          <b v-if="typeof item.value === 'string'">- {{ item.value }}</b>
          <div v-else-if="typeof item.value === 'object'">
            <b v-for="ans in item.value">- {{ ans }} <br></b>
          </div>
        </div>
      </div>
    </div>
    <div class="admin__row admin__row-flex">
      <div class="admin__row-item">
        <h4>Shipping:</h4>
        <div>
          {{ JSON.parse(order[0].shipping).firstName }} {{ JSON.parse(order[0].shipping).lastName }}, <br>
          {{ JSON.parse(order[0].shipping).email }}, <br>
          {{ JSON.parse(order[0].shipping).phone }}, <br>
          {{ JSON.parse(order[0].shipping).address }} {{ JSON.parse(order[0].shipping).apartment.lenght > 0 ? `, ` + JSON.parse(order[0].shipping).apartment + `apt.` : '' }}, <br>
          {{ JSON.parse(order[0].shipping).city }}, {{ JSON.parse(order[0].shipping).state }}, {{ JSON.parse(order[0].shipping).zip }}
        </div>
      </div>
      <div class="admin__row-item">
        <h4>Billing:</h4>
        <div>
          {{ JSON.parse(order[0].billing).firstName }} {{ JSON.parse(order[0].billing).lastName }}, <br>
          {{ JSON.parse(order[0].billing).email }}, <br>
          {{ JSON.parse(order[0].billing).phone }}, <br>
          {{ JSON.parse(order[0].billing).address }} {{ JSON.parse(order[0].billing).apartment.lenght > 0 ? `, ` + JSON.parse(order[0].billing).apartment + `apt.` : '' }}, <br>
          {{ JSON.parse(order[0].billing).city }}, {{ JSON.parse(order[0].billing).state }}, {{ JSON.parse(order[0].billing).zip }}
        </div>
      </div>
    </div>
    <div class="admin__row admin__row-flex">
      <div class="admin__row-item">
        <h4>Cart and Total:</h4>
        <div>Coming soon...</div>
      </div>
    </div>
<!--     <div class="admin__row">{{ order[0].paymentData }}</div> -->
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'admin'
})
const route = useRoute()

const { data: order, refresh } = await useFetch(`/api/order/?orderId=${route.params.id}`)

const filterDate = time => new Date(Number(time)).toLocaleString('en', {month: '2-digit', day: '2-digit', year: 'numeric'})
const filterFormat = rangep => `$${rangep}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,')

const winWidth = ref(1200)

onMounted(() => {
  winWidth.value = window.innerWidth
  window.addEventListener('resize', () => {
    winWidth.value = window.innerWidth
  })
})
</script>

<style lang="scss" scoped>
.page__order{
  h4{
    margin-bottom: .5rem;
  }
}
</style>