import { createRouter, createWebHistory } from 'vue-router'
import NoteGrid from '../components/NoteGrid.vue'
import AddNote from '../components/AddNote.vue'
import EditNote from '../components/EditNote.vue'
import Search from '../components/SearchNote.vue'


const routes = [
    { path: '/', name: 'home', component: NoteGrid, meta: { title: '我的筆記' } },
    { path: '/add_note', name: 'add_note', component: AddNote, meta: { title: '新增筆記｜我的筆記應用' } },
    { path: '/edit_note/:id', name: 'edit_note', component: EditNote, meta: { title: '編輯筆記｜我的筆記應用' } },
    { path: '/search', name: 'search', props: true, component: Search, meta: { title: '搜尋結果' } },

]
const router = createRouter({
    routes,
    history: createWebHistory(),

    scrollBehavior() {
        return { top: 0 };
    }
});

export default router