import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Home" },
  },
  {
    path: "/apply-for-help",
    name: "apply-for-help",
    component: () => import("@/views/ApplyforHelpView.vue"),
    meta: { title: "Apply for help" },
  },

  {
    path: "/donate",
    name: "donate",
    component: () => import("@/views/DonateView.vue"),
    meta: { title: "Donate" },
  },

  {
    path: "/project/education-and-control",
    name: "education-and-control",
    component: () => import("@/views/EducationControlView.vue"),
    meta: { title: "Education and control" },
  },

  {
    path: "/project/non-commercial-feed-line",
    name: "non-commercial-feed-line",
    component: () => import("@/views/NonComercialFeedLineView.vue"),
    meta: { title: "Non Commercial Feed Line" },
  },
  {
    path: "/project/emergency-aid-war-2022",
    name: "emergency-aid-war-2022",
    component: () => import("@/views/EmergencyAidWarView.vue"),
    meta: { title: "Emergency Aid War 2022" },
  },
  {
    path: "/shelter/:id",
    name: "Shelter",
    // props: true,
    component: () => import("@/views/ShelterView.vue"),
  },

  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: () => import("@/views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosisiton) {
    return savedPosisiton || { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  document.title = "ISA Charity | " + to.meta.title || "Default Title";
  next();
});

export default router;
