import { RouteConfig } from "vue-router";
import Main from '@/views/Main.vue'
import About from "@/views/About.vue";

export const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'main',
        component: Main,
        redirect: { path: 'about' },
        children: [
            {
                path: '/about',
                name: 'about',
                redirect: {path: 'about/architecture'},
                meta: {title: 'О комплексе'},
                component: About,
                children: [
                    {
                        path: 'architecture',
                        name: 'architecture',
                        meta: {title: 'Архитектура'},
                        props: true,
                        component: () => import(/* webpackChunkName: "about" */ '../components/about/Architecture.vue'),
                    },
                    {
                        path: 'improvement',
                        name: 'improvement',
                        props: true,
                        meta: {title: 'Благоустройство'},
                        // component: () => import(/* webpackChunkName: "about" */ '@/components/about/Improvement.vue'),
                    },
                    {
                        path: 'safety',
                        name: 'safety',
                        props: true,
                        meta: {title: 'Безопасность'},
                        component: () => import(/* webpackChunkName: "about" */ '@/components/about/Safety.vue'),
                    },
                    {
                        path: 'engineering',
                        name: 'engineering',
                        meta: {title: 'Инженерия'},
                        // component: () => import(/* webpackChunkName: "about" */ '@/components/about/Engineering.vue'),
                    },
                    {
                        path: 'infrastructure',
                        name: 'infrastructure',
                        props: true,
                        meta: {title: 'Инфраструктура'},
                        // component: () => import(/* webpackChunkName: "about" */ '@/components/about/Infrastructure.vue'),
                    },
                    {
                        path: 'availability',
                        name: 'availability',
                        props: true,
                        meta: {title: 'Транспортная доступность'},
                        // component: () => import(/* webpackChunkName: "about" */ '@/components/about/Availability.vue'),
                    },
                ]
            },
            {
                path: '/features',
                name: 'features',
                meta: {title: 'Особенности'},
                redirect: {path: 'features/architecture'},
                component: () => import(/* webpackChunkName: "features" */ '../views/Features.vue'),
                children: [
                    {
                        path: 'architecture',
                        name: 'architecture',
                        meta: {title: 'Архитектура'},
                        props: true,
                        // component: () => import(/* webpackChunkName: "about" */ '@/components/features/Architecture.vue'),
                    },
                    {
                        path: 'availability',
                        name: 'availability',
                        props: true,
                        meta: {title: 'Транспортная доступность'},
                        // component: () => import(/* webpackChunkName: "about" */ '@/components/features/Availability.vue'),
                    },
                ]
            },
            {
                path: '/penthouses',
                name: 'penthouses',
                meta: {title: 'Пентхаусы'},
                component: () => import(/* webpackChunkName: "penthouses" */ '../views/Penthouses.vue'),
            },
            {
                path: '/choose',
                name: 'choose',
                meta: {title: 'Выбрать квартиру'},
                component: () => import(/* webpackChunkName: "choose" */ '../views/Choose.vue'),
            }
        ],
    },
]
