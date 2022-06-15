<script>
export default {
  name: "Main",
};
</script>

<template>
  <main class="w-auto border-l border-bray-400" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">File Explorer</h1>
      </div>

      <div class="text-white mt-10 px-10">
        <div>
          <button
            class="duration-300 bg-dark-300 hover:bg-brew hover:shadow-brew-500/50 shadow-md space-x-1 items-center flex px-12 py-3 rounded text-white"
          >
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <span>Upload</span>
          </button>
        </div>

        <div
          data-aos="fade-in"
          class="bg-dark-300 border-b-2 border-dark-400 mt-3 cursor-pointer group px-4 py-3 transition-all duration-300"
        >
          <div class="grid grid-cols-3 items-center">
            <div>
              <h2 class="font-bold duration-300">Name</h2>
            </div>
            <div>
              <h3 class="">Size</h3>
            </div>
            <div>
              <h3 class="">Date</h3>
            </div>
          </div>
        </div>
        <div
          v-for="item in [1, 1, 1, 1, 1, 1, 1, 1, 1]"
          data-aos="zoom-out-right"
          :key="item"
          class="focus:scale-105 bg-dark-300 text-gray-400 hover:bg-brew cursor-pointer group px-4 py-3 transition-all duration-300"
        >
          <div class="grid grid-cols-3 items-center flex-wrap">
            <div>
              <h2 class="font-bold duration-300 group-hover:text-white">
                Requests
              </h2>
            </div>
            <div>
              <h3 class="group-hover:text-white">1,000</h3>
            </div>
            <div>
              <h3 class="group-hover:text-white">
                {{ new Date().toDateString() }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
