import Toast from './toast'

let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }

      })  //重构函数 第一步 新建一个函数
    }
  }
}

//helpers 帮助函数
function createToast({Vue, message, propsData, onClose}) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({propsData});
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el);
  return toast
}