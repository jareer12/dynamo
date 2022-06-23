<script>
import Prism from "prismjs";
import "@/assets/css/prism.css";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-json";

export default {
  name: "Master",
  props: {
    url: String,
    method: String,
    response: String,
  },
};
</script>
<template>
  <div>
    <pre><code class="language-yaml">{{ method }}  {{url}} </code></pre>
    <pre><code class="language-json">{{ response }}</code></pre>
  </div>
</template>
