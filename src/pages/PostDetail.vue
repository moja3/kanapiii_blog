<template>
  <div class="cards" style="grid-template-columns: 1fr">
    <article class="card" v-if="post">
      <div class="card__header">
        <h3 class="card__title">{{ post.title }}</h3>
        <figure class="card__thumbnail">
          <img
            :src="post.imageSrc"
            :alt="post.imageAlt"
            class="card__image"
            style="height: 360px"
          />
        </figure>
      </div>
      <div class="card__body">
        <p class="card__text" style="font-size: 1rem">{{ post.text }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { posts } from "../data/posts";

const route = useRoute();
const id = Number(route.params.id);
const post = posts.find((p) => p.id === id);
</script>
