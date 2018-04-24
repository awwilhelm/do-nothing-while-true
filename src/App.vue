<template>
  <div id="app" class="background">
    <div class="header">
      <img v-show="[''].indexOf($route.meta.noLogo) > -1" class="logo" src="./assets/rawlogo2.png">
      <button v-show="[''].indexOf($route.name) <= -1" class="btn btn-info" v-on:click="logout()"> Logout </button>
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
html, body {
  height: 100vh;
  background: #1e5799;
  background: -moz-linear-gradient(top, #1e5799 0%, #2989d8 44%, #7db9e8 100%);
  background: -webkit-linear-gradient(top, #1e5799 0%,#2989d8 44%,#7db9e8 100%); 
  background: linear-gradient(to bottom, #1e5799 0%,#2989d8 44%,#7db9e8 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 );
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
