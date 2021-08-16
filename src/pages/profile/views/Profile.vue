<template>
  <section class="pt-5 pb-10">
    <Title class="container mx-auto" />
    <article
      class="md:border-2 xs:w-full md:w-5/6 container mx-auto rounded-md"
    >
      <Subtitle />
      <div>
        <DataUser />
      </div>
    </article>
  </section>
</template>

<script>
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import DataUser from "../components/DataUser.vue";

export default {
  components: {
    Title,
    Subtitle,
    DataUser,
  },
};
</script>
