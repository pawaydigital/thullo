<template>
  <div
    class="animate__animated animate__backInUp xs:container xs:my-10 md:mt-0 md:w-3/5 mx-auto"
  >
    <h1 class="text-3xl font-bold text-gray-900">{{ text }}</h1>

    <BtnGoogle class="my-5" />

    <span class="flex items-center h-5 text-gray-400">
      <hr class="w-6/12 mr-3 border-gray-300" />
      Or
      <hr class="w-6/12 ml-3 border-gray-300" />
    </span>

    <Form />
  </div>
</template>

<script>
import Form from "@/pages/auth/components/Form";
import BtnGoogle from "@/pages/auth/components/BtnGoogle";
import { computed, inject } from "vue";

export default {
  components: { Form, BtnGoogle },
  setup() {
    const path = inject("path");

    const text = computed(() =>
      path === "/login" ? "Sign in to Thullo" : "Sign up to Thullo"
    );

    return { text };
  },
};
</script>
