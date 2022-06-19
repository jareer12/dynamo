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
        fetch(`${import.meta.env.VITE_SERVER}/proxy/create`, {
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
        <h1 class="text-3xl font-black text-gray-400">Create Reverse Proxy</h1>
      </div>

      <div class="grid text-gray-300 mt-5 grid-cols-1">
        <div class="grid-cols-2 grid gap-3">
          <div>
            <div>Name</div>
            <input
              v-model="Name"
              class="float-right rounded bg-dark-300 p-3 border-dashed border-green-500 w-full border-2"
              placeholder="my_reverse_proxy"
              type="text"
            />
          </div>
          <div>
            <div>Target</div>
            <input
              v-model="Target"
              class="float-right rounded bg-dark-300 p-3 border-dashed border-green-500 w-full border-2"
              placeholder="sub.example.com"
              type="text"
            />
          </div>
          <div>
            <div>Target Port</div>
            <input
              v-model="TargetPort"
              class="float-right rounded bg-dark-300 p-3 border-dashed border-green-500 w-full border-2"
              placeholder="2345"
              type="number"
            />
          </div>
          <div>
            <div>Host</div>
            <input
              v-model="Host"
              class="float-right rounded bg-dark-300 p-3 border-dashed border-green-500 w-full border-2"
              placeholder="127.0.0.1"
              type="text"
            />
          </div>
          <div>
            <div>Port</div>
            <input
              v-model="Port"
              class="float-right rounded bg-dark-300 p-3 border-dashed border-green-500 w-full border-2"
              placeholder="80"
              type="text"
            />
          </div>
          <div class="col-span-2 flex space-x-3">
            <button
              @click="create()"
              class="duration-300 bg-green-500 hover:bg-green-500 hover:shadow-green-500/50 shadow-md space-x-1 items-center flex px-12 py-3 rounded text-white"
            >
              <span>Done</span>
            </button>
            <a
              href="/proxy"
              class="duration-300 bg-dark-300 hover:bg-green-500 hover:shadow-green-500/50 shadow-md space-x-1 items-center px-12 py-3 rounded text-white"
            >
              <span>No, Thanks</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
