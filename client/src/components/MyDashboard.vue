<script>
import Box from "./DashboardBox.vue";
export default {
  data() {
    return {
      isServerWorking: false,
    };
  },
  components: { Box },
  name: "Main",
  mounted() {
    try {
      setInterval(() => {
        fetch(import.meta.env.VITE_SERVER)
          .then((res) => res.json())
          .then((data) => {
            if (data.Success === true) {
              this.isServerWorking = true;
            }
          })
          .catch((err) => {
            this.isServerWorking = false;
          });
      }, 2500);
    } catch {
      this.isServerWorking = false;
    }
  },
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Dashboard</h1>
        <h4 class="font-bold">v1.0.0</h4>
      </div>

      <div class="text-white mt-10 px-10" data-aos="fade-down">
        <div class="grid-cols-3 gap-5 grid">
          <Box name="CPU(MHz)" class="col-span-2" amount="35%" />
          <Box name="Memory" amount="852MB" />
          <Box name="SSD(Storage)" amount="7.13GB" />
          <Box name="Reverse Proxies" amount="10" />
          <Box name="Service Instances" amount="10" />
          <Box name="More Info" amount="10" />
          <Box name="Databases" class="col-span-2" amount="10" />
        </div>
        <div
          :class="`p-4 ${
            isServerWorking ? `bg-green-500` : `bg-red-500`
          } rounded w-full mt-3`"
        >
          <div class="text-lg font-bold text-white">
            <h2>
              Backend Server Status - {{ isServerWorking ? "Okay" : "Dead" }}
            </h2>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
