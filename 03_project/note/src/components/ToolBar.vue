<script setup>
import { ref } from 'vue';
// 引入 NoteStore 用於管理筆記狀態
import { useNoteStore } from '../stores/NoteStore'
// 引入 vue-router 的 useRouter 用於路由操作
import { useRouter } from 'vue-router';
// 取得 NoteStore 實例
const noteStore = useNoteStore()
// 取得 router 實例
const router = useRouter();
// 定義響應式搜尋關鍵字
const keyword = ref("")

// 執行筆記搜尋並跳轉到搜尋結果頁面
const searchNotes = async () => {
  // 根據關鍵字搜尋筆記
  const results = await noteStore.searchNotes(keyword.value);
  console.log(results) // 輸出搜尋結果
  // 跳轉到 'search' 路由並傳遞搜尋結果
  router.push({ name: 'search', params: { searchResults: results } });
}

// 清除搜尋輸入框的 placeholder
const clearPlaceholder = () => {
  document.querySelector('#keyword').placeholder = ''
}


</script>
<template>
    
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid d-flex">
            <router-link :to="{ name: 'grid' }" class="navbar-brand">
                <img class="logo" src="/logo.png" alt="">&nbsp;Quick Note
            </router-link>
            <form class="d-flex" @submit.prevent="$emit('search', keyword)">
                <input id="keyword" v-model="keyword" class="form-control me-2" @keyup.enter="searchNotes()" type="search" placeholder="Search" aria-label="Search" @focus="clearPlaceholder">
                <button class="btn" type="submit" @click="searchNotes()"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            </div>
        </nav>
</template>
<style scoped>
.logo{
    width: 100px;
}
.btn:active{
    outline: none;
}
</style>