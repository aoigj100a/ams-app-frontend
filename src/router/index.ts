import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFindView from "../views/NotFindView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/checkIn",
      name: "checkIn",
      component: () => import("../views/CheckInView.vue"),
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("../views/CalendarView.vue"),
    },
    {
      path: "/checkInQR",
      name: "checkInQR",
      component: () => import("../views/CheckInQRView.vue"),
    },
    {
      path: "/changePassword",
      name: "changePassword",
      component: () => import("../views/ChangePasswordView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/admin/AdminView.vue"),
    },
    {
      path: "/admin/list",
      name: "adminList",
      component: () => import("../views/admin/ListView.vue"),
    },
    {
      path: "/admin/errList",
      name: "adminErrList",
      component: () => import("../views/admin/ErrListView.vue"),
    },
    { path: '/:pathMatch(.*)*', component: NotFindView },
  ],
});

export default router;
