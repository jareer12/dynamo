<script>
export default {
  data() {
    return {
      Name: "",
      Port: "",
      Host: "",
      Target: "",
      TargetPort: "",
    };
  },
  methods: {
    create() {
      try {
        fetch(`${window.process.env.VITE_SERVER}/proxy/create`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: this.Name,
            port: this.Port,
            host: this.Host,
            target: this.Target,
            targetPort: this.TargetPort,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.Success === true) {
              window.location.href = "/proxy";
            }
          })
          .catch((err) => {});
      } catch {}
    },
  },
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Create New Storage</h1>
      </div>

      <div class="grid text-gray-300 mt-5 grid-cols-1">
        <div class="grid-cols-2 grid gap-3">
          <div>
            <div>Name</div>
            <input
              v-model="Name"
              class="float-right bg-dark-300 p-3 border-dashed border-brew-500 w-full border-2"
              placeholder="my_storage_cloud"
              type="text"
            />
          </div>
          <div>
            <div>Allocate Size(MBs)</div>
            <input
              v-model="Storage"
              class="float-right bg-dark-300 p-3 border-dashed border-brew-500 w-full border-2"
              :placeholder="`${1024 * 50}`"
              type="text"
            />
          </div>

          <div class="bg-dark-300 w-full col-span-2">
            <div class="bg-brew p-4" style="width: 45%"></div>
          </div>

          <div class="col-span-2 flex space-x-3">
            <button
              @click="create()"
              class="duration-300 bg-brew-500 hover:bg-brew-500 hover:shadow-brew-500/50 shadow-md space-x-1 items-center flex px-12 py-3 text-white"
            >
              <span>Done</span>
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
