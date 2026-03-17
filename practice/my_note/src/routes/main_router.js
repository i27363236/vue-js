import { createRouter, createWebHistory } from 'vue-router'
import NoteGrid from '../components/NoteGrid.vue'

const routes = [
    {path: '/', name: 'home', component: NoteGrid, meta: { title: '我的筆記' }}, 
]
const router = createRouter ({
    routes, 
    history: createWebHistory(),

    scrollBehavior() {
        return { top : 0 };
    }
});

export default router