/**
 * @class
 * @author Y-Hui
 * @param {Function} callback 回调函数
 * @param {Object} caller 调用者（Vue中的 this，用于实例销毁时关闭侦听）
 * @description 滚动侦听类，传入回调函数、调用者
 */

interface caller {
  [propName:string]: any
}

export default class ScrollAffair {
  private callback:Function

  private caller:caller

  constructor(callback:Function, caller:caller) {
    this.callback = callback
    this.caller = caller
    this.listen = this.listen.bind(this)
    this.close()
  }

  // 初始化
  init():void {
    window.addEventListener('scroll', this.listen, {
      passive: true
    })
  }

  // 开始侦听
  listen():void {
    window.requestAnimationFrame(() => {
      const { scrollTop } = document.scrollingElement as Element
      this.callback(scrollTop)
    })
  }

  close():void {
    this.caller.$once('hook:beforeDestroy', () => {
      this.destroy()
    })
    this.caller.$once('hook:deactivated', () => {
      this.destroy()
    })
  }

  // 关闭滚动侦听
  destroy():void {
    window.removeEventListener('scroll', this.listen)
  }
}
