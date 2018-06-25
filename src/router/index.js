import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld,
      children: (r => {
        let routerList = []
        r.keys().map((key) => {
          routerList.push(r(key).default)
        })
        return routerList
      })(require.context('../', true, /^\.\/components\/((?!\/)[\s\S])+\/route\.js$/))
    }
  ]
})
