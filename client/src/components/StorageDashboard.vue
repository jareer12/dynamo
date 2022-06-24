<script>
export default {
  name: "Main",
  data() {
    return {
      clouds: [],
    };
  },
  mounted() {
    try {
      fetch(`${window.process.env.VITE_SERVER}/storage/clouds`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Success === true) {
            this.clouds = data.Data;
          }
        })
        .catch((err) => {});
    } catch {}
  },
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Storage CDN</h1>
      </div>

      <div class="text-white mt-10 px-10 grid-cols-3 grid gap-5">
        <a
          :href="`/storage/${item.id}`"
          class="hover:scale-105 duration-300"
          v-for="item in clouds"
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
                <h2
                  class="capitalize font-bold duration-300 group-hover:text-white"
                >
                  {{ item.name }}
                </h2>
              </div>
              <div class="float-right">
                <h3 class="group-hover:text-white float-right">
                  {{ new Date(item.created).toLocaleDateString() }}
                </h3>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="flex-wrap flex col-span-4" data-aos="fade-down">
        <a
          href="/storage/new"
          class="flex flex-wrap text-center py-5 hover:bg-royal w-full hover:text-white duration-300 rounded cursor-pointer justify-center items-center text-3xl bg-dark-300"
        >
          <i class="fa-solid fa-plus"></i>
        </a>
      </div>
    </section>
  </main>
</template>
