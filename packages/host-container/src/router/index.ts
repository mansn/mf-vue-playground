import { createRouter, createWebHistory } from "vue-router";
import routeManifest from "./routeManifest";

const getRoutes = () => {
  return routeManifest.map((mfe) => ({
    path: mfe.route.path,
    name: mfe.route.name,
    meta: mfe.route.meta,
    component: () => import("@/components/Loader.vue"),
  }));
};

const routes = getRoutes();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
