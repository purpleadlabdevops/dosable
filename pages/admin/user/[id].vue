<template>
  <div class="page page__user">
    <h1>User - {{ route.params.id }} - {{ user[0].ID }}</h1>
    <div class="admin__row">
      <p>date: <b>{{ filterDate(user[0].created) }}</b></p>
      <p>
        orders:
        <nuxt-link
          v-for="(order, index) in JSON.parse(user[0].user_orders)"
          :to="`/admin/order/${order}`">
            <span v-if="index != 0">&nbsp;,&nbsp;&nbsp;</span>
            {{ order }}
        </nuxt-link>
      </p>
      <p>email: <b>{{ user[0].user_email }}</b></p>
      <p>phone: <b>{{ user[0].user_phone }}</b></p>
      <p>password: <b>{{ user[0].user_password }}</b></p>
      <p>name: <b>{{ user[0].user_name }}</b></p>
      <p>role: <b>{{ user[0].user_role }}</b></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'admin'
})

const route = useRoute()

const { data: user, refresh } = await useFetch(`/api/user/?id=${route.params.id}`)

const filterDate = time => new Date(Number(time)).toLocaleString('en', {month: '2-digit', day: '2-digit', year: 'numeric'})

const filterFormat = rangep => `$${rangep}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,')
</script>

<style lang="scss" scoped></style>