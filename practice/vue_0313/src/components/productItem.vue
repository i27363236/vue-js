<template>
    <div class="mb-3">
        <span class="me-3">{{name}}一斤{{price}}元</span>
        <button class="btn btn-outline-info" @click="addCart">add cart</button>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'
    const props = defineProps(['name', 'price'])

    const emit = defineEmits(['add-cart'])
    const addCart = ()=> {
        emit('add-cart', props.price)
    }
</script>

<style scoped>

</style>