/**
 * 自定义MHD 类
 * @constructor HMD
 */
function MHD() {
    //
}

// MHD 原型方法

/**
 * 数组/对象的forEachF方法
 * @param {Object=}     thisArg             callback 回调函数中 this 上下文
 * @param {MHD~forEachCallback} callback    forEach的回调函数
 */

/**
 * This callback is displayed as part of the MHD class.
 * @callback MHD~forEachCallback
 * @param {String|Object}   kValue          回调函数第一个参数value
 * @param {string}          k               当前索引index
 * @param {string}          O               当前递归的数组
 * @this  {Object}          thisArg
 */
MHD.prototype.forEach = function(callback, thisArg) {
    var T, k
    if (this === null) {
        throw new TypeError('this is null or not defined')
    }

    // Let O be the result of calling toObject() passing the |this| value as the argument.
    // 确保this一定是一个对象类型
    var O = Object(this)

    // Let len be toUint32(lenValue).
    // 确保len 是一个32位无符号整数。该操作保证：所有非数值转换成0; 所有大于等于 0 等数取整数部分
    var len = O.length >>> 0

    // If isCallable(callback) is false, throw a TypeError exception.
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function!')
    }

    // If thisArg was supplied, let T be thisArg else let T be undefined.
    if (arguments.length > 1) {
        T = thisArg
    }

    k = 0

    while(k < len) {
        var kValue
        if (k in O) {
            kValue = O[k]
        }
        callback.call(T, kValue, k, O)
    }
    k++
}

// MHD模块
// 先整体导出这个类， 后续优化导出为类的实例
module.exports = MHD
