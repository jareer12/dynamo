import { createRouter, createWebHistory } from "vue-router";

import docs from "../views/APIs.vue";
import home from "../views/HomeView.vue";
import storage from "../views/Storage.vue";
import explorer from "../views/Explorer.vue";
import proxy from "../views/ReverseProxy.vue";
import databases from "../views/Databases.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: home,
    },
    {
      path: "/explorer",
      component: explorer,
    },
    {
      path: "/proxy",
      component: proxy,
    },
    {
      path: "/apis",
      component: docs,
    },
    {
      path: "/databases",
      component: databases,
    },
    {
      path: "/storage",
      component: storage,
    },
  ],
});

export default router;
