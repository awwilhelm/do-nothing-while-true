import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';
import EventList from '@/pages/EventList/EventList.vue';
import EventCreate from '@/pages/EventCreate/EventCreate.vue';
import EventEdit from '@/pages/EventEdit/EventEdit.vue';
import Login from '@/pages/Login/Login.vue';
import TableList from '@/components/TableList/TableList.vue';

Vue.use(Router);

Vue.component('test', {
  template: TableList,
});

const router = new Router({
  routes: [
    {
      path: '/user',
      name: 'HelloWorld1',
      component: HelloWorld,
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
  const authed = true;
  // const authed = store.state.user.isAuthorized
  if (authRequired && !authed) {
    next('/client/login');
  } else {
    next();
  }
});

export default router;
