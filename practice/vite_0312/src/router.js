import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from './components/HelloWorld.vue';
import Event from "./components/Event.vue";
import Syntax from "./components/syntax.vue";


const routes = [
    {path: '/helloworld', name: 'hello', component: HelloWorld},
    {path: '/event', name: 'event', component: Event},
    {path: '/syntax', name: 'syntax', component: Syntax},
]

const router = createRouter ({
    routes, 
    history: createWebHistory(),
});

export default router;