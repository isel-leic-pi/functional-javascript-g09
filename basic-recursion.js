function reduce(arr, fn, initial) {
    if (!arr.length) return initial

    let head = arr[0]
    let tail = arr.slice(1)

    return reduce(tail,fn, fn(initial, head))
}

reduce([1,2,3], function(prev, curr, index, arr) {
    return prev + curr
}, 0)

module.exports = reduce