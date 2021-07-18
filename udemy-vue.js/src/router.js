import Vue from 'vue' ;
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPost from './views/UsersPost.vue';
import UsersProfile from './views/UsersProfile.vue';
import HeaderHome from './views/HeaderHome.vue';
import HeaderUsers from './views/HeaderUsers.vue';

Vue.use(Router);

export default new Router ({
  mode: "history",
  routes: [
    {
      path: '/', components: {
      default: Home,
      header: HeaderHome
    }
  },
  { path: '/users/:id',
    components: {
      default: Users,
      header: HeaderUsers
    },
    props: {
      default: true,
      header: false
    },
    children: [
      { path: "posts", component: UsersPost },
      { path: "Profile", component: UsersProfile, name: 'user-profile' }
    ]
  }
  ]
});