
import Aaa from './aaa.vue'
export default {
  path: '/hello/aaa',
  component: Aaa,
  children: (r => {
    let routerList = []
    r.keys().map((key) => {
      routerList.push(r(key).default)
    })
    return routerList
  })(require.context('./', true, /^\.\/components\/((?!\/)[\s\S])+\/route\.js$/))
}
