<script>
import tippy from "tippy.js";

export default {
  props: {
    name: String,
    path: String,
    icon: String,
    theme: String,
  },
  data() {
    return {
      id: this.name.replace(" ", "_"),
    };
  },
  mounted() {
    tippy(`#${this.id}`, {
      content: `${this.name}`,
      theme: this.theme,
      placement: "right",
    });
  },
};
</script>

<template>
  <a
    :id="id"
    :href="`${path}`"
    :class="`hover:bg-dark-500 hover:text-${theme}-500 items-center flex duration-300 transition-all p-4 rounded cursor-pointer`"
  >
    <i :class="`${icon} h-6 w-6`"></i>
  </a>
</template>
