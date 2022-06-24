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
              class="float-right bg-dark-300 p-3 border-dashed border-royal-500 w-full border-2"
              placeholder="MySQL Dashboard"
              type="text"
            />
          </div>
          <div>
            <div>Port</div>
            <input
              v-model="Name"
              class="float-right bg-dark-300 p-3 border-dashed border-royal-500 w-full border-2"
              placeholder="28654"
              type="number"
            />
          </div>
          <div>
            <div>Select Service</div>
            <select
              class="w-full bg-dark-300 p-3 border-dashed border-2 border-royal-500"
            >
              <option value="">phpMyAdmin</option>
            </select>
          </div>

          <div class="col-span-2 flex space-x-3">
            <button
              @click="create()"
              class="duration-300 bg-royal-500 hover:bg-royal-500 hover:shadow-royal-500/50 shadow-md space-x-1 items-center flex px-12 py-3 text-white"
            >
              <span>Done</span>
            </button>
            <a
              href="/proxy"
              class="duration-300 bg-dark-300 hover:bg-royal-500 hover:shadow-royal-500/50 shadow-md space-x-1 items-center px-12 py-3 text-white"
            >
              <span>No, Thanks</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
