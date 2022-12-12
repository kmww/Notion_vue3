import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});
