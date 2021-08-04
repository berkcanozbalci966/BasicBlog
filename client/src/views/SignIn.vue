<template>
  <main class="form-signin">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <p>{{ requestResult }}</p>
    <div class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingMail"
        placeholder="name@example.com"
        v-model="state.email"
      />
      <label for="floatingMail">Email address</label>
    </div>
    <div class="form-floating mb-4">
      <input
        v-model="state.password"
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button @click="signIn" class="w-100 btn btn-lg btn-primary" type="submit">
      Sign in
    </button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import Request from "@/api/Request";

export default defineComponent({
  setup() {
    const state = reactive({
      email: "",
      password: "",
    });
    const requestResult = ref("");
    const signIn = async () => {
      const userInfos = { email: state.email, password: state.password };
      requestResult.value = await Request({
        type: "post",
        endPoint: "/api/user/login",
        postData: userInfos,
      });
    };

    return { signIn, requestResult, state };
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
