<script setup>
import { ref } from 'vue'
import { useNoteStore } from '../stores/NoteStore'
import { storeToRefs } from 'pinia'

const noteStore = useNoteStore()
const { markedPinned } = noteStore;
</script>
<template>
    <main id="result" class="container mt-4">
        <div class="row d-flex justify-content-start">
            <div v-for="note in noteStore.notes" class="col-4 mr-2 mb-4 card-frame">
                <i class="fa-solid fa-thumbtack me-3 rotate" @click="markedPinned(note.id)" v-if="note.pinned"></i>
                <i class="fa-solid fa-thumbtack me-3" @click="markedPinned(note.id)" v-else></i>
                <router-link :to="{ name: 'edit', params: { id: note.id } }">
                    <div class="card">   
                        <div class="card-body">
                            <h5 class="card-title">{{note.title}}</h5>
                            <hr>
                            <p class="card-text">{{note.content}}</p>
                        </div>
                    </div>
                </router-link>
            </div>
            
        </div>
    </main>
    
</template>
<style scoped>
.card-frame .fa-thumbtack{
    position: relative;
    z-index: 3;
    top: 30px;
    left: 10px;
    cursor: pointer;
}
.card{
    transition: all 0.3s;
}
.card:hover{
    background: #efe1bd;
    box-shadow: 2px 2px 10px #999;
  
}
.card-body:hover{
    color: #000;
}
a{
    width: 100%;
}
.rotate{
    position: absolute;
    top: 10px;
    left: 10px;
    color: red;
    transform: rotate(45deg);
}
</style>