import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
  RouteLocationNormalized,
} from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'anime-search',
    component: () => import('@/views/AnimeSearch.vue'),
  },
  {
    path: '/recommendation',
    name: 'recommendation',
    component: () => import('@/views/Recommendation.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
