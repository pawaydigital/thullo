<template>
  <form class="mt-5">
    <Inputs />
    <button class="btn-blue btn-lg" type="submit">
      {{ text }}
    </button>
  </form>
</template>

<script>
import Inputs from "./Inputs";
import { computed, inject } from "vue";

export default {
  components: { Inputs },

  setup() {
    const path = inject("path");
    const text = computed(() => (path === "/login" ? "Sign in" : "Sign up"));

    return { text };
  },
};
</script>
