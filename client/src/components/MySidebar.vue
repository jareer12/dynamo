<script>
import Nav from "./SidebarElement.vue";

export default {
  name: "Main",
  components: { Nav },
};
</script>

<template>
  <main class="flex-wrap w-auto flex">
    <div class="h-full w-auto border-r border-bray-400">
      <section class="h-screen px-1 bg-dark-400 text-bray-200">
        <div class="">
          <div class="py-1 space-y-1 border-b border-bray-400">
            <Nav
              name="Home"
              path="/"
              icon="fa-solid fa-house"
              theme="emerald"
            ></Nav>
          </div>
        </div>

        <div class="">
          <div class="py-1 space-y-1 border-b border-bray-400">
            <Nav
              name="Proxy"
              path="/proxy"
              icon="fa-solid fa-ghost"
              theme="brew"
            ></Nav>
            <Nav
              name="Storage Clouds"
              path="/storage"
              icon="fa-solid fa-cloud"
              theme="brew"
            ></Nav>
            <!-- <Nav
            name="Docker"
            path="/docker"
            icon="fa-brands fa-docker"
            theme="brew"
          ></Nav> -->
          </div>
        </div>

        <div class="space-y-1">
          <div class="py-1 space-y-1 border-b border-bray-400">
            <Nav
              name="Services"
              path="/services"
              icon="fa-solid fa-server"
              theme="royal"
            ></Nav>
            <Nav
              name="Applications"
              path="/applications"
              icon="fa-solid fa-list"
              theme="royal"
            ></Nav>
            <Nav
              name="Databases"
              path="/databases"
              icon="fa-solid fa-database"
              theme="royal"
            ></Nav>
          </div>
        </div>

        <div class="space-y-1">
          <div class="py-1 space-y-1">
            <Nav
              name="Settings"
              path="/settings"
              icon="fa-solid fa-gear"
              theme="amethyst"
            ></Nav>
            <Nav
              name="APIs"
              path="/apis"
              icon="fa-solid fa-book"
              theme="amethyst"
            ></Nav>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
