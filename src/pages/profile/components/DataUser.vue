<template>
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Profile</h4>
    <div class="w-4/6">
      <img
        class="rounded-sm"
        width="100"
        height="100"
        :src="user.img"
        :alt="user.name"
      />
    </div>
  </div>
  <hr />
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Name</h4>
    <div class="w-4/6 text-gray-700">
      <p>{{ user.name }}</p>
    </div>
  </div>
  <hr />
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Bio</h4>
    <div class="w-4/6 text-gray-700">
      <p>{{ user.bio }}</p>
    </div>
  </div>
  <hr />
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Phone</h4>
    <div class="w-4/6 text-gray-700">
      <p>{{ user.phone }}</p>
    </div>
  </div>
  <hr />
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Email</h4>
    <div class="w-4/6 text-gray-700">
      <p>{{ user.email }}</p>
    </div>
  </div>
  <hr />
  <div class="flex w-full xs:px-2 md:px-10 py-5 items-center">
    <h4 class="w-2/6 text-gray-400">Password</h4>
    <div class="w-4/6 text-gray-700 flex">
      <p class="mr-4">
        {{ !visibility ? hidePassword(user.password) : user.password }}
      </p>
      <button @click="visibility = !visibility">
        <SvgIcon v-if="!visibility" type="mdi" :path="icon.mdiEye" :size="20" />
        <SvgIcon v-else type="mdi" :path="icon.mdiEyeOff" :size="20" />
      </button>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiEyeOff, mdiEye } from "@mdi/js";
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  components: {
    SvgIcon,
  },
  setup() {
    const user = computed(() => {
      return useStore().state.profile.user;
    });

    const visibility = ref(false);
    const icon = ref({
      mdiEyeOff,
      mdiEye,
    });

    const hidePassword = (pass) => {
      let str = "";
      pass.split("").forEach(() => (str += "*"));
      return str;
    };

    return { hidePassword, user, visibility, icon };
  },
};
</script>
