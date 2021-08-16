<template>
  <div class="space-y-2 flex">
    <img
      class="rounded-sm mr-4"
      :src="image"
      width="50"
      height="50"
      :alt="v$.name.$model"
    />
    <button
      type="button"
      @click="selectImage"
      class="text-gray-400 hover:text-gray-500"
    >
      CHANGE PHOTO
    </button>
    <input
      ref="fileInput"
      hidden
      type="file"
      accept="image/png, image/jpg, image/jpeg"
      @change="pickFile"
    />
  </div>
  <div class="space-y-2">
    <label for="name" class="block font-medium tracking-tight">Name</label>
    <input
      v-model.trim="v$.name.$model"
      id="name"
      type="text"
      class="input md:w-1/2 block"
      placeholder="name"
      autocomplete="off"
    />
    <span
      v-for="error of v$.name.$errors"
      :key="error.$uid"
      class="text-xs text-red-500"
      >{{ error.$message }}</span
    >
  </div>
  <div class="space-y-2">
    <label for="bio" class="block font-medium tracking-tight">Bio</label>
    <textarea
      v-model.trim="v$.bio.$model"
      id="bio"
      maxlength="100"
      class="input md:w-1/2 block"
      placeholder="biography"
      autocomplete="off"
      cols="30"
      rows="5"
    ></textarea>
  </div>
  <div class="space-y-2">
    <label for="phone" class="block font-medium tracking-tight">Phone</label>
    <input
      v-model.trim="v$.phone.$model"
      id="phone"
      type="number"
      class="input md:w-1/2 block"
      placeholder="phone"
      autocomplete="off"
    />
    <span
      v-for="error of v$.phone.$errors"
      :key="error.$uid"
      class="text-xs text-red-500"
      >{{ error.$message }}</span
    >
  </div>
  <div class="space-y-2">
    <label for="email" class="block font-medium tracking-tight">Email</label>
    <input
      v-model.trim="v$.email.$model"
      id="email"
      type="email"
      class="input md:w-1/2 block"
      placeholder="user@gmail.com"
      autocomplete="off"
    />
    <span
      v-for="error of v$.email.$errors"
      :key="error.$uid"
      class="text-xs text-red-500"
      >{{ error.$message }}</span
    >
  </div>
  <div class="space-y-2">
    <label for="password" class="block font-medium tracking-tight"
      >Password</label
    >
    <input
      v-model.trim="v$.password.$model"
      id="password"
      type="password"
      class="input md:w-1/2 block"
      placeholder="*********"
      autocomplete="off"
    />
    <span
      v-for="error of v$.password.$errors"
      :key="error.$uid"
      class="text-xs text-red-500"
      >{{ error.$message }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    userForm: Object,
    img: {
      type: String,
      default: "https://via.placeholder.com/50x50",
    },
    urlImg: {},
  },
  setup(props) {
    const v$ = props.userForm;
    return { v$ };
  },
  data() {
    return {
      image: this.$props.img,
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.image = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$props.urlImg(file[0]);
      }
    },
  },
};
</script>

<style>
input:hover,
textarea:hover {
  box-shadow: 0 0 0 4px rgba(219, 230, 255, 1);
}
</style>
