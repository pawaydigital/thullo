<template>
  <section v-if="path === '/sign-up'" class="flex w-full gap-3">
    <div class="w-1/2">
      <label class="font-bold border-gray-900" for="name">Name</label>
      <input class="input" id="name" type="text" autocomplete="off" />
    </div>
    <div class="w-1/2">
      <label class="font-bold border-gray-900" for="username">Username</label>
      <input class="input" id="username" type="text" autocomplete="off" />
    </div>
  </section>
  <div>
    <label class="font-bold border-gray-900" for="email">Email Address</label>
    <input class="input" id="email" type="email" autocomplete="off" />
  </div>
  <div>
    <label class="font-bold border-gray-900" for="password">Password</label>
    <input
      class="input"
      id="password"
      type="password"
      placeholder="6+ characters"
    />
  </div>
  <div v-if="path === '/sign-up'" class="mb-4">
    <input type="checkbox" id="check" class="mr-2 w-4 h-4 cursor-pointer" />
    <label for="check" class="font-light text-gray-600 text-sm cursor-pointer"
      >Creating an account means you’re okay with our Terms of Service, Privacy
      Policy</label
    >
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const path = inject("path");

    return { path };
  },
};
</script>

<style>
input:hover {
  box-shadow: 0 0 0 4px rgba(219, 230, 255, 1);
}
</style>
