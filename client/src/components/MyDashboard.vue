<script>
import Box from "./DashboardBox.vue";
export default {
  methods: {
    checkBackend() {
      try {
        fetch(`${window.process.env.VITE_SERVER}/info`)
          .then((res) => res.json())
          .then((data) => {
            if (data.Success === true) {
              this.server = data.Data;
              this.isServerWorking = true;
            }
          })
          .catch((err) => {
            this.isServerWorking = false;
          });
      } catch {
        this.isServerWorking = false;
      }
    },
  },
  data() {
    return {
      Uptime(ms) {
        return this.getTime(ms);
      },
      getTime(ms) {
        if (!Number.isInteger(ms)) {
          return null;
        }
        /**
         * Takes as many whole units from the time pool (ms) as possible
         * @param {int} msUnit - Size of a single unit in milliseconds
         * @return {int} Number of units taken from the time pool
         */
        const allocate = (msUnit) => {
          const units = Math.trunc(ms / msUnit);
          ms -= units * msUnit;
          return units;
        };
        // Property order is important here.
        // These arguments are the respective units in ms.
        return {
          // weeks: allocate(604800000), // Uncomment for weeks
          days: allocate(86400000),
          hours: allocate(3600000),
          minutes: allocate(60000),
          seconds: allocate(1000),
          ms: ms, // remainder
        };
      },
      server: {
        Uptime: 1,
        Memory: {},
        CPU: [],
      },
      isServerWorking: false,
    };
  },
  components: { Box },
  name: "Main",
  mounted() {
    this.checkBackend();
    setInterval(() => {
      this.checkBackend();
    }, 1 * 1024);
  },
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Dashboard</h1>
        <a
          href="https://github.com/jareer12/dynamo"
          target="_blank"
          class="font-bold"
          >v1.0.0</a
        >
      </div>

      <div class="text-white mt-10 px-10" data-aos="fade-down">
        <div class="grid-cols-3 gap-6 grid">
          <Box name="CPU(MHz)" class="c" :amount="server.CPU.length" />
          <Box
            name="Memory"
            :amount="`${parseInt(
              server.Memory.used / 1000 / 1000
            )} of ${parseInt(server.Memory.total / 1000 / 1000)}MBs`"
          />
          <Box
            name="Uptime(OS)"
            :amount="`${Uptime(server.Uptime * 1000).days}:${
              Uptime(server.Uptime * 1000).hours
            }:${Uptime(server.Uptime * 1000).minutes}:${
              Uptime(server.Uptime * 1000).seconds
            }`"
          />
          <div
            :class="`p-4 col-span-3 ${
              isServerWorking ? `bg-green-500` : `bg-red-500`
            }  w-full`"
          >
            <div class="font-bold text-white">
              <h2 class="">Server Status</h2>
              <p>{{ isServerWorking ? "200 - Okay" : "500 - Dead" }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
