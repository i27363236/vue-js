<script setup>
import TopBar from './components/TopBar.vue';
import NoteList from './components/NoteList.vue';
</script>

<template>
  <div class="col-12">
        <TopBar/>
      </div>
  <div class="container">
    <div class="row">

      

      <div class="col-12 col-md-3">
        <NoteList/>
      </div>

      <div class="col-12 col-md-9">
        <router-view></router-view>
      </div>

      <footer class="fixed-bottom">
        <p>copyright&copy;Quokkahan.com</p>
      </footer>

    </div>
  </div>
</template>

<style>
footer{
  height: 50px;
  width: 100%;
  background-color: rgb(44, 84, 117);
  text-align: center;
}
footer p{
  color: white;
  line-height: 50px;
}
</style>
