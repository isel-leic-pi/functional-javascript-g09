
function Spy(target, method) {

    let func = target[method]
    var toReturn = {
        count: 0
    }

    target[method] = function() {
        toReturn.count += 1
        return func.apply(this, arguments)
    }

    return toReturn

}

module.exports = Spy
