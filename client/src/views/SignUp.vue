<template>
  <main class="form-signin">
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

    <div class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="email"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="nameInput"
        placeholder="Awesome Nick"
        v-model="userName"
      />
      <label for="nameInput">User Name</label>
    </div>

    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        v-model="password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating mb-4">
      <input
        type="password"
        class="form-control"
        id="floatingPassword2"
        placeholder="Password"
        v-model="secondPassword"
      />
      <label for="floatingPassword2">Password Again</label>
      <p>
        {{ secondPassword + " " + password + " " + email }}
      </p>
    </div>

    <button
      @click="registerAccount"
      class="w-100 btn btn-lg btn-primary"
      type="submit"
    >
      Sign up
    </button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Request from "@/api/Request";
export default defineComponent({
  setup() {
    const userName = ref("");
    const email = ref("");
    const password = ref("");
    const secondPassword = ref("");

    const registerAccount = () => {
      const userInfos = {
        email: email.value,
        password: password.value,
        userName: userName.value,
      };
      Request({
        type: "post",
        endPoint: "/api/user/register",
        postData: userInfos,
      });
    };

    return { email, password, secondPassword, registerAccount, userName };
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
