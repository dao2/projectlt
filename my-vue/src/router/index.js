import Vue from 'vue'
import Router from 'vue-router'
import singer from 'src/components/singer'
import order from 'src/components/hh/order'
import test from 'src/components/test'
import info from 'src/components/info'
import waia from 'src/components/waia'
import waib from 'src/components/waib'
import waic from 'src/components/waic'
import aub from 'src/components/aub'
import sy from 'src/components/sy'
Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '',
      redirect: { name: 'order' },
      // components: {
      //   default: test   有需要多个显示的才放上面
      // }
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      children: [
        {
          path: 'order',
          name: 'order',
          component: order,
          meta: {
            title: 'order',
            keepAlive: true
          }
        },
        {
          path: 'singer',
          name: 'singer',
          component: singer
        },
        {
          path: 'waia',
          name: 'waia',
          component: waia
        }
      ]
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/aub',
      name: 'aub',
      component: aub,
      redirect: { name: 'waib' },
      children: [
        {
          path: 'waib',
          name: 'waib',
          component: waib
        },
        {
          path: 'waic',
          name: 'waic',
          component: waic
        },
        {
          path: 'sy',
          name: 'sy',
          component: sy,
        }
        ]
    }

  ],
  linkActiveClass: 'active',
})
