import {BasicLayout} from '@/layouts'

/**
 * 路由配置信息
 */
export const constantRouterMap = [
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/exception/404')
    },
    {
        path: '/',
        component: BasicLayout,
        name: 'index',
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/epp/dashboard/Dashboard'),
                meta: {}
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*', redirect: '/404', hidden: true
    }
]
