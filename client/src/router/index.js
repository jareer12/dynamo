import { createRouter, createWebHistory } from "vue-router";

import docs from "../views/APIs.vue";
import home from "../views/HomeView.vue";
import storage from "../views/Storage.vue";
import proxy from "../views/ReverseProxy.vue";
import databases from "../views/Databases.vue";

import proxynew from "../views/NewProxy.vue";
import proxyconfig from "../views/ConfigProxy.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: home,
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
    {
      path: "/proxy/new",
      component: proxynew,
    },
    {
      path: "/proxy/:id",
      component: proxyconfig,
    },
  ],
});

export default router;
