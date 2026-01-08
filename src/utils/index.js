export class utils {
  static formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  /***
   * @overview 函数防抖
   * @param fn
   * @param wait
   * @param immediate
   * @returns {(function(): void)|*}
   */
  static debounce(fn, wait=500, immediate=true) {
    let timeout
    return function () {
      let th = this
      let ar = arguments
      if (timeout) clearTimeout(timeout)
      if (immediate) {
        if (!timeout) fn.apply(th, ar)
        timeout = setTimeout(() => {
          timeout = null
        }, wait)
      } else {
        timeout = setTimeout(() => {
          fn.apply(th, ar)
        }, wait)
      }
    }
  }

  /***
   * @overview 函数节流
   * @param fn
   * @param wait
   * @returns {(function(): void)|*}
   */
  static throttle(fn, wait) {
    let timeout
    return function () {
      let th = this
      let ar = arguments
      if (!timeout) {
        timeout = setTimeout(() => {
          fn.apply(th, ar)
          timeout = null
        }, wait)
      }
    }
  }
}