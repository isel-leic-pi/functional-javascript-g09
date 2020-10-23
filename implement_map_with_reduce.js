
module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(acc, item, idx, arr) {
        acc.push(fn.call(this, item, idx, arr))
        return acc
    }, [])
}
