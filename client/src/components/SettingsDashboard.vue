<script>
import Toggle from "./ToggleButton.vue";

export default {
  name: "Main",
  components: {
    Toggle,
  },
  methods: {
    load() {
      try {
        fetch(`${window.process.env.VITE_SERVER}/settings/all`)
          .then((res) => res.json())
          .then((data) => {
            if (data.Success === true) {
              this.config = data.Data;
            }
          })
          .catch((err) => {});
      } catch {}
    },
  },
  data() {
    return {
      value: true,
      config: { members: {} },
    };
  },
  mounted() {
    this.load();
  },
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">Settings</h1>
      </div>

      <div class="p-5" data-aos="fade-right">
        <div class="text-gray-300">
          <div class="grid grid-cols-1">
            <div>
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
                  <Toggle
                    class="float-right"
                    :value="config.members.manage_services"
                  />
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
                  <Toggle
                    class="float-right"
                    :value="config.members.manage_proxy"
                  />
                </div>
              </div>

              <div class="items-center grid-cols-2 grid">
                <div>
                  <h2>
                    Manage <span class="text-amethyst-400">Databases</span>
                  </h2>
                </div>
                <div>
                  <Toggle
                    class="float-right"
                    :value="config.members.manage_db"
                  />
                </div>
              </div>
              <div class="items-center grid-cols-2 grid">
                <div>
                  <h2>
                    Manage <span class="text-amethyst-400">Applications</span>
                  </h2>
                </div>
                <div>
                  <Toggle
                    class="float-right"
                    :value="config.members.manage_apps"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="grid grid-cols-1 mt-8">
          <div>
            <h1 class="text-2xl font-black text-gray-400">Manager</h1>
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
                <h2>Manage <span class="text-amethyst-400">Databases</span></h2>
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
        <div class="grid grid-cols-1 mt-8">
          <div>
            <h1 class="text-2xl font-black text-gray-400">Administrator</h1>
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
                <h2>Manage <span class="text-amethyst-400">Databases</span></h2>
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
    </section>
  </main>
</template>
