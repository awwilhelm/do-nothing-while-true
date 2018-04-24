<template>
  <div>
    <div class="view-events">
      <table class="table table-hover events-table">
        <thead>
          <tr>
            <th scope="col">Event Name</th>
            <th scope="col">Date</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in message.events" :key="`item-${index}`" v-on:click="viewItem(index)">
            <td>{{item.title}}</td>
            <td>{{item.date.toString()}}</td>
            <td>{{item.start}}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-primary" id="show-modal" @click="$modal.show('create-event')">Create Event</button>
    </div>
    

    <modal height="auto" name="create-event">
      <event-create />
    </modal>
    
    <modal height="auto" name="edit-event" @before-open="beforeOpen" @before-close="beforeClose">
      <event-edit :eventid=eventid />
    </modal>
  </div>
</template>

<script src="./TableList.js"></script>
<style scoped src="./TableList.scss"></style>
