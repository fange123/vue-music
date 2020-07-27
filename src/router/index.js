import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/Recommend'
import Rank from 'components/rank/Rank'
import Singer from 'components/singer/Singer'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path:'/singer',
      name:'Singer',
      component:Singer
    }
  ]
})
