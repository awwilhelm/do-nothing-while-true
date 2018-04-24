import router from '@/router/index.js';
import docClient from '@/services/aws.js';
import Vue from 'vue';
import VModal from 'vue-js-modal';

export default {
  name: 'eventedit',
  props: ['eventid'],
  data: function() {
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
        data.item = newData.Item;
      }
    });
    return data;
  },
  computed: {
    isLoaded: function() {
      if(this.item.hasOwnProperty('orgName')) {
        return true;
      }
      return false;
    }
  },
  methods: {
    handleSubmit() {
      let tempThis = this;
      if(this.item.events[this.eventid].title && this.item.events[this.eventid].description &&
         this.item.events[this.eventid].repeating && this.item.events[this.eventid].start && 
         this.item.events[this.eventid].end && this.item.events[this.eventid].date &&
         this.item.events[this.eventid].location) {
        var params = {
          TableName: 'OrganizationEvents',
          Key: {
            "username": this.$cookies.get("username")
          },
          Item: data.item
        };
    
        docClient.put(params, function(err, newData) {
          if (err) {
            console.log("Error", err);
          } else {
            router.push({ path: '/client/event' });
            //location.reload();
            //tempThis.$modal.hide('edit-event');
          }
        });
      }
      this.errors = [];
      if(!this.item.events[this.eventid].title) this.errors.push("Title required.");
      if(!this.item.events[this.eventid].description) this.errors.push("Description required.");
      if(!this.item.events[this.eventid].repeating) this.errors.push("Repeating required.");
      if(!this.item.events[this.eventid].start) this.errors.push("Start required.");
      if(!this.item.events[this.eventid].end) this.errors.push("End required.");
      if(!this.item.events[this.eventid].date) this.errors.push("Date required.");
      if(!this.item.events[this.eventid].location) this.errors.push("Location required.");
    },
    deleteEvent(item, eventid) {
      item.events.splice(eventid, 1);
      var params = {
        TableName: 'OrganizationEvents',
        Key: {
          "username": this.$cookies.get("username")
        },
        Item: item
      };
  
      docClient.put(params, function(err, newData) {
        if (err) {
          console.log("Error", err);
        } else {
          // router.push({ path: '/client/event' });
          location.reload();
          // tempThis.$modal.hide('edit-event');
        }
      });
    },
  }
};

let data = {
  item: {},
  errors: []
};