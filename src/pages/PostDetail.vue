<template>
  <div class="detail">
    <div class="cards" style="grid-template-columns: 1fr">
      <article class="card" v-if="post">
        <div class="card__header">
          <h3 class="card__title">{{ post.title }}</h3>

          <p class="post-date">{{ post.date }}</p>

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

      <p v-else>投稿が見つかりませんでした。</p>
    </div>

    <div class="back-wrapper">
      <RouterLink to="/" class="back-button">戻る</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { posts } from "../data/posts";

const route = useRoute();

const post = computed(() => {
  const id = Number(route.params.id);
  return posts.find((p) => p.id === id);
});
</script>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-wrapper {
  margin-top: 24px;
  text-align: center;
}

.back-button {
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 20px;
  background: rgb(177, 47, 105);
  border-radius: 10px;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  transition: 0.2s;
  text-align: center;
}

.back-button:hover {
  background: #f9a4c8;
}

.post-date {
  font-size: 12px;
  color: #888;
  margin-bottom: 10px;
  text-align: center;
}
</style>