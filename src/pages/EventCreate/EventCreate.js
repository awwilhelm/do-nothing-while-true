import router from '@/router/index.js';
import docClient from '@/services/aws.js';

export default {
  data: function() {
    return data;
  },
  methods: {
    handleSubmit() {
      
      
      if(this.item.orgName && this.item.title && this.item.description && this.item.orgLink && this.item.repeating && this.item.start && this.item.end && this.item.date && this.item.location) {
        var params = {
          TableName: 'Events',
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
      if(!this.item.orgName) this.errors.push("Orginization name required.");
      if(!this.item.title) this.errors.push("Title required.");
      if(!this.item.description) this.errors.push("Description required.");
      if(!this.item.orgLink) this.errors.push("Orginization Link required.");
      if(!this.item.repeating) this.errors.push("Repeating required.");
      if(!this.item.start) this.errors.push("Start required.");
      if(!this.item.end) this.errors.push("End required.");
      if(!this.item.date) this.errors.push("Date required.");
      if(!this.item.location) this.errors.push("Location required.");


    }
  }
};

let data = {
  item: {id: 5},
  errors: []
};