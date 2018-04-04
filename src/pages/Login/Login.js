import router from '@/router/index.js';
import docClient from '@/services/aws.js';

export default {
  components: {
  },
  methods: {
    login: function () {
      this.$cookies.set("username", this.login.username);
      this.$cookies.set("password", this.login.password);
      router.push({ path: '/client/event' });
    },
    logout: function () {
      this.$cookies.remove("username");
      this.$cookies.remove("password");
    }
  },
};

let data = {
  login: {},
  errors: []
};