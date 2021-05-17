import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Programming from "./pages/Programming";
import Modeling from "./pages/Modeling";
import Contact from "./pages/Contact";


const routes = [
    { path: "/", component: Home },
    { path: "/experience", component: Experience },
    { path: "/programming", component: Programming },
    { path: "/modeling", component: Modeling },
    { path: "/contact", component: Contact },
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,      
    });

    export default router;