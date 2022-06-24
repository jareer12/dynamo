<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  mounted() {
    try {
    } catch {}
  },
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Settings</h1>
      </div>

      <div class="p-5">
        <div class="grid text-gray-300 grid-cols-1">
          <div class="grid grid-cols-1 gap-5">
            <div class="grid-cols-2 grid">
              <div></div>
              <div>
                <ToggleButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
