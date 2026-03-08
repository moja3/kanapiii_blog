import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PostDetail from '../pages/PostDetail.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/posts/:id', component: PostDetail },
  ],
})