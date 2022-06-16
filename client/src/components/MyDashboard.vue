<script>
import Box from "./DashboardBox.vue";
export default {
  components: { Box },
  name: "Main",
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Dashboard</h1>
        <h4 class="font-bold">v1.0.0</h4>
      </div>

      <div class="grid text-white mt-10 px-10 grid-cols-3 gap-5">
        <Box name="CPU(MHz)" amount="35%" />
        <Box name="Memory" amount="852MB" />
        <Box name="SSD(Storage)" amount="7.13GB" />
        <Box name="Reverse Proxies" amount="10" />
        <Box name="Service Instances" amount="10" />
        <Box name="Databases" amount="10" />
      </div>
    </section>
  </main>
</template>
