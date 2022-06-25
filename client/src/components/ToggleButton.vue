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

<template>
  <main>
    <Toggle class="float-right toggle-amethyst" v-model="value" />
  </main>
</template>

<style src="@vueform/toggle/themes/default.css"></style>
<style lang="css">
.toggle-amethyst {
  --toggle-bg-on: #a14ad4;
  --toggle-border-on: #a14ad4;
}
</style>
