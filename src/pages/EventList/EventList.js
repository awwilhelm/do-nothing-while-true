import TableList from '@/components/TableList/TableList.vue';
import router from '@/router/index.js';
import docClient from '@/services/aws.js';

export default {
  components: {
    TableList,
  },
  methods: {
    createEvent: function () {
      router.push({ path: '/client/event/create' });
    },
    viewEvent: function (id) {
      router.push({ path: `/client/event/${id}/edit` });
    }
  },
  data: function() {
    var params = {
      TableName: 'OrganizationEvents',
      Key: {
        "username": this.$cookies.get("username")
      }
      
    };

    data.login.username = this.$cookies.get("username");
    data.login.password = this.$cookies.get("password");

    
    
    docClient.get(params, function(err, newData) {
      if (err) {
        console.log("Error", err);
      } else {
        data.eventList = newData.Item;
        console.log(data.eventList.events);
      }
    });

    return data;
  }
};

let data = {
  eventList: [],
  login: {}
};


