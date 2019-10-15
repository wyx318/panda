import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
  }
});
// 单元测试 逻辑就是 代码符合预期  测试用例 icon loading iconposition 必须测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const expect = chai.expect
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setings'
    }
  });

  vm.$mount(`#test`)
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-setings')
  vm.$el.remove() //元素删除
  vm.$destroy() //对象删除
}
// 2
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setings',
      loading: true
    }

  });
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove() //元素删除
  vm.$destroy() //对象删除
}
// 3{
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setings'
    }
  });

  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove() //元素删除
  vm.$destroy() //对象删除
}
// 4
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setings',
      iconPosition: 'right'
    }
  });
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove() //元素删除
  vm.$destroy() //对象删除
}
// 5  触发click事件 使用工具 mock
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'setings'
    }
  });

  vm.$mount()
  let spy = chai.spy(function () {

  })
  vm.$on('click', spy)
  //希望这个函数被调用
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}