<template>
  <form
    @submit.prevent="onSubmit(v$)"
    class="space-y-3 w-full xs:px-2 md:px-10 py-5"
  >
    <InputsEditUser :userForm="v$" :img="userForm.img" :urlImg="imageUrl" />
    <button
      :disabled="validateButton(v$)"
      :class="validateButton(v$) ? 'btn-red' : 'btn-blue'"
      type="submit"
      class="btn"
    >
      Save Changes
    </button>
  </form>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useForm } from "@/hooks/useForm";
import InputsEditUser from "./InputsEditUser.vue";

export default {
  components: { InputsEditUser },
  setup() {
    const userForm = computed(() => {
      return useStore().state.profile.user;
    });

    const v$ = useForm(userForm);
    let image = "";

    const validateButton = (v$) => {
      if (
        v$.password.$invalid ||
        v$.name.$invalid ||
        v$.phone.$invalid ||
        v$.email.$invalid
      )
        return true;
      return false;
    };

    const imageUrl = (url) => (image = url);

    const onSubmit = (v$) => {
      if (
        v$.password.$invalid ||
        v$.name.$invalid ||
        v$.phone.$invalid ||
        v$.email.$invalid
      )
        return;

      const data = {
        name: v$.name.$model,
        bio: v$.bio.$model,
        phone: v$.phone.$model,
        email: v$.email.$model,
        password: v$.password.$model,
      };

      let formData = new FormData();
      formData.append("image", image);
      formData.append("data", data);

      console.log(data);
      console.log(image);
    };

    return { v$, userForm, validateButton, onSubmit, imageUrl };
  },
};
</script>
