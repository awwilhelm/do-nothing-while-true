import router from '@/router/index.js';

export default {
  name: 'tablelist',
  props: ['message'],
  methods: {
    viewItem: function (id) {
      console.log("here");
      router.push({ path: `/client/event/${id}/edit` });
    },
  },
  
};

