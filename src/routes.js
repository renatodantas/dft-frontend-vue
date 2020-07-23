import { createRouter, createWebHistory } from 'vue-router';

const history = createWebHistory();
const routes = [
  {
    path: '/',
    component: () => import('./components/Home.vue'),
  },
  {
    path: '/categorias',
    component: () => import('./components/categoria-servico/CategoriaList.vue'),
  },
];

export const router = createRouter({ history, routes });
