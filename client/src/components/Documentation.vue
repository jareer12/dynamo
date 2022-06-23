<script>
import Document from "./DocumentBox.vue";

export default {
  components: { Document },
  name: "Main",
  data() {
    return {
      docs: [
        {
          res: `{
  "Message": "Information",
  "Data": {
    "Uptime": 139736,
    "CPU": [{}],
    "Memory": {
      "used": 8523087872,
      "total": 25724768256,
      "free": 17201680384,
      "precent": {
        "used": 66.86816461403072,
        "left": 33.13183538596928
      }
    }
  },
  "Success": true
}`,
          method: "GET",
          url: "/info",
        },
        {
          res: `{
  "Data": [
    {
      "id": "QIDtQIAicJV",
      "name": "RobloxAPI",
      "target": "https://api.roblox.com",
      "targetPort": 80,
      "host": "127.0.0.1",
      "port": 3463,
      "created": 1655922130588
    }
  ],
  "Success": true
}`,
          method: "GET",
          url: "/proxy/all",
        },
        {
          res: `{
  "Data": [],
  "Success": true
}`,
          method: "GET",
          url: "/storage/clouds",
        },
      ],
    };
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<template>
  <main class="w-auto" data-aos="fade-in">
    <section class="h-screen p-5 w-full bg-dark-400">
      <div data-aos="fade-down">
        <h1 class="text-3xl font-black text-gray-400">API Documentations</h1>
        <h4 class="font-bold">v1.0.0</h4>
      </div>

      <div class="grid text-white mt-5 grid-cols-2 gap-5">
        <Document
          :url="item.url"
          :response="item.res"
          :method="item.method"
          v-for="item in docs"
          :key="item"
        />
      </div>
    </section>
  </main>
</template>
