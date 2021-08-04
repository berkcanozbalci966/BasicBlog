<template>
  <div>
    <h1>Success you will redirect home!</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    onMounted(() => {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    });
  },
});
</script>
<style lang="scss"></style>
