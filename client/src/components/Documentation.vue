<script>
import Prism from "prismjs";
import "@/assets/css/prism.css";
import Box from "./DashboardBox.vue";
import "prismjs/components/prism-bash";

export default {
  components: { Box },
  name: "Main",
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<template>
  <main class="w-auto " data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">API Documentations</h1>
        <h4 class="font-bold">v1.0.0</h4>
      </div>

      <div class="grid text-white mt-5 grid-cols-1">
        <pre><code class="language-bash">echo 'hi'</code></pre>
      </div>
    </section>
  </main>
</template>
