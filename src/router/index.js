import { createRouter, createWebHashHistory } from "vue-router";
//Agregando paginas de la aplicacion
import Home from "../Pages/Home.vue";
import Login from "../Pages/Login.vue";
import Registro from "../Pages/Registro.vue";
import calculadora2 from "../Pages/calculadora2.vue";
import Ciclos from "../Pages/Ciclos.vue";
import Horario1 from "../Pages/Horario1.vue";
import Horario2 from "../Pages/Horario2.vue";
import Eventos from "../Pages/Eventos.vue";
import Hello from "../Pages/Hello.vue";
import Props1 from "../Pages/Props1.vue";


const routes =[
    {
        path: "/calculadora1",
        name: "calculadora1",
        component: Home,
    },
    {
        path:"/login",
        name: "login",
        component: Login,

    },
    {
        path:"/registro",
        name: "registro",
        component: Registro,

    },
    {
        path:"/calculadora2",
        name: "calculadora2",
        component: calculadora2,

    },
    {
        path:"/recorrido",
        name: "recorrido",
        component: Ciclos,

    },
    {
        path:"/horario1",
        name: "horario1",
        component: Horario1,

    },
    {
        path:"/horario2",
        name: "horario2",
        component: Horario2,

    },
    {
        path:"/eventos",
        name: "eventos",
        component: Eventos,

    },
    {
        path:"/hello",
        name: "hello",
        component: Hello,

    },
    {
        path:"/props1",
        name: "props1",
        component: Props1,

    }


        

]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
