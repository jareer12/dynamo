<script>
import Toggle from "@vueform/toggle";

export default {
  components: {
    Toggle,
  },

  name: "Main",
  data() {
    return {
      value: true,
    };
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
        <div class="text-gray-300">
          <div class="grid grid-cols-1">
            <div data-aos="fade-down">
              <h1 class="text-2xl font-black text-gray-400">Members</h1>
            </div>
            <section class="mt-5 space-y-2 font-semibold px-2">
              <div class="items-center grid-cols-2 grid">
                <div>
                  <h2>
                    Manage
                    <span class="text-amethyst-400">Services</span>
                  </h2>
                </div>
                <div>
                  <Toggle class="float-right" v-model="value" />
                </div>
              </div>
              <div class="items-center grid-cols-2 grid">
                <div>
                  <h2>
                    Manage
                    <span class="text-amethyst-400">Reverse Proxies</span>
                  </h2>
                </div>
                <div>
                  <Toggle class="float-right" v-model="value" />
                </div>
              </div>

              <div class="items-center grid-cols-2 grid">
                <div>
                  <h2>
                    Manage <span class="text-amethyst-400">Databases</span>
                  </h2>
                </div>
                <div>
                  <Toggle class="float-right" v-model="value" />
                </div>
              </div>
              <div class="items-center grid-cols-2 grid">
                <div>
                  <h2>
                    Manage <span class="text-amethyst-400">Applications</span>
                  </h2>
                </div>
                <div>
                  <Toggle class="float-right" v-model="value" />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="grid grid-cols-1 mt-3">
          <div data-aos="fade-down">
            <h1 class="text-2xl font-black text-gray-400">Manager</h1>
          </div>
          <section class="mt-5 space-y-2 font-semibold px-2">
            <div class="items-center grid-cols-2 grid">
              <div>
                <h2>
                  Manage
                  <span class="text-emerald-400">Services</span>
                </h2>
              </div>
              <div>
                <Toggle class="float-right" v-model="value" />
              </div>
            </div>
            <div class="items-center grid-cols-2 grid">
              <div>
                <h2>
                  Manage
                  <span class="text-emerald-400">Reverse Proxies</span>
                </h2>
              </div>
              <div>
                <Toggle class="float-right" v-model="value" />
              </div>
            </div>

            <div class="items-center grid-cols-2 grid">
              <div>
                <h2>Manage <span class="text-emerald-400">Databases</span></h2>
              </div>
              <div>
                <Toggle class="float-right" v-model="value" />
              </div>
            </div>
            <div class="items-center grid-cols-2 grid">
              <div>
                <h2>
                  Manage <span class="text-emerald-400">Applications</span>
                </h2>
              </div>
              <div>
                <Toggle class="float-right" v-model="value" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>
<style src="@vueform/toggle/themes/default.css"></style>
<style lang="css">
:root {
  --toggle-bg-on: #a14ad4;
  --toggle-border-on: #a14ad4;
}
</style>
