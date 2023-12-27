<template>
  <img :src="images[format][name]" />
</template>

<script setup>
import { filename } from 'pathe/utils';

const props = defineProps({
  format: String,
  name: String
})

const images = {}

const jpeg = import.meta.glob('~/assets/img/*.jpeg', { eager: true })
images.jpeg = Object.fromEntries(
  Object.entries(jpeg).map(([key, value]) => [filename(key), value.default])
)

const jpg = import.meta.glob('~/assets/img/*.jpg', { eager: true })
images.jpg = Object.fromEntries(
  Object.entries(jpg).map(([key, value]) => [filename(key), value.default])
)

const png = import.meta.glob('~/assets/img/*.png', { eager: true })
images.png = Object.fromEntries(
  Object.entries(png).map(([key, value]) => [filename(key), value.default])
)

const webp = import.meta.glob('~/assets/img/*.webp', { eager: true })
images.webp = Object.fromEntries(
  Object.entries(webp).map(([key, value]) => [filename(key), value.default])
)
</script>