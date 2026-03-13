<script setup>
import ToolBar from './components/ToolBar.vue';
import NoteList from './components/NoteList.vue';

</script>

<template>
  <ToolBar></ToolBar>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <!-- NoteList -->
        <NoteList></NoteList>
      </div>
      <div class="col-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <footer class="fixed-bottom">
    <p>Copyright marcroviz.com</p>
  </footer>
</template>

<style scoped>
footer{
  height: 50px;
  text-align: center;
  background-color: black;
  text-align: center;
}
footer p{
  color: white;
  line-height: 50px;
}
</style>
