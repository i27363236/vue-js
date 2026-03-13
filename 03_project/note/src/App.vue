
<script setup>

import ToolBar from './components/ToolBar.vue';
import NoteList from './components/NoteList.vue'

</script>
<template>
  <header>
    <ToolBar></ToolBar>
  </header>  
  <div class="container-fluid">
    <div class="row">
        <div class="col-3">
            <NoteList></NoteList>
        </div>
        <div class="col-9">
            <router-view />
        </div>
    </div>
  </div>
  <footer class="">
    <p>Copyright© macroviz.com</p>
  </footer>
</template>
<style scoped>
footer{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
}
footer p{
    color: white;
    line-height: 50px;
    text-align: center;
}
</style>
