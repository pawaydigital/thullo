<template>
  <div class="flex justify-between py-5 md:px-10 items-center">
    <div>
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <span class="text-gray-600 text-sm">{{ description }}</span>
    </div>
    <router-link
      v-if="validationBtn"
      to="/profile/edit"
      class="btn text-blue-500 hover:text-blue-600"
      >Edit</router-link
    >
  </div>
  <hr />
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const title = computed(() =>
      route.name === "Edit" ? "Change Info" : "Profile"
    );

    const description = computed(() =>
      route.name === "Edit"
        ? "Changes will be reflected to every services"
        : "Some info may be visible to other people"
    );

    const validationBtn = computed(() =>
      route.name === "Edit" ? false : true
    );

    return { title, description, validationBtn };
  },
};
</script>
