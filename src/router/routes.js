const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue")
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue")
  }
];

// Always leave this as last one
/*if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}*/

export default routes;
