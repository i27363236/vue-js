import { createRouter, createWebHistory } from 'vue-router'
import ProductItem from './components/ProductItem.vue';
import Axios from './components/Axios.vue';

const routes = [
    {path: '/', name: 'products', component: ProductItem}, 
    {path: '/axios', name: 'axios', component: Axios}, 
]
const router = createRouter ({
    routes, 
    history: createWebHistory(),
});

export default router

