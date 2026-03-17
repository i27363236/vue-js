<template>
    <div>
        <h2>Axios載入資料</h2>
        <div class="container">
            <div class="row">
                <div class="col-3 mb-3" v-for="item in products">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ item-name }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{ item-category }}</h6>
                            <p class="card-text">{{ item.description }}</p>
                            <p class="card-text text-danger">{{ item.price }}</p>
                            <a href="" class="card-link">加入購物車</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onBeforeMount } from 'vue'
let products = ref ([])
onBeforeMount( async () =>{
    try{
        await axios.get('https://api.jsonbin.io/v3/b/69b7b183c3097a1dd52c24b4')
        .then(function(response){
            products.value = response.data.record
            console.log('products=', products);
        }).catch(function(error){
            console.error('請求失敗:', error);
        });
    }catch(error){
        console.log(error);
    }
})
</script>

<style scoped>

</style>