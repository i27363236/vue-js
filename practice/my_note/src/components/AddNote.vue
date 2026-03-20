<script setup>
import { useNoteStore } from '../store/note_store';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('')
const content = ref('')
const noteStore = useNoteStore()
const showAlert = ref(false)
const invaildShow1 = ref(false)
const invaildShow2 = ref(false)

function clearPlaceholder() {
    document.querySelector('#title').placeholder = ''
    invaildShow1.value = false
}
function addPlaceholder() {
    document.querySelector('#title').placeholder = '請輸入標題...'
    if(title.value === '') invaildShow1.value = true
}
function checkContent (){
    if(content.value === '') invaildShow2.value = true
    else invaildShow2.value = false
}
function createNote() {
    if (title.value === '') return
    const res = noteStore.addNote({
        title1: title.value,
        content1: content.value
    })
    if (res) {
        // title.value = ''
        // content.value = ''
        showAlert.value = true
        setTimeout(function () {
            showAlert.value = false
            router.push('/')
        }, 2500)
    }
}

</script>



<template>
    <div class="container p-5">
        <div v-show="showAlert" class="alert alert-success text-left" role="alert">
            新增成功!
        </div>
        
        <h2 class="my-4">新增筆記</h2>

        <form @submit.prevent="createNote">
            <div class="mb-3">
                <input type="text" class="form-control" id="title" placeholder="請輸入標題..." @focus="clearPlaceholder" @blur="addPlaceholder" v-model="title">
                <p v-show="invalidShow1" class="invalid">請輸入標題</p>
            </div>
            <div class="mb-3">
                <textarea class="form-control" id="note" rows="10" v-model="content"></textarea>
                <p v-show="invalidShow2" class="invalid">請輸入內容</p>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-outline-success">新增 <i class="fa-solid fa-floppy-disk"></i></button>
            </div>
        </form>

    </div>
</template>

<style scoped></style>