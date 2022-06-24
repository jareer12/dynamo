<script>
export default {
  methods: {
    load() {
      fetch(
        `${window.process.env.VITE_SERVER}/proxy/get?id=${this.$route.params.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.data = data.Data;
        });
    },
  },
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    this.load();
  },
  name: "Main",
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">
          Configure Proxy - {{ data.name }}
        </h1>
      </div>

      <div class="grid text-gray-300 mt-5 grid-cols-1">
        <div class="grid-cols-2 grid gap-3">
          <div>
            <div>Name</div>
            <input
              v-model="data.name"
              class="float-right bg-dark-300 p-3 border-dashed border-brew-500 w-full border-2"
              placeholder="my_reverse_proxy"
              type="text"
            />
          </div>
          <div>
            <div>Target</div>
            <input
              v-model="data.target"
              class="float-right bg-dark-300 p-3 border-dashed border-brew-500 w-full border-2"
              placeholder="sub.example.com"
              type="text"
            />
          </div>
          <div>
            <div>Target Port</div>
            <input
              v-model="data.targetPort"
              class="float-right bg-dark-300 p-3 border-dashed border-brew-500 w-full border-2"
              placeholder="2345"
              type="number"
            />
          </div>
          <div>
            <div>Host</div>
            <input
              v-model="data.host"
              class="float-right bg-dark-300 p-3 border-dashed border-brew-500 w-full border-2"
              placeholder="127.0.0.1"
              type="text"
            />
          </div>
          <div>
            <div>Port</div>
            <input
              v-model="data.port"
              class="float-right bg-dark-300 p-3 border-dashed border-brew-500 w-full border-2"
              placeholder="80"
              type="text"
            />
          </div>
          <div class="col-span-2 flex space-x-3">
            <button
              @click="update()"
              class="duration-300 bg-brew-500 hover:bg-brew-500 hover:shadow-brew-500/50 hover:shadow-md space-x-1 items-center flex px-12 py-3 text-white"
            >
              <span>Save</span>
            </button>
            <a
              href="/proxy"
              class="duration-300 bg-dark-300 hover:bg-brew-500 hover:shadow-brew-500/50 shadow-md space-x-1 items-center px-12 py-3 text-white"
            >
              <span>No, Thanks</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
