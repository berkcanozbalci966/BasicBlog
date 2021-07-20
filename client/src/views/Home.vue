<template>
  <Categories />
  <main class="container">
    <Jumbotron />
    <PostWithPic />
    <div class="row g-5">
      <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">From the Blog</h3>
        <Post />
        <PageNavigation />
      </div>

      <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem">
          <About />
          <Archives />
          <SocialMedia />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Categories from "@/components/Home/Categories.vue";
import Jumbotron from "@/components/Home/Jumbotron.vue";
import PostWithPic from "@/components/Home/PostWithPic.vue";
import Post from "@/components/Home/Post.vue";
import PageNavigation from "@/components/Home/PageNavigation.vue";
import About from "@/components/Home/About.vue";
import Archives from "@/components/Home/Archives.vue";
import SocialMedia from "@/components/Home/SocialMedia.vue";

export default defineComponent({
  name: "Home",
  components: {
    Categories,
    Jumbotron,
    PostWithPic,
    Post,
    PageNavigation,
    About,
    Archives,
    SocialMedia,
  },

  setup() {
    const value = 1;
    return { value };
  },
});
</script>

<style scoped>
@import "../assets/home.css";
</style>
