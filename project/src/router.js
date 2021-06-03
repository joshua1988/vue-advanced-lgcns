import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import DropdownPage from "@/views/DropdownPage.vue";
import ModalPage from "@/views/ModalPage.vue";
import PageNotFoundPage from "@/views/PageNotFoundPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/login",
      component: LoginPage
    },
    {
      path: "/dropdown",
      component: DropdownPage
    },
    {
      path: "/modal",
      component: ModalPage
    },
    {
      path: "*",
      component: PageNotFoundPage
    }
  ]
});
