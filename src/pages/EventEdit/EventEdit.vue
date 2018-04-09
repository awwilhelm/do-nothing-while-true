<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="`error-${index}`">{{ error }}</li>
        </ul>
      </p>
      <div v-if="isLoaded">
        <span>Orginization Name: </span> <span>{{item.orgName}}</span>
      </div>
      <div v-if="isLoaded">
        <span>Title</span> <input v-model="item.events[$route.params.eventid].title"/>
      </div>
      <div v-if="isLoaded">
        <span>Description</span> <input v-model="item.events[$route.params.eventid].description"/>
      </div>
      <div v-if="isLoaded">
        <span>Repeating</span> <input v-model="item.events[$route.params.eventid].repeating"/>
      </div>
      <div v-if="isLoaded">
        <span>Start</span> <input v-model="item.events[$route.params.eventid].start"/>
      </div>
      <div v-if="isLoaded">
        <span>End</span> <input v-model="item.events[$route.params.eventid].end"/>
      </div>
      <div v-if="isLoaded">
        <span>Date</span> <input v-model="item.events[$route.params.eventid].date"/>
      </div>
      <div v-if="isLoaded">
        <span>Location</span> <input v-model="item.events[$route.params.eventid].location"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script src="./EventEdit.js"></script>
<style scoped src="./EventEdit.scss"></style>
