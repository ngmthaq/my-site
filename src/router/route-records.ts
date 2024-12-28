import type { RouteRecordRaw } from "vue-router";
import { routeNames } from "./route-names";

export const routeRecords: RouteRecordRaw[] = [
  {
    path: "/",
    name: routeNames.home,
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: routeNames.about,
    component: () => import("../views/AboutView.vue"),
  },
];
