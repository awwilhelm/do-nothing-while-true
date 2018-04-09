import Vue from 'vue';
import Router from 'vue-router';
import vueCookies from 'vue-cookies';
import Speak from '@/pages/Speak/Speak.vue';
import Help from '@/pages/Help/Help.vue';
import SpeakResult from '@/pages/SpeakResult/SpeakResult.vue';
import EventList from '@/pages/EventList/EventList.vue';
import EventCreate from '@/pages/EventCreate/EventCreate.vue';
import EventEdit from '@/pages/EventEdit/EventEdit.vue';
import Login from '@/pages/Login/Login.vue';
import TableList from '@/components/TableList/TableList.vue';
import docClient from '@/services/aws.js';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/user',
      name: '',
      component: Speak,
    },
    {
      path: '/user/help',
      name: '',
      component: Help,
    },
    {
      path: '/user/speakresult',
      name: '',
      component: SpeakResult,
    },
    {
      path: '/client/login',
      name: '',
      component: Login,
    },
    {
      path: '/client/event',
      name: 'Event',
      component: EventList,
      meta: {
        auth: true,
      },
    },
    {
      path: '/client/event/create',
      name: 'Event Create',
      component: EventCreate,
      meta: {
        auth: true,
      },
    },
    {
      path: '/client/event/:eventid/edit',
      name: 'Event Edit',
      component: EventEdit,
      meta: {
        auth: true,
      },
    },
    {
      path: '/user/speak',
      name: 'User Input',
      component: EventEdit,
    },

  ],
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  console.log(from);
  console.log(to);
  const authRequired = to.matched.some((route) => route.meta.auth);

  if(authRequired) {
    if(window.$cookies.isKey("username") && window.$cookies.isKey("password"))
    {
      var userParams = {
        TableName: 'OrganizationEvents',
        Key: {
          "username": window.$cookies.get("username"),
        }
      }
      docClient.get(userParams, function (err, user) {
        if (err) {
          console.log("Error", err);
          next('/client/login');
        } else {
          if(user.Item.password == window.$cookies.get("password")) {
            next();
          } else {
            next('/client/login');
          }
        }
      });
    } else {
      next('/client/login');
    }
  } else {
    next();
  }
});

export default router;
