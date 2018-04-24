import TableList from '@/components/TableList/TableList.vue';
import EventCreate from '@/pages/EventCreate/EventCreate.vue';
import EventEdit from '@/pages/EventEdit/EventEdit.vue';
import router from '@/router/index.js';
import docClient from '@/services/aws.js';
import Vue from 'vue';
import VModal from 'vue-js-modal';

Vue.use(VModal);

export default {
  components: {
    TableList,
    EventCreate,
    EventEdit,
  },
  methods: {
    viewEvent: function (id) {
      //router.push({ path: `/client/event/${id}/edit` });
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
      }
    });

    return data;
  }
};

let data = {
  eventList: [],
  login: {},
  showModal: false,
};


