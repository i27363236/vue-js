import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from './components/HelloWorld.vue';
import Box from './components/box.vue';
import Form from './components/form.vue';
import Computed from './components/computed.vue';
import Watch from './components/watch.vue';
import Product from './components/productItem.vue';

const routes = [
    { path: '/helloWorld', name: 'hello', component: HelloWorld },
    { path: '/box', name: 'box', component: Box },
    { path: '/form', name: 'form', component: Form },
    { path: '/computed', name: 'computed', component: Computed },
    { path: '/watch', name: 'watch', component: Watch },
    // { path: '/product', name: 'product', component: Product },
];

const router = createRouter ({
    routes, 
    history: createWebHistory(),
});

export default router;