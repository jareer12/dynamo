<script>
export default {
  name: "Main",
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Storage CDN</h1>
      </div>

      <div class="text-white mt-10 px-10 grid-cols-3 grid gap-5">
        <div
          class="hover:scale-105 duration-300"
          v-for="item in [1, 1, 1, 1, 1, 1, 1, 1, 1]"
          :key="item"
        >
          <div class="hidden">
            {{ (number = Math.floor(Math.random() * 100)) }}
          </div>
          <div
            data-aos="zoom-out-right"
            class="focus:scale-105 bg-dark-300 rounded text-gray-400 cursor-pointer group px-4 py-3 transition-all duration-300"
          >
            <div class="grid grid-cols-2 items-center flex-wrap">
              <div>
                <h2 class="font-bold duration-300 group-hover:text-white">
                  CDN #{{ number }}
                </h2>
              </div>
              <div class="float-right">
                <h3 class="group-hover:text-white float-right">
                  {{ number }}/100 MB
                </h3>
              </div>
              <div class="col-span-2 mt-1 bg-dark-400 flex flex-wrap">
                <div
                  class="bg-royal-500 py-3 rounded"
                  :style="`width: ${number}%`"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
