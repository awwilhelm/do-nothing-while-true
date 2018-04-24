import router from '@/router/index.js';
import EventEdit from '@/pages/EventEdit/EventEdit.vue';
import EventCreate from '@/pages/EventCreate/EventCreate.vue';
import Vue from 'vue';
import VModal from 'vue-js-modal';

Vue.use(VModal);

export default {
  name: 'tablelist',
  props: ['message'],
  components: {
    EventEdit,
    EventCreate,
  },
  data: function () {
    return {
      eventid: 0
    }
  },
  methods: {
    viewItem: function (id) {
      console.log(id);
      //router.push({ path: `/client/event/${id}/edit` });
      this.$modal.show('edit-event', {eventid: id});
    },
    beforeOpen (event) {
      console.log(event)
      // Set the opening time of the modal
      this.eventid = event.params.eventid;
    },
    beforeClose (event) {
      
    },
  },
  
};

