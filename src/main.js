import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import store from "./Store.js";
const routes = [
  {
    path: "/",
    component: () => import("./components/OptionsAPI/Products.vue"),
  },
  {
    path: "/productsOptionsApi",
    component: () => import("./components/OptionsAPI/Products.vue"),
  },
  {
    path: "/AddAndEditWithOptionApi",
    component: () => import("./components/OptionsAPI/AddAndEdit.vue"),
  },
  {
    path: "/AddAndEditWithOptionApi/:id",
    component: () => import("./components/OptionsAPI/AddAndEdit.vue"),
  },
  {
    path: "/ProductDetailsWithOptionApi/:id",
    component: () => import("./components/OptionsAPI/ProductDetails.vue"),
  },
  {
    path: "/productsCompositionApi",
    component: () => import("./components/CompositionAPI/products.vue"),
  },
  {
    path: "/AddAndEditWithCompositionApi",
    component: () => import("./components/CompositionAPI/AddAndEdit.vue"),
  },
  {
    path: "/AddAndEditWithCompositionApi/:id",
    component: () => import("./components/CompositionAPI/AddAndEdit.vue"),
  },
  {
    path: "/ProductDetailsWithCompositionApi/:id",
    component: () => import("./components/CompositionAPI/ProductDetails.vue"),
  },
  {
    path: "/:NotFound(.*)*",
    component: () => import("./components/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(store).mount("#app");
