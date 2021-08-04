<template>
  <main class="form-signin">
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
    <p>{{ requestResult }}</p>
    <div class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="state.email"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="nameInput"
        placeholder="Awesome Nick"
        v-model="state.userName"
      />
      <label for="nameInput">User Name</label>
    </div>

    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        v-model="state.password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating mb-4">
      <input
        type="password"
        class="form-control"
        id="floatingPassword2"
        placeholder="Password"
        v-model="state.secondPassword"
      />
      <label for="floatingPassword2">Password Again</label>
      <p>
        {{ state.secondPassword + " " + state.password + " " + state.email }}
      </p>
    </div>

    <button
      @click="registerAccount"
      class="w-100 btn btn-lg btn-primary"
      type="submit"
      :disabled="isDisabled"
    >
      Sign up
    </button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onUpdated, reactive } from "vue";
import { useRouter } from "vue-router";

import Request from "@/api/Request";

export default defineComponent({
  props: {},
  setup(props, context) {
    // Hooks
    onUpdated(() => {
      if (requestResult.value == "success")
        setTimeout(() => {
          context.emit("successSign", "SuccessSignUp");
        }, 2000);
    });

    const state = reactive({
      userName: "",
      email: "",
      password: "",
      secondPassword: "",
    });
    const sendSignUpRequest = ref(true);
    const requestResult = ref();
    const component = "signUp";
    const router = useRouter();

    // Register Method
    const registerAccount = async () => {
      // Disable Button
      sendSignUpRequest.value = false;
      setTimeout(() => {
        sendSignUpRequest.value = true;
      }, 2000);

      // Request Body
      const userInfos = {
        email: state.email,
        password: state.password,
        userName: state.userName,
      };
      // Request
      requestResult.value = await Request({
        type: "post",
        endPoint: "/api/user/register",
        postData: userInfos,
      });
    };

    // Button Disable Computed

    const isDisabled = computed(() => {
      return !sendSignUpRequest.value ||
        state.password === "" ||
        state.secondPassword === "" ||
        state.password !== state.secondPassword
        ? true
        : false;
    });

    return {
      registerAccount,
      state,
      isDisabled,
      requestResult,
      component,
    };
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
