<script>
export default {
  props: {
    name: String,
    url: String,
    active: Boolean,
  },
};
</script>

<template>
  <span class="relative inline-flex" data-aos="zoom-in">
    <a type="button" :class="`bg-dark-300  p-3 text-white w-full rounded`">
      <h1 class="text-lg font-bold">{{ name }}</h1>
      <h3 class="text-gray-400">{{ url }}</h3>
    </a>
    <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
      <span
        :class="`animate-ping absolute inline-flex h-full w-full rounded-full bg-${
          active ? 'green' : 'red'
        }-400 opacity-75`"
      ></span>
      <span
        :class="`relative inline-flex rounded-full h-3 w-3 bg-${
          active ? 'green' : 'red'
        }-500`"
      ></span>
    </span>
  </span>
</template>
