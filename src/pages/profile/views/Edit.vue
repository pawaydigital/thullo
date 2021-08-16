<template>
  <section class="pt-5 pb-10">
    <div class="xs:w-full md:w-5/6 container mx-auto md:pb-5">
      <router-link to="/profile" class="flex text-blue-400 hover:text-blue-300">
        <SvgIcon
          class="mr-1"
          style="margin-top:2px;"
          type="mdi"
          :path="mdiArrowLeft"
          :size="20"
        />
        Back</router-link
      >
    </div>
    <article
      class="md:border-2 xs:w-full md:w-5/6 container mx-auto rounded-sm"
    >
      <Subtitle />
      <FormEditUser />
    </article>
  </section>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowLeft } from "@mdi/js";
import Subtitle from "@/pages/profile/components/Subtitle.vue";
import FormEditUser from "@/pages/profile/components/form/FormEditUser.vue";

export default {
  components: {
    SvgIcon,
    Subtitle,
    FormEditUser,
  },
  data() {
    return {
      mdiArrowLeft,
    };
  },
};
</script>
