<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="`error-${index}`">{{ error }}</li>
        </ul>
      </p>
      <div>
        <span>Orginization Name: </span> <span>{{item.orgName}}</span>
      </div>
      <div>
        <span>Title</span> <input v-model="item.title"/>
      </div>
      <div>
        <span>Description</span> <input v-model="item.description"/>
      </div>
      <div>
        <span>Orginization Link</span> <input v-model="item.orgLink"/>
      </div>
      <div>
        <span>Repeating</span> <input v-model="item.repeating"/>
      </div>
      <div>
        <span>Start</span> <input v-model="item.start"/>
      </div>
      <div>
        <span>End</span> <input v-model="item.end"/>
      </div>
      <div>
        <span>Date</span> <input v-model="item.date"/>
      </div>
      <div>
        <span>Location</span> <input v-model="item.location"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script src="./EventEdit.js"></script>
<style scoped src="./EventEdit.scss"></style>
