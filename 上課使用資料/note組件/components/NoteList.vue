<script setup>

</script>
<template>
  <div class="sidebar">
    <div class="container">
    <router-link :to="{name: 'add_note'}">
      <button class="mt-3 btn btn-warning">新增筆記</button>
    </router-link>
      
      <h5 class="mt-4">筆記列表</h5>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between">
          <span>項目1</span>
          <div class="icon-group">
            <i class="fa-solid fa-pen-to-square me-3"></i>
            <i class="fa-solid fa-trash"></i>
          </div>
        </li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
  </div>
  
</template>

<style scoped>
.icon-group{
  display: flex;
  width: 50px;
  justify-content: space-between;
  align-items: center;
}
.icon-group i{
  cursor: pointer;
}
.icon-group i:hover{
  color:chocolate;
}

</style>