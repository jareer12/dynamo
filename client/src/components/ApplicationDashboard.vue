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
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Applications</h1>
      </div>

      <div class="grid text-gray-300 mt-5 grid-cols-1">
        <div class="grid grid-cols-3 gap-5 p-5">
          <div v-for="item in [1, 1, 1, 1, 1, 1, 1, 1, 1]" :key="item">
            <div class="bg-dark-300 p-4 space-x-5 flex flex-wrap">
              <div class="w-24">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                />
              </div>
              <div class="space-x-3 space-y-3">
                <div>
                  <h2 class="font-bold">My Portfolio</h2>
                </div>
                <div>
                  <h2 class="font-bold text-gray-400">Node.js</h2>
                  <h4 class="text-gray-400">v16.3.1</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-wrap flex col-span-3" data-aos="fade-down">
            <a
              href="/applications/new"
              class="flex flex-wrap text-center py-5 hover:bg-royal-500 w-full hover:text-white duration-300 cursor-pointer justify-center items-center text-3xl bg-dark-300"
            >
              <i class="fa-solid fa-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
