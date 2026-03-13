<script setup>
</script>

<template>
  <div class="container p-5">
    <div class="row">
      
      <div class="col-3">
        <ul class="list-group">
          <router-link to="/helloWorld">
            <li class="list-group-item">HelloWorld</li>
          </router-link>
          <router-link to="/event">
            <li class="list-group-item">Event</li>
          </router-link>
          <router-link to="/syntax">
            <li class="list-group-item">Syntax</li>
          </router-link>
          <router-link to="/syntax">
            <li class="list-group-item">Syntax</li>
          </router-link>
        </ul>
      </div>

      <div class="col-9">
        <router-view></router-view>
      </div>


    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
