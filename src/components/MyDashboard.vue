<script>
export default {
  name: "Main",
};
</script>

<template>
  <main class="w-auto border-l border-bray-400" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Dashboard</h1>
        <h4 class="font-bold">v1.0.0</h4>
      </div>

      <div class="grid text-white mt-10 px-10 grid-cols-3 gap-5">
        <div
          v-for="item in [1, 1, 1, 1, 1, 1]"
          data-aos="zoom-in"
          :key="item"
          class="bg-dark-300 hover:scale-105 hover:bg-brew cursor-pointer group p-4 rounded transition-all duration-300"
        >
          <h2
            class="font-bold duration-300 group-hover:text-white text-gray-400"
          >
            Requests
          </h2>
          <h3 class="">1,000</h3>
        </div>
      </div>
    </section>
  </main>
</template>
