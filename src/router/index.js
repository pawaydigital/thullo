import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "home", webpackPreload: true */ "@/pages/home/Home.vue"
      ),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(
        /* webpackChunkName: "login", webpackPreload: true */ "@/pages/auth/views/Login.vue"
      ),
  },
  {
    path: "/sign-up",
    name: "Sign up",
    component: () =>
      import(
        /* webpackChunkName: "sign up", webpackPreload: true */ "@/pages/auth/views/SignUp.vue"
      ),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(
        /* webpackChunkName: "profile", webpackPreload: true */ "@/pages/profile/views/Profile.vue"
      ),
  },
  {
    path: "/profile/edit",
    name: "Edit",
    component: () =>
      import(
        /* webpackChunkName: "edit", webpackPreload: true */ "@/pages/profile/views/Edit.vue"
      ),
  },
];

const router = createRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
