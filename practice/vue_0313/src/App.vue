<script setup>
import {ref} from 'vue'
const url = ref('/box')
import productItem from './components/productItem.vue';

const totalPrice = ref(0)
const updateTotal = (price) => {
  totalPrice.value += price
}
</script>

<template>
  <div class="container p-5">
    <div class="row">

      <div class="col-3">
        <ul class="list-group">
          <router-link :to="url"><li class="list-group-item">Box</li></router-link>
          <router-link to="/computed"><li class="list-group-item">Computed</li></router-link>
          <router-link to="/form"><li class="list-group-item">Form</li></router-link>
          <router-link to="/helloWorld"><li class="list-group-item">Helloworld</li></router-link>
          <router-link :to="{name: 'watch'}"><li class="list-group-item">Watch</li></router-link>
          <!-- <router-link to="/product"><li class="list-group-item">購物車</li></router-link> -->
        </ul>
      </div>

      <div class="col-9">
        <router-view></router-view>

        <productItem :name="'藍莓'" :price="20" @add-cart="updateTotal"></productItem>
        <productItem :name="'草莓'" :price="30" @add-cart="updateTotal"></productItem>
        <h2>總額：{{ totalPrice }}元</h2>

      </div>

    </div>
  </div>

</template>
