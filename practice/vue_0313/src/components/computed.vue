<template>
    <div>
        <h1>計數器</h1>
        <p>記數：{{ count }}</p>
        <p>數字2倍：{{ doublecount }}</p>
        <button class="btn btn-warning" @click="increment">增加</button>
        <button class="btn btn-outline-warning" @click="increment2">增加</button>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const count = ref(0)

const doublecount = computed(() => {
    count.value * 2
})

function increment() {
    count.value++
}
function increment2() {
    doublecount.value++
}
</script>

<style scoped></style>