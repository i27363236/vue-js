<script setup>

</script>
<template>
<div class="container p-5">
  <div class="alert alert-success text-left" role="alert">
    更新成功!
  </div>
  <h2 class="mb-5">編輯筆記</h2>
  <form >
    <div class="mb-3">
        <input type="text" class="form-control" id="title" placeholder="請輸入標題...">
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="note" rows="20"></textarea>
    </div>
    <button class="btn btn-outline-success">更新 <i class="fa-solid fa-floppy-disk"></i></button>
  </form>
</div>

</template>

<style scoped>
  
</style>