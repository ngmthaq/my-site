import type { RouteRecordRaw } from "vue-router";
import { routeNames } from "./route-names";

export const routeRecords: RouteRecordRaw[] = [
  {
    path: "/",
    name: routeNames.root.home,
    component: () => import("../views/root/HomeView.vue"),
  },
  {
    path: "/about",
    name: routeNames.root.about,
    component: () => import("../views/root/AboutView.vue"),
  },
];
