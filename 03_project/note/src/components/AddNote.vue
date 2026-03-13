<script setup>
import {ref} from 'vue'
import { useNoteStore } from '../stores/NoteStore'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'

// 路由和筆記儲存
const route = useRoute()
const router = useRouter()
const newNoteTitle = ref('')
const newNoteContent = ref('筆記內容...')
const noteStore = useNoteStore()
const { notes } = storeToRefs(noteStore)
const { addNote } = noteStore
const showSuccessAlert = ref(false)
//清空標題的input placeholder
function clearPlaceholder() {
  document.querySelector('#title').placeholder = ''
  
}
//清空文字輸入區域
function clearTextArea()  {
  newNoteContent.value = ''
}
function createNote(){
  if (newNoteTitle.value) {
    addNote(newNoteTitle.value, newNoteContent.value);
    // 顯示更新成功消息
    showSuccessAlert.value = true;

    // 設置一個計時器，在 2 秒後隱藏消息
    setTimeout(() => {
      showSuccessAlert.value = false;
      router.push({ path: '/' });
    }, 1000);
  }
}
</script>
<template>
<div class="container p-5">
  <main>
    <h2 class="mb-5">新增筆記</h2>
    <form @submit.prevent="createNote">
      <div class="mb-3">
          <input type="text" v-model="newNoteTitle" class="form-control" id="title" placeholder="請輸入標題..." @focus="clearPlaceholder">
      </div>
      <div class="mb-3">
          <textarea class="form-control" id="note" rows="20" v-model="newNoteContent" @focus="clearTextArea">筆記內容...</textarea>
      </div>
      <button type="submit" class="btn btn-outline-success">儲存 <i class="fa-solid fa-floppy-disk"></i></button>
    </form>
  </main>
</div>

</template>
<style scoped>
form{
    position: relative;
}
.btn-outline-success{
    position: absolute;
    bottom: 20px;
    right: 20px;
}
</style>

