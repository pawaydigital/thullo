import { createStore } from "vuex";
import profile from "./modules/profile";

const store = new createStore({
  modules: {
    profile,
  },
});

export default store;
