<script>
import Proxy from "./ProxyElement.vue";

export default {
  components: { Proxy },
  methods: {
    loadProxies() {
      try {
        fetch(`${window.process.env.VITE_SERVER}/proxy/all`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.Success === true) {
              this.datas = data.Data;
            }
          })
          .catch((err) => {});
      } catch {}
    },
  },
  data() {
    return {
      datas: [],
    };
  },
  mounted() {
    this.loadProxies();
  },
  name: "Main",
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Reverse Proxy Manager</h1>
      </div>

      <div class="px-5 mt-10">
        <div class="grid-cols-4 grid gap-5">
          <Proxy
            v-for="proxy in datas"
            :url="`http://${proxy.target}:${proxy.port}`"
            :name="proxy.name"
            :active="true"
            :id="proxy.id"
            :key="proxy"
          />
          <div class="flex-wrap flex col-span-4" data-aos="fade-down">
            <a
              href="/proxy/new"
              class="flex flex-wrap text-center py-5 hover:bg-green-500 w-full hover:text-white duration-300 rounded cursor-pointer justify-center items-center text-3xl bg-dark-300"
            >
              <i class="fa-solid fa-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
