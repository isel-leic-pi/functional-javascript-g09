
// Modify the boilerplate below such that it uses a trampoline to continuously call itself synchronously.

// Do not change the implementation of repeat to include any loops(you may change it in other ways though).
// Modify `repeat` so it returns the 'next step', if there is one.
function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    return () => {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
    }
}

// A trampoline continues to synchronously execute steps, getting new steps, until there are no more steps. You can use a loop here!
function trampoline(fn) {
    // You probably want to implement a trampoline!
    while (typeof fn === 'function') {
        fn = fn()
    }
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    trampoline( () => repeat(operation, num) )
}
