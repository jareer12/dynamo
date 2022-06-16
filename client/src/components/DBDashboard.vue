<script>
export default {
  name: "Main",
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-full p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Databases</h1>
      </div>

      <div class="grid text-gray-300 px-5 grid-cols-3 gap-5 mt-10">
        <div
          v-for="item in [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 452, 5, 234, 23, 4, 23, 42, 34,
            2, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          ]"
          :key="item"
          class="bg-dark-300 group hover:scale-105 duration-300 hover:bg-royal cursor-pointer p-3 rounded grid grid-cols-2 space-x-3"
        >
          <div>
            <h2 class="font-bold group-hover:text-white">My Database</h2>
            <h4 class="text-gray-400 group-hover:text-white">v8.0.0</h4>
          </div>
          <div class="float-right">
            <img
              src="https://pngimg.com/uploads/mysql/mysql_PNG29.png"
              class="float-right h-16 w-16 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
