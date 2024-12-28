import { createRouter, createWebHistory } from "vue-router";
import { routeRecords } from "./route-records";

export { routeNames } from "./route-names";
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeRecords,
});
