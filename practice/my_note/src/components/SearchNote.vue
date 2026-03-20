<template>
    <h2 class="pt-5" v-if="!searchResults">查無資料</h2>
    <div v-else>
        <h2 class="pt-5">搜尋結果:</h2>
        <main id="result" class="container mt-4">
            <div class="row d-flex justify-content-start">
                <div class="col-4 mr-2 mb-4" v-for="(item, i) in searchResults">
                    <div class="card">
                        <i v-if="item.isPinned" class="fa-solid fa-thumbtack me-3 my-3 rotate" @click="noteStore.markedPinned(item.id)"></i>
                        <i v-else class="fa-solid fa-thumbtack me-3 mb-3" @click="noteStore.markedPinned(item.id)"></i>
                        <div class="card-body">
                            <h5 class="card-title">{{ item.title }}</h5>
                            <hr>
                            <p class="card-text">{{ item.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { useNoteStore } from '../store/note_store';
import { storeToRefs } from 'pinia'

const noteStore = useNoteStore()
const { searchResults } = storeToRefs(noteStore)
</script>

<style scoped></style>