<template>
  <div class="page page__users">
    <h1>Users</h1>
    <div class="admin__list admin__list-users">
      <div class="admin__item admin__item-head">
        <div class="admin__item-id">ID</div>
        <div class="admin__item-name">name</div>
        <div class="admin__item-order">orders</div>
        <div class="admin__item-email">email</div>
        <div class="admin__item-phone">phone</div>
      </div>
      <div class="admin__item" v-for="user in users" @click.prevent="router.push(`/admin/user/${user.ID}`)">
        <div class="admin__item-id">{{ user.ID }}</div>
        <div class="admin__item-name">{{ user.user_name }}</div>
        <div class="admin__item-order">
          <nuxt-link v-for="order in JSON.parse(user.user_orders)" :to="`/admin/dashboard/order/${order}`">{{ order }}</nuxt-link>
        </div>
        <div class="admin__item-email">{{ user.user_email }}</div>
        <div class="admin__item-phone">{{ user.user_phone }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'admin'
})

useHead({
  title: 'Users'
})

const { data: users, refresh } = await useFetch(`/api/users`)

const router = useRouter()
</script>

<style lang="scss" scoped></style>