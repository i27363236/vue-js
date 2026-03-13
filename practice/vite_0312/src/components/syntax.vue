<template>
    <div>
        <h1>vue3練習</h1>
        <p>{{message}}</p>
        <p :class="{active: isActive, underline}">I just wanna lay in my bed</p>
        <p :style="style1">Don't feel like picking up my phone</p>
        <div :class="box"></div>
        <div class="container">
            <input type="text" :placeholder="text" v-for="text in placeholderTexts">
        <img src="../assets/vue.svg" :alt="alt_text">
        </div>
        
        
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const message = ref('Today I don\'t feel like doing anything');
    const isActive = ref(true);
    const underline = ref("underline");
    const box = ref("box1");
    const style1= ref({color: "steelblue", textDecoration: 'underline'})
    const placeholderTexts = ref(["請輸入電話", "請輸入姓名", "請輸入地址"])
    const alt_text = ref("vue logo")

</script>

<style scoped>
    .active {
        font-size: 30px;
        font-weight: bold;
        color: gold;
    }
    .underline{
        text-decoration: underline;
    }
    .box1{
        width: 100px;
        height: 100px;
        background-color: thistle;
    }
    input{
        display: block;
    }
</style>