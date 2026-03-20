<script setup>
import { useNoteStore } from '../store/note_store';
import { storeToRefs } from 'pinia';
const noteStore = useNoteStore()

const { showPinned, showUnpinned } = storeToRefs(noteStore)
</script>


<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-12">
            <router-link to="/add_note">
                <button class="btn btn-warning mb-3 w-100"><i class="fa-solid fa-book-medical"></i> 新增筆記</button>
            </router-link>


                <h5 class="mt-3">筆記列表</h5>
                <h6 class="mt-4">重要</h6>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item, i) in showPinned">
                        <i class="fa-solid fa-thumbtack me-3 rotate"></i>
                        <span>{{item.title}}</span>
                        <div class="icon-group">
                            <router-link :to="{ name: 'edit_note', params: {id: item.id} }">
                                <i class="fa-solid fa-pen-to-square me-3"></i>
                            </router-link>
                            
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </li>
                </ul>

                <h6 class="mt-4">一般</h6>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item, i) in showUnpinned">
                        <i class="fa-solid fa-thumbtack me-3"></i>
                        <span>{{item.title}}</span>
                        <div class="icon-group">
                            <router-link :to="{ name: 'edit_note', params: {id: item.id} }">
                                <i class="fa-solid fa-pen-to-square me-3"></i>
                            </router-link>
                            
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </li>
                </ul>


            </div>
        </div>
    </div>
</template>


<style scoped>
.icon-group {
    display: flex;
    width: 50px;
    justify-content: space-between;
    align-items: center;
}

.icon-group i {
    cursor: pointer;
}

.icon-group i:hover {
    color: chocolate;
}

.card i {
    position: relative;
    top: 10px;
    left: 10px;
}

.rotate {
    transform: rotate(45deg);
    color: red;
}
</style>