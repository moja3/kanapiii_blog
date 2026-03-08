<template>
  <article class="card" role="button" tabindex="0" @click="go">
    <div class="card__header">
      <h3 class="card__title">{{ item.title }}</h3>
      <figure class="card__thumbnail">
        <img :src="item.imageSrc" :alt="item.imageAlt" class="card__image" />
      </figure>
    </div>
    <div class="card__body">
      <p class="card__text">{{ item.text }}</p>
    </div>
  </article>
</template>

<script setup>
import { useRouter } from "vue-router";
const props = defineProps({ item: Object });
const router = useRouter();
const go = () => router.push(`/posts/${props.item.id}`);
</script>
