<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <span>Username</span> <input class="form-control" v-model="login.username"/>
      </div>
      <div>
        <span>Password</span> <input class="form-control" type="password" v-model="login.password"/>
      </div>
      <button class="btn submit" type="submit">Submit</button>
    </form>
  </div>
</template>

<script src="./Login.js"></script>
<style scoped src="./Login.scss"></style>
