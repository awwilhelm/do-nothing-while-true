<template>
  <div>
    EventList
    <table-list :message="eventList"></table-list>
    <button v-on:click="createEvent()">Create Event</button>
    <button v-on:click="viewEvent(1)">View Event</button>
    {{login}}
  </div>
</template>

<script src="./EventList.js"></script>
<style scoped src="./EventList.scss"></style>
