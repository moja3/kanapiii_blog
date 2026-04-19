<template>
  <RouterLink :to="`/posts/${item.id}`" class="card-link">
    <article class="card">
      <div class="card__header">
        <h3 class="card__title">{{ item.title }}</h3>
        <figure class="card__thumbnail">
          <img :src="item.imageSrc" :alt="item.imageAlt" class="card__image" />
        </figure>
      </div>
    </article>
  </RouterLink>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card-link {
  display: block;
  color: inherit;
  text-decoration: none;
}
</style>