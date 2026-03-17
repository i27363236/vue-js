<script setup>

import ProductItem from './components/ProductItem.vue'

</script>

<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-10">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">
              Pinia購物車
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/axios" class="nav-link active">Axios Demo</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
  <ProductItem />
</template>
