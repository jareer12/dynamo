<script>
import Proxy from "./ProxyElement.vue";

export default {
  components: { Proxy },
  data() {
    return {};
  },
  name: "Main",
};
</script>

<template>
  <main class="w-auto border-l border-bray-400" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Reverse Proxy Manager</h1>
      </div>

      <div class="px-5 mt-10">
        <div class="grid-cols-4 grid gap-5">
          <Proxy name="Master" url="https://localhost:3000" :active="true" />
          <Proxy name="Master" url="https://localhost:3000" :active="false" />
          <Proxy name="Master" url="https://localhost:3000" :active="true" />
          <Proxy name="Master" url="https://localhost:3000" :active="true" />
          <Proxy name="Master" url="https://localhost:3000" :active="false" />
          <Proxy name="Master" url="https://localhost:3000" :active="true" />
          <Proxy name="Master" url="https://localhost:3000" :active="true" />
          <Proxy name="Master" url="https://localhost:3000" :active="false" />
          <Proxy name="Master" url="https://localhost:3000" :active="true" />
          <Proxy name="Master" url="https://localhost:3000" :active="true" />
          <Proxy name="Master" url="https://localhost:3000" :active="false" />
          <Proxy name="Master" url="https://localhost:3000" :active="false" />
          <Proxy name="Master" url="https://localhost:3000" :active="true" />
          <Proxy name="Master" url="https://localhost:3000" :active="true" />
        </div>
      </div>
    </section>
  </main>
</template>
