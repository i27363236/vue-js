<script setup>
import {ref, onMounted} from 'vue'
// 引入 NoteStore 以管理筆記狀態
import { useNoteStore } from '../stores/NoteStore'
import { useRouter } from 'vue-router'

// 路由
const router = useRouter()
// 定義發送事件 'selectNote'
const emit = defineEmits(['selectNote'])
// 取得 NoteStore 實例及相關方法
const noteStore = useNoteStore()
const { deleteNote, markedPinned } = noteStore
// 儲存當前選中的筆記 ID
let selectedNoteId = ref(false)
let deleteModal = null
// 初始化模態框
onMounted(() => {
   deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'))
})

// 顯示刪除確認模態框
const showDeleteModal = (note) => {
  selectedNoteId.value = note.id
  
  deleteModal.show()
}

// 確認刪除筆記並關閉模態框
const confirmDelete = () => {
  if (selectedNoteId.value != false) {
    deleteNote(selectedNoteId.value) // 刪除指定筆記
  } else {
    modal.innerHTML("找不到此筆資料!") // 錯誤提示
  }
  // 關閉模態框並移除背景遮罩
  deleteModal.hide()
  // 跳轉到 'add' 路由
  router.push({ name: 'add' })
}
</script>
<template>
<div class="sidebar">
  <router-link :to="{ name: 'add'}" class="d-flex justify-content-around" >
    <button class="mt-3 btn btn-warning">新增筆記</button>
  </router-link>
  <div class="container">
    <div class="row">
        <div class="col-12">
        <h5 class="pt-3"><i class="fa-solid fa-thumbtack"></i>&nbsp;&nbsp;重要</h5>
        <ul class="list-group">
            <li v-for="note in noteStore.pinnedNotes" :key="note.id" class="list-group-item d-flex justify-content-around">
                <router-link :to="{ name: 'edit', params: { id: note.id } }">
                <div class="note-title">{{ note.title }}</div>
                </router-link>
                <div class="icon-group d-flex justify-content-around me-3">
                    <i class="fa-solid fa-thumbtack me-3 rotate" @click="markedPinned(note.id)"></i>
                    <span><i class="fa-solid fa-trash" @click="showDeleteModal(note)"></i></span>
                </div>
                
            </li>
        </ul>
        <h5 class="pt-3"><i class="fa-solid fa-list"></i>&nbsp;全部</h5>
        <ul class="list-group">
            <li v-for="note in noteStore.allNotes" :key="note.id" class="list-group-item d-flex justify-content-around">
            <router-link :to="{ name: 'edit', params: { id: note.id } }" >
                <div class="note-title">{{ note.title }}</div>
            </router-link>  
                <div class="icon-group d-flex justify-content-around me-3">
                    <span><i class="fa-solid fa-thumbtack" @click="markedPinned(note.id)"></i></span>
                    <span><i class="fa-solid fa-trash" @click="showDeleteModal(note)"></i></span>
                </div>
            
            </li>
        </ul>
        </div>
    </div>
  </div>
  
</div>
<div class="modal fade" tabindex="-1" id="deleteModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">刪除資料</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>確定刪除此筆資料?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" @click="confirmDelete">確定</button>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
  .btn-warning{
    width: 80%;
  }
  h5{
    text-align: left;
  }
  .r45{
    transform: rotate(45deg);
    color: rgb(255, 81, 0);
  }
  .note-title{
    font-size: 18px;
    font-weight: bold;
    width: 60%;
  }
  .icon-group span:first-child{
    margin-right: 30px;
  }
  .icon-group i{
    cursor: pointer;
  }
  .icon-group i:hover{
    color: rgb(255, 81, 0);
  }
  .list-group{
    width: 100%;
    border-radius: 0px;
  }
  .list-group-item a{
    text-decoration: none;
    width: 100%;
    color: #666;
  }
  .list-group-item a:hover{
    color: #000;
  }
  .list-group-item{
    border: none;
    padding: 15px 0px;
    background: transparent;
    cursor: pointer;

  }
  .list-group-item:hover{
    background-color: rgb(247, 229, 180);
  }
  .list-group-item.active{
    background-color: rgb(244, 215, 109);
  }
  .sidebar{
    width: 100%;
    background: #f0f0f0;
    height: 80vh;
  }
  .modal {
    transition: opacity 0.3s ease;
  }
  .rotate{
    color: red;
    transform: rotate(45deg);
  }
</style>

