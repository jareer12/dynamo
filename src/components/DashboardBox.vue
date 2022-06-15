<script>
export default {
  props: { name: String, amount: String },
};
</script>
<template>
  <div class="hover:scale-105 duration-300">
    <div
      data-aos="zoom-in"
      class="bg-dark-300 hover:bg-brew cursor-pointer group p-4 rounded transition-all duration-300"
    >
      <h2 class="font-bold duration-300 group-hover:text-white text-gray-400">
        {{ name }}
      </h2>
      <h3 class="">{{ amount }}</h3>
    </div>
  </div>
</template>
