<template>
  <div>
    <table-list :message="eventList"></table-list>
    <button v-on:click="createEvent()">Create Event</button>
  </div>
</template>

<script src="./EventList.js"></script>
<style scoped src="./EventList.scss"></style>
