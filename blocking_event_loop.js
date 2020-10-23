
function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return
    operation()

    if (num % 100 === 0) setTimeout( () => repeat(operation, --num) ) //Calls a function or executes a code snippet after specified delay.
    else return repeat(operation, --num)

}

module.exports = repeat
