const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist
  });
  it('接受 gutter 属性', (done) => {
    Vue.component('g-row', Row);
    Vue.component('g-col', Col);
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
    <g-row gutter="20">
      <g-col span="12"></g-col>
      <g-col span="12"></g-col>
    </g-row>>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      //测试row的时候 要和上面生成的html元素一致
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      done()
      //  测试完成 销毁
      vm.$el.remove();
      vm.$destroy();
    })
  })
//  测试align
  it('接受 align 属性', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Row)
    //也可以 是 center
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
    div.remove();
    vm.$destroy();
  })
});