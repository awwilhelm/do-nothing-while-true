import router from '@/router/index.js';
import docClient from '@/services/aws.js';

export default {
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
        console.log(data);
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
      if(this.item.events[this.$route.params.eventid].title && this.item.events[this.$route.params.eventid].description &&
         this.item.events[this.$route.params.eventid].repeating && this.item.events[this.$route.params.eventid].start && 
         this.item.events[this.$route.params.eventid].end && this.item.events[this.$route.params.eventid].date &&
         this.item.events[this.$route.params.eventid].location) {
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
          }
        });
      }
      this.errors = [];
      if(!this.item.events[this.$route.params.eventid].title) this.errors.push("Title required.");
      if(!this.item.events[this.$route.params.eventid].description) this.errors.push("Description required.");
      if(!this.item.events[this.$route.params.eventid].repeating) this.errors.push("Repeating required.");
      if(!this.item.events[this.$route.params.eventid].start) this.errors.push("Start required.");
      if(!this.item.events[this.$route.params.eventid].end) this.errors.push("End required.");
      if(!this.item.events[this.$route.params.eventid].date) this.errors.push("Date required.");
      if(!this.item.events[this.$route.params.eventid].location) this.errors.push("Location required.");
    }
  }
};

let data = {
  item: {},
  errors: []
};