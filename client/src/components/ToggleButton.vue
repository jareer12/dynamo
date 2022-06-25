<script>
import Toggle from "@vueform/toggle";
export default {
  components: {
    Toggle,
  },
  props: {
    value: Boolean,
    color: String,
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>

<template>
  <main>
    <Toggle class="float-right" :on-background="`${color}`" v-model="value" />
  </main>
</template>
