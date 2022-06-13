import {createRouter, createWebHistory} from "vue-router"
import {constantRouterMap} from '@/config/router.config'

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    },
    routes: constantRouterMap
})

export default router
