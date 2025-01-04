import type { RouteRecordRaw } from "vue-router";
import { routeNames } from "./route-names";

export const routeRecords: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../components/layouts/PublicLayout.vue"),
    children: [
      {
        path: "",
        name: routeNames.root.home,
        component: () => import("../views/root/HomeView.vue"),
      },
      {
        path: "about",
        name: routeNames.root.about,
        component: () => import("../views/root/AboutView.vue"),
      },
      {
        path: "project",
        name: routeNames.root.project,
        component: () => import("../views/root/ProjectView.vue"),
      },
      {
        path: "techstack",
        name: routeNames.root.techstack,
        component: () => import("../views/root/TechstackView.vue"),
      },
      {
        path: "wedding",
        name: routeNames.root.wedding,
        component: () => import("../views/root/WeddingView.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../components/layouts/GuestLayout.vue"),
    children: [
      {
        path: "",
        name: routeNames.dashboard.login,
        component: () => import("../views/dashboard/LoginView.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("../components/layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: routeNames.dashboard.home,
        component: () => import("../views/dashboard/HomeView.vue"),
      },
      {
        path: "about",
        name: routeNames.dashboard.about,
        component: () => import("../views/dashboard/AboutView.vue"),
      },
      {
        path: "project",
        name: routeNames.dashboard.project,
        component: () => import("../views/dashboard/ProjectView.vue"),
      },
      {
        path: "techstack",
        name: routeNames.dashboard.techstack,
        component: () => import("../views/dashboard/TechstackView.vue"),
      },
      {
        path: "wedding",
        name: routeNames.dashboard.wedding,
        component: () => import("../views/dashboard/WeddingView.vue"),
      },
    ],
  },
];
