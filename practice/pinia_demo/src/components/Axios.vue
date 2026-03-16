<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <h2>Axios載入資料</h2>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onBeforeMount } from 'vue'
const products = ref ([])
onBeforeMount(async () =>{
    try{
        const respone = await axios.get('')
        console.log(Response.data.record)
        products = respone.data.record
        console.log('products=', products);
    }catch(error){
        console.log(error);
    }
})
</script>

<style scoped>

</style>