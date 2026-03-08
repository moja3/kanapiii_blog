<template>
  <header class="header">
    <h2>kanapiii</h2>
  </header>
  <div class="cards">
    <CardItem v-for="p in posts" :key="p.id" :item="p" />
  </div>

  <footer class="footer">
    <p>© 2026 kanapiii</p>
  </footer>
</template>

<script setup>
import CardItem from "../components/CardItem.vue";
import { posts } from "../data/posts";
</script>
