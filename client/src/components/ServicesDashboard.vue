<script>
export default {
  name: "Main",
  data() {
    return {
      services: [
        {
          name: "Master DB Dashboard",
          slug: "phpMyAdmin",
          version: "v5.3.6",
        },
      ],
    };
  },
  mounted() {
    try {
      fetch(`${window.process.env.VITE_SERVER}/storage/clouds`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Success === true) {
            this.services = data.Data;
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
        <h1 class="text-3xl font-black text-gray-400">Services</h1>
      </div>

      <div class="grid text-gray-300 mt-5 grid-cols-1">
        <div class="grid grid-cols-3 gap-5 p-5">
          <div v-for="service in services" :key="service" data-aos="zoom-in">
            <div
              class="bg-dark-300 p-4 space-x-5 group duration-300 hover:scale-105 hover:bg-royal flex flex-wrap"
            >
              <div class="w-24 h-24 flex items-center">
                <img
                  class="object-cover"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/PhpMyAdmin_logo.png"
                />
              </div>
              <div class="space-x-3 space-y-3">
                <div>
                  <h2 class="font-bold group-hover:text-white">
                    {{ service.name }}
                  </h2>
                </div>
                <div class="font-bold text-gray-400 group-hover:text-white">
                  <h4 class="">{{ service.slug }}</h4>
                  <h4 class="">{{ service.version }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-wrap flex col-span-4" data-aos="fade-down">
        <a
          href="/services/new"
          class="flex flex-wrap text-center py-5 hover:bg-royal w-full hover:text-white duration-300 cursor-pointer justify-center items-center text-3xl bg-dark-300"
        >
          <i class="fa-solid fa-plus"></i>
        </a>
      </div>
    </section>
  </main>
</template>
