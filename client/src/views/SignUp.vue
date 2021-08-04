<template>
  <component @successSign="changeComponent($event)" :is="component" />
</template>

<script lang="ts">
import SignUp from "@/components/Sign/SignUp.vue";
import SuccessSignUp from "@/components/Sign/SuccessSignUp.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    SignUp,
    SuccessSignUp,
  },
  setup() {
    const component = ref("SignUp");

    const changeComponent = (event: string): void => {
      component.value = event;
    };

    return { component, changeComponent };
  },
});
</script>

<style lang="scss">
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
