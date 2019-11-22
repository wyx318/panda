import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Footer from './footer'
import Content from './content'
import Header from './header'
import Sider from './sider'
import Toast from './toast'
import plugin from "./plugin";
import Tabs from "./tabs"
import TabsHead from "./tabs-head"
import TabsBody from "./tabs-body"
import TabsItem from "./tabs-item"
import TabsPane from "./tabs-pane"
import Popover from "./popover"
import Collapse from "./collapse"
import CollapseItem from "./collapse-item"

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-footer', Footer);
Vue.component('g-content', Content);
Vue.component('g-sider', Sider);
Vue.component('g-toast', Toast);
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-popover', Popover);
Vue.component('g-collapse', Collapse);
Vue.component('g-collapse-item', CollapseItem);

Vue.use(plugin);
new Vue({
  el: '#app',
  data: {
    selectedTab: ["2", "1"]
  },
  created() {},
  methods: {
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast(`你好十一月 ${parseInt(Math.random() * 100)}`, {
        position,
        // position: 'middle',//用於設置位置
        enableHtml: true,   //用于支持html
        closeButton: { //点击关闭
          text: '关闭',
          callback(toast) {
            //点击关闭是 回传的 数据
            toast.log();
            // console.log('用户说知道了')
          }
        },
        autoClose: 3, // 自动关闭
        // autoCloseDelay: 3, //定时关闭
      })
    }
  }
});
// // 单元测试 逻辑就是 代码符合预期  测试用例 icon loading iconposition 必须测试
// import chai from 'chai'
// import spies from 'chai-spies'
//
// chai.use(spies)
//
// const expect = chai.expect
// {
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       icon: 'setings'
//     }
//   });
//
//   vm.$mount(`#test`)
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-setings')
//   vm.$el.remove() //元素删除
//   vm.$destroy() //对象删除
// }
// // 2
// {
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       icon: 'setings',
//       loading: true
//     }
//
//   });
//   vm.$mount()
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading')
//   vm.$el.remove() //元素删除
//   vm.$destroy() //对象删除
// }
// // 3{
// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       icon: 'setings'
//     }
//   });
//
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('1')
//   vm.$el.remove() //元素删除
//   vm.$destroy() //对象删除
// }
// // 4
// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       icon: 'setings',
//       iconPosition: 'right'
//     }
//   });
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('2')
//   vm.$el.remove() //元素删除
//   vm.$destroy() //对象删除
// }
// // 5  触发click事件 使用工具 mock
// {
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       icon: 'setings'
//     }
//   });
//
//   vm.$mount()
//   let spy = chai.spy(function () {
//
//   })
//   vm.$on('click', spy)
//   //希望这个函数被调用
//   let button = vm.$el
//   button.click()
//   expect(spy).to.have.been.called()
// }