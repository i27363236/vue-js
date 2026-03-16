<template>
    <div class="container p-5">
        <div class="row">
            <div class="col-8">
                <ul class="list-group ">
                    <li class="list-group-item d-flex justify-content-between align-items-center"
                        v-for="item in products">
                        <span>{{ item.name }}- 一斤{{ item.price }}元</span>
                        <div class="w-30 text-end">
                            <button class="btn btn-warning me-3" @click="myCart.addCart(item)" v-if="item.stock">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                            <button class="btn btn-warning me-3" disabled v-else>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>

                    </li>
                </ul>
            </div>



            <div class="col-10">
                <p v-for="stock in myCart.showStock">庫存量：{{ stock.name }}無庫存</p>
                <h1>我的購物車</h1>
                <h2 v-if="carts.length == 0">目前無商品</h2>
                <form action="" @submit.prevent="" v-else>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(cart_item, i) in carts">
                            <div class="w-75 d-flex justify-content-between align-items-center">
                                <span>{{cart_item.name}}</span>
                                <input type="number" class="form-control w-25" value="1" v-model="cart_item.quantity">
                                <span>小計: {{ cart_item.price * cart_item.quantity }}</span>
                            </div>

                            <div class="w-25 text-end">
                                <button class="btn btn-outline-secondary me-3" @click="myCart.removeCart(i)">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-end">
                            <h3>總金額: NT$ {{myCart.totalPrice}}元</h3>
                        </li>
                        <li class="list-group-item d-flex justify-content-end">
                            <button type="submit" class="btn btn-info">我要結帳</button>
                        </li>
                    </ul>
                </form>
            </div>

        </div>

    </div>
</template>

<script setup>
import { cartStore } from '../stores/cart_stores'
import { storeToRefs } from 'pinia';
const myCart = cartStore();
const { products, carts } = storeToRefs(myCart)
</script>

<style scoped>
</style>