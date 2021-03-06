import {describe} from "mocha";

const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
// import Tabs from "./tabs"
import TabsHead from "../src/tabs-head"
import TabsBody from "../src/tabs-body"
import TabsItem from "../src/tabs-item"
import TabsPane from "../src/tabs-pane"

Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  });
  it('接受 selected 属性', (done) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
         <g-tabs selected="finance">
              <g-tabs-head>
                 <g-tabs-item name="woman" disabled> t美女 </g-tabs-item>
                 <g-tabs-item name="finance"> 财经 </g-tabs-item>
                 <g-tabs-item name="sports"> t体育 </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="woman">美女相关咨询</g-tabs-pane>
                <g-tabs-pane name="finance">财经相关咨询</g-tabs-pane>
                <g-tabs-pane name="sports">体育相关咨询</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    `;
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(x.classList.contains('active'))
      done()
    })
  });
  it('可以接受 direction prop', () => {})
});