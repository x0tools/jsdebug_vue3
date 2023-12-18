import { createRouter, createWebHistory,createWebHashHistory }  from "vue-router"
//路由配置
const routes = [
    {
        path:"/",
        name:"index",
        //按需引入
        component:()=>import(/*webpackChunkName:'index'*/ '../page/index.vue'),
        redirect: "/home",
        children:[
            {
                path:"/home",
                name:"home",
                component: ()=>import(/*webpackChunkName:'home'*/ '../page/home.vue')
            },
            {
                path:"/team",
                name:"team",
                component: ()=>import(/*webpackChunkName:'home'*/ '../page/team.vue')
            },
            {
                path:"/project",
                name:"project",
                component: ()=>import(/*webpackChunkName:'home'*/ '../page/project.vue')
            },
            {
                path:"/doc",
                name:"doc",
                component: ()=>import(/*webpackChunkName:'home'*/ '../page/doc.vue')
            },
            {
                path:"/debug",
                name:"debug",
                component: ()=>import(/*webpackChunkName:'home'*/ '../page/debug.vue')
            }
        ]
        
    }
]
//createWebHashHistory 带#号
//createWebHistory 不带#

const router = createRouter({
    //页面路由模式 #
    history:createWebHashHistory(),
    routes
})
export default router;