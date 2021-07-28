import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '../views/Page1.vue'

const routes = [
    {
        path: '/',
        name: 'Page 1',
        component: Page1
    },
    {
        path: '/page2',
        name: 'Page 2',
        // route level code-splitting
        // this generates a separate chunk (page2.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "page2" */ '../views/Page2.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
