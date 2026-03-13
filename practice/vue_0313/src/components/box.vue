<template>
    <div class="container" 
    @keydown.enter="changeColor('gold')" tabindex="0" 
    @keydown.w="move_up" @keydown.s="move_down" 
    @keydown.a="move_left" @keydown.d="move_right">

        <div class="box" 
        :style="{backgroundColor: bg_color, 
            top: y +'px', left: x+'px'}"></div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const bg_color = ref('darksalmon')
const x = ref(0)
const y = ref(0)

function changeColor(color){
    bg_color.value = color;
}

function move_up(){
    y.value -= 30
}
function move_down(){
    y.value += 30
}
function move_left(){
    x.value -= 30
}
function move_right(){
    x.value += 30
}
</script>

<style scoped>
.container{
    height: 600px;
}
.box{
    width: 200PX;
    height: 100PX;
    background-color:darksalmon;
    position: relative;
    top: 0;
    left: 0;
    transition: all 0.3s;
}

</style>