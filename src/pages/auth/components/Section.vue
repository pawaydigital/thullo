<template>
  <section class="h-screen md:flex">
    <AsideBg :class="color" class="w-2/5 h-full xs:hidden md:inline" />

    <div class="xs:w-full md:w-3/5 md:h-full flex flex-col justify-between">
      <span class="xs:text-center md:text-right pt-5 pr-5"
        >{{ text }}
        <router-link
          class="text-purple-500 hover:text-purple-400 ml-2"
          :to="sign.path"
          >{{ sign.text }}</router-link
        ></span
      >
      <Content />
      <span></span>
    </div>
  </section>
</template>

<script>
import AsideBg from "@/pages/auth/components/AsideBg";
import Content from "@/pages/auth/components/Content";
import { useRoute } from "vue-router";
import { computed, provide } from "vue";

export default {
  components: { AsideBg, Content },

  setup() {
    const { path } = useRoute();
    provide("path", path);

    const text = computed(() =>
      path === "/login" ? "Not a member?" : "Already a member?"
    );

    const sign = computed(() =>
      path === "/login"
        ? { path: "/sign-up", text: "Sign up now" }
        : { path: "/login", text: "Sign in" }
    );

    const color = computed(() =>
      path === "/login" ? "bg-blue-100" : "bg-pink-100"
    );

    return { text, sign, color };
  },
};
</script>
