<template>
  <div>
    <form class="overall-formatting" @submit.prevent="handleSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="`error-${index}`">{{ error }}</li>
        </ul>
      </p>
      <!-- <div class="individual-formatting">
        {{item}}
        <span>Orginization Name: </span> <div>{{item.orgName}} </div>
      </div> -->
      <div class="individual-formatting">
        <span>Title</span> <input v-model="item.title"/>
      </div>
      <div class="individual-formatting">
        <span>Description</span> <input v-model="item.description"/>
      </div>
      <div class="individual-formatting">
        <span>Repeating</span>
        <select v-model="item.repeating">
          <option value="weekly" selected="selected">Weekly</option>
          <option value="biweekly">Bi-Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div class="individual-formatting">
        <span>Start</span> <input type="time" v-model="item.start"/>
      </div>
      <div class="individual-formatting">
        <span>End</span> <input type="time" v-model="item.end"/>
      </div>
      <div class="individual-formatting">
        <span>Date</span> <input type="date" v-model="item.date"/>
      </div>
      <div class="individual-formatting">
        <span>Location</span> <input v-model="item.location"/>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script src="./EventCreate.js"></script>
<style scoped src="./EventCreate.scss"></style>
