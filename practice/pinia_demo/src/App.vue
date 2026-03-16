<script setup>
import ProductItem from './components/ProductItem.vue'
import Axios from './components/Axios.vue'
</script>

<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-10">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link to="." class="nav-link active">
              Pinia購物車
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Axios Demo</router-link>
          </li>
        </ul>
      </div>
      <div class="col-10">
        <router-view></router-view>
      </div>

    </div>
  </div>
  <ProductItem />
</template>
