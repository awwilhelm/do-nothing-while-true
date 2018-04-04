<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <span>Username</span> <input v-model="login.username"/>
      </div>
      <div>
        <span>Password</span> <input type="password" v-model="login.password"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script src="./Login.js"></script>
<style scoped src="./Login.scss"></style>
