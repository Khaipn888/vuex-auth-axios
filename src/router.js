/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router"
import home from "@/view/home.vue"
import register from "@/view/register.vue"
import login from "@/view/login.vue"
import notfound from "@/view/notfound.vue"
import introduction from "@/view/introduction.vue"
import product from "@/view/product.vue"
import contact from "@/view/contact.vue"




const routes = [
    {
        path: "/",
        name: "Home",
        component: home
    },
    {
        path: "/Login",
        name: "Login",
        component: login
    },
    {
        path: "/Register",
        name: "Register",
        component: register
    },
    {
        path: "/Introduction",
        name: "Introduction",
        component: introduction
    },
    {
        path: "/Contact",
        name: "Contact",
        component: contact
    },
    {
        path: "/Product",
        name: "Product",
        component: product
    },
    { path: '/:pathMatch(.*)', name: 'NotFound', component: notfound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
}
)
export default router