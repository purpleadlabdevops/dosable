<template>
  <div class="page page__orders">
    <h1>Orders</h1>
    <div class="admin__list admin__list-orders">
      <div class="admin__item admin__item-head">
        <div class="admin__item-id">id</div>
        <div class="admin__item-order">order</div>
        <div class="admin__item-email">email</div>
        <div class="admin__item-phone">phone</div>
        <div class="admin__item-name">name</div>
      </div>
      <div class="admin__item" v-for="order in orders" @click.prevent="router.push(`/admin/order/${order.orderId}`)">
        <div class="admin__item-id">{{ order.ID }}</div>
        <div class="admin__item-order">{{ order.orderId }}</div>
        <div class="admin__item-email">{{ JSON.parse(order.billing).email }}</div>
        <div class="admin__item-phone">{{ JSON.parse(order.billing).phone }}</div> <!-- need change to amount from Konnektive -->
        <div class="admin__item-name">{{ JSON.parse(order.billing).firstName }} {{ JSON.parse(order.billing).lastName }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'admin'
})

useHead({
  title: 'Orders'
})

const { data: orders, refresh } = await useFetch(`/api/orders`)

const router = useRouter()
</script>

<style lang="scss" scoped></style>