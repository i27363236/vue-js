<template>
    <div class="container pt-5">
        <form method="get" @submit.prevent="data">
            <!-- form通常會加上 method="post"(不會直接顯示輸入的內容) action="接收資料的網址" -->
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" v-model="email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="password" v-model="password">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const email = ref('')
    const password = ref('')
    function data (){
        console.log('email=', email.value);
        console.log('password=', password.value);
    }

</script>

<style scoped></style>