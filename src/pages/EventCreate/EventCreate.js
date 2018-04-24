import router from '@/router/index.js';
import docClient from '@/services/aws.js';

import Vue from 'vue';
import VModal from 'vue-js-modal';

export default {
  name: 'eventcreate',
  data: function() {
    data.item = {};
    var params = {
      TableName: 'OrganizationEvents',
      Key: {
        "username": this.$cookies.get("username")
      }
    };

    docClient.get(params, function(err, newData) {
      if (err) {
        console.log("Error", err);
      } else {
        data.oldItem = newData.Item;
      }
    });
    return data;
  },
  computed: {
    isLoaded: function() {
      if(this.oldItem.hasOwnProperty('orgName')) {
        return true;
      }
      return false;
    }
  },
  methods: {
    handleSubmit() {
      let tempThis = this;
      if(this.item.title && this.item.description &&
         this.item.repeating &&
         this.item.start && this.item.end &&
         this.item.date && this.item.location) {
        data.oldItem.events.push(this.item);
        var params = {
          TableName: 'OrganizationEvents',
          Item: data.oldItem
        };
    
        docClient.put(params, function(err, newData) {
          if (err) {
            console.log("Error", err);
          } else {
            this.item = {};
            router.push({ path: '/client/event' });
            tempThis.$modal.hide('create-event');
            location.reload();
          }
        });
      }
      this.errors = [];
      if(!this.item.title) this.errors.push("Title required.");
      if(!this.item.description) this.errors.push("Description required.");
      if(!this.item.repeating) this.errors.push("Repeating required.");
      if(!this.item.start) this.errors.push("Start required.");
      if(!this.item.end) this.errors.push("End required.");
      if(!this.item.date) this.errors.push("Date required.");
      if(!this.item.location) this.errors.push("Location required.");
        

    }
  }
};

let data = {
  item: {},
  errors: [],
  oldItem: {}
};