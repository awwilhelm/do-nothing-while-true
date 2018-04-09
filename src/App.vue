<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/finalLogo.png">
      <button v-show="[''].indexOf($route.name) <= -1" class="btn logout" v-on:click="logout()"> Logout </button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import router from '@/router/index.js';
export default {
  name: 'App',
  methods: {
    logout: function () {
      this.$cookies.remove("username");
      this.$cookies.remove("password");
      router.push({ path: '/client/login' });
    },
  },
};
</script>

<style>
html {
  /* background: #868686; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo {
  left: 20px;
  top: 20px;
  height: 100px;
  margin: 10px;
}
.logout {
  height: 30px;
  width: 70px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
}
</style>
