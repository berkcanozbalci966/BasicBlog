<template>
  <footer class="blog-footer" id="footer">
    <p>Berkcan - {{ currentYear }}</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const currentYear = new Date().getFullYear();

    return { currentYear };
  },
});
</script>

<style lang="scss">
#footer {
  display: flex;
  justify-content: center;
}
</style>
