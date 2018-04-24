<template>
  <div>
    <form class="overall-formatting" @submit.prevent="handleSubmit">
      
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="`error-${index}`">{{ error }}</li>
        </ul>
      </p>
      <div class="individual-formatting" v-if="isLoaded">
        <span>Orginization Name: </span> <span>{{item.orgName}}</span>
      </div>
      <div class="individual-formatting" v-if="isLoaded">
        <span>Title</span> <input v-model="item.events[eventid].title"/>
      </div>
      <div class="individual-formatting" v-if="isLoaded">
        <span>Description</span> <input v-model="item.events[eventid].description"/>
      </div>
      <div class="individual-formatting" v-if="isLoaded">
        <span>Repeating</span>
        <select v-model="item.events[eventid].repeating">
          <option value="weekly" selected="selected">Weekly</option>
          <option value="biweekly">Bi-Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div class="individual-formatting" v-if="isLoaded">
        <span>Start</span> <input type="time" v-model="item.events[eventid].start"/>
      </div>
      <div class="individual-formatting" v-if="isLoaded">
        <span>End</span> <input type="time" v-model="item.events[eventid].end"/>
      </div>
      <div class="individual-formatting" v-if="isLoaded">
        <span>Date</span> <input type="date" v-model="item.events[eventid].date"/>
      </div>
      <div class="individual-formatting" v-if="isLoaded">
        <span>Location</span> <input v-model="item.events[eventid].location"/>
      </div>
      <button class="btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script src="./EventEdit.js"></script>
<style scoped src="./EventEdit.scss"></style>
