<script setup>
import { ref } from 'vue'
import { useNoteStore } from '../stores/NoteStore'
import { useRouter, useRoute } from 'vue-router'

// 路由和筆記儲存
const route = useRoute()
const router = useRouter()
const noteStore = useNoteStore()

// 取得當前筆記
const noteId = Number(route.params.id)
const currentNote = noteStore.notes.find(note => note.id === noteId)

// 標題和內容
const noteTitle = ref(currentNote ? currentNote.title : '')
const noteContent = ref(currentNote ? currentNote.content : '')
const showSuccess = ref(false)

// 清空標題預設文字
function clearTitlePlaceholder() {
  document.getElementById('title').placeholder = ''
}

// 清空內容
function clearContent() {
  noteContent.value = ''
}

// 更新筆記
function saveNote() {
  if (currentNote) {
    noteStore.editNote(currentNote.id, noteTitle.value, noteContent.value)
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
      router.push({ path: '/' });
    }, 1000)
  }
}
</script>

<template>
  <div class="container p-5">
    <!-- 成功提示 -->
    <div v-if="showSuccess" class="alert alert-success">
      筆記已更新！
    </div>

    <!-- 標題 -->
    <h2 class="mb-4">編輯筆記</h2>

    <!-- 表單 -->
    <form @submit.prevent="saveNote">
      <div class="mb-3">
        <input 
          type="text" 
          v-model="noteTitle" 
          class="form-control" 
          id="title" 
          placeholder="輸入標題..." 
          @focus="clearTitlePlaceholder"
        >
      </div>
      <div class="mb-3">
        <textarea 
          v-model="noteContent" 
          class="form-control" 
          id="note" 
          rows="10"
          placeholder="輸入內容..."
        ></textarea>
      </div>
      <button type="submit" class="btn btn-outline-success">
        保存 <i class="fa-solid fa-floppy-disk"></i>
      </button>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
}
.alert-success {
  transition: opacity 0.3s ease;
}
.btn-outline-success {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
form {
  position: relative;
}
textarea {
  resize: vertical;
}
</style>