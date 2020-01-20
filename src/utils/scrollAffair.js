/**
 * @class
 * @author Y-Hui
 * @time 2019-12-05
 * @param {Function} callback 回调函数
 * @param {Object} caller 调用者（Vue中的 this，用于实例销毁时关闭侦听）
 * @description 滚动侦听类，传入回调函数、调用者
 */
export default class ScrollAffair {
  constructor(callback, caller) {
    this.callback = callback
    this.caller = caller
    this.listen = this.listen.bind(this)
    this.close()
  }

  // 初始化
  init() {
    window.addEventListener('scroll', this.listen, false)
  }

  listen() {
    window.requestAnimationFrame(() => {
      const { scrollTop } = document.scrollingElement
      this.callback(scrollTop)
    })
  }

  // vue 实例销毁前关闭侦听
  close() {
    this.caller.$once('hook:beforeDestroy', () => {
      this.destroy()
    })
    this.caller.$once('hook:deactivated', () => {
      this.destroy()
    })
  }

  // 关闭滚动侦听
  destroy() {
    window.removeEventListener('scroll', this.listen)
  }
}
