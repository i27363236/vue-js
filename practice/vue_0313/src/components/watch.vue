<template>
    <div>
        <textarea type="textarea" v-model="inputValue" placeholder="say something"></textarea>
        <p>輸入的文字長度：{{ wordLength }}</p>

        <p class="mt-5">{{ inputValue }}</p>
        <button class="btn btn-danger">Notification</button>
        <button class="btn btn-outline-danger" @click="updateMessage">Update</button>

    </div>
</template>

<script setup>
import {ref, watch, watchEffect} from 'vue';

const inputValue = ref('');
const wordLength = ref(0);

watch (inputValue, (newVal)=>{
    wordLength.value = newVal.length;
})

watchEffect (()=>{
    console.log('I Don\'t Car!', inputValue.value);
    console.log(wordLength.value);
})
</script>

<style scoped>

</style>