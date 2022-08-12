
  /** 
 *  @param {Number} n
 */
module.exports = function reverse (n) {
  return parseInt(n.toString().split('').reverse().join(''));
}
