<template>
  <section class="h-screen">
    <header class="container mx-auto sm:px-5 flex justify-between py-5">
      <img src="@/assets/Logo.svg" alt="logo" />
      <nav>
        <router-link
          class="btn text-blue-500 hover:text-blue-600 mr-1"
          to="/login"
          >Sign in</router-link
        >
        <router-link class="btn btn-blue" to="/sign-up">Sign up</router-link>
      </nav>
    </header>
    <div class="container mx-auto h-4/5 w-full flex items-center">
      <div class="md:w-1/2 xs:pl-0 sm:pl-5 lg:pl-20">
        <h1 class="xs:text-xl md:text-4xl pb-5 font-bold text-gray-900">
          Thullo helps teams move work forward 🚀
        </h1>
        <p class="xs:text-md md:text-xl text-gray-900">
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with Thullo.
        </p>
      </div>
      <div class="xs:hidden w-1/2 md:block">
        <img
          src="@/assets/hero.webp"
          class="mx-auto"
          width="350"
          height="350"
          alt="hero"
        />
      </div>
    </div>
  </section>
</template>
