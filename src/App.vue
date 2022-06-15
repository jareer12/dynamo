<script setup>
import { RouterView } from "vue-router";
import MySidebar from "@/components/MySidebar.vue";
</script>

<style>
@import "./assets/css/tailwinds.css";
@import "./assets/css/index.css";
</style>

<template>
  <main class="flex text-sm flex-wrap">
    <div class="sidebar-width flex flex-wrap">
      <div class="h-screen">
        <MySidebar />
      </div>
    </div>
    <div class="mainframe-width overflow-auto">
      <RouterView />
    </div>
  </main>
</template>
