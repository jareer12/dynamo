import { createRouter, createWebHistory } from "vue-router";

import docs from "../views/APIs.vue";
import home from "../views/HomeView.vue";
import storage from "../views/Storage.vue";
import services from "../views/Services.vue";
import proxy from "../views/ReverseProxy.vue";
import settings from "../views/Settings.vue";
import databases from "../views/Databases.vue";
import applications from "../views/Applications.vue";

import proxynew from "../views/NewProxy.vue";
import storagenew from "../views/NewStorage.vue";
import servicesnew from "../views/NewService.vue";
import proxyconfig from "../views/ConfigProxy.vue";
import applicationnew from "../views/NewApplication.vue";

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
      path: "/settings",
      component: settings,
    },
    {
      path: "/storage",
      component: storage,
    },
    {
      path: "/services",
      component: services,
    },
    {
      path: "/applications",
      component: applications,
    },
    {
      path: "/proxy/new",
      component: proxynew,
    },
    {
      path: "/storage/new",
      component: storagenew,
    },
    {
      path: "/services/new",
      component: servicesnew,
    },
    {
      path: "/applications/new",
      component: applicationnew,
    },
    {
      path: "/proxy/:id",
      component: proxyconfig,
    },
  ],
});

export default router;
