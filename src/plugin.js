import Toast from './toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
          propsData: toastOptions
          // closeButton: {
          //   text: '知道了',
          //   callback() {
          //     console.log('用户说知道了')
          //   }
          // }
        })
      ;
      toast.$slots.default = [message];
      toast.$mount();
      document.body.appendChild(toast.$el)
    }
  }
}