<template>
    <h1>事件</h1>
    <div class="box" :style="{backgroundColor: bg_color}" @mouseenter="changeColor('burlywood')"></div>
    <div class="btn-group">
        <button id="scroll" @wheel.passive="changeColor('pink')">滾動換顏色</button>
        <button id="red" @click="changeColor('tomato')">點擊換顏色</button>
        <button id="green" @click="changeColor('yellowgreen')">點擊換顏色</button>
        <button id="blue" @click="changeColor('lightblue')">點擊換顏色</button>
    </div>


</template>

<script setup>
import { ref } from 'vue';
const bg_color = ref('default');
function changeColor(color) {
    console.log(color);
    bg_color.value = color;
}

</script>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: burlywood;
}

button {
    margin-right: 10px;
}
.btn-group {
    width: 600px;
    display: flex;
    justify-content: flex-start;
    padding: 10px;
}
</style>