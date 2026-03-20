<script setup>
import { ref } from 'vue'
import { useNoteStore } from '../store/note_store';
import { useRouter } from 'vue-router'

const noteStore = useNoteStore()
const router = useRouter()
const keyword = ref('')

async function searchNotes(){
    const results = await noteStore.searchNotes(keyword.value)
    if(results.length > 0){
        router.push({ name: 'search'})
    }
}
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"><img src="../../public/logo.png" alt="" class="logo">MyNote</router-link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex ms-auto" @submit.prevent="searchNotes">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword"/>
                        <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>



<style scoped>
.logo{
    width: 50px;
}
</style>