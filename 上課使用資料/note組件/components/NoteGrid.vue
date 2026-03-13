<script setup>

</script>
<template>
<main id="result" class="container mt-4">
    <div class="row d-flex justify-content-start">
        <div class="col-4 mr-2 mb-4">            
            <div class="card">
                <i class="fa-solid fa-thumbtack me-3 mb-3 rotate"></i>
                <div class="card-body">
                    <h5 class="card-title">筆記1</h5>
                    <hr>
                    <p class="card-text">12/1-12/12出國旅遊</p>
                </div>
            </div>
        </div>
        <div class="col-4 mr-2 mb-4">            
            <div class="card">
                <i class="fa-solid fa-thumbtack me-3 mb-3"></i>
                <div class="card-body">
                    <h5 class="card-title">筆記2</h5>
                    <hr>
                    <p class="card-text">12/1-12/12出國旅遊</p>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<style scoped>
.card i{
  position: relative;
  top: 10px;
  left: 10px;
}
.rotate{
  transform: rotate(45deg);
  color: red;
}
</style>