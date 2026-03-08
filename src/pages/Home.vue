<template>
  <div class="cards">
    <CardItem v-for="p in posts" :key="p.id" :item="p" />
  </div>
</template>

<script setup>
import CardItem from "../components/CardItem.vue";
import { posts } from "../data/posts";
</script>
