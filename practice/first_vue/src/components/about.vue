<template>
    <div>
        <h1>About</h1>
        <p>數量: {{count}}</p>
        <p>姓名: {{user.name}}</p>
        <p>年齡: {{user.age}}</p>
        <button @click='increase'>增加數量</button>
        <!-- 若只增加count數量，可改為@click='count++' -->
    </div>
</template>

<script setup>
import {ref, reactive, onMounted, onBeforeMount} from 'vue';
const count = ref(0);
const user = reactive ({
    name: 'Renee', age: 26,
});
function increase(){
    count.value++,
    user.age++
}
onMounted (() => {
    alert("before loading");
})
onBeforeMount(() => {
    console.log('complete');
})

</script>

<style scoped>

</style>