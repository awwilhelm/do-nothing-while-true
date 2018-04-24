<template>
  <div>
    <div class="orgName">{{eventList.orgName}}</div>
    <table-list :message="eventList"></table-list>
    <!-- use the modal component, pass in the prop -->
    
    
  </div>
</template>

<script src="./EventList.js"></script>
<style scoped src="./EventList.scss"></style>
