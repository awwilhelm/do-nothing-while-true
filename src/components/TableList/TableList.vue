<template>
  <div>
    <div>TableList</div>
    <br />
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
          <tr v-for="(item, index) in message" :key="`item-${index}`" v-on:click="viewItem(item.id)">
            <td>{{item.orgName}}</td>
            <td>{{item.date.toString()}}</td>
            <td>{{item.start}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="./TableList.js"></script>
<style scoped src="./TableList.scss"></style>
