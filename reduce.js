function countWords(inputWords) {
    return inputWords.reduce(function(wordsCount, currWord){
        if(!(currWord in wordsCount)) { //initialize the counter for that word if it doesnt exists
            wordsCount[currWord] = 1
        } else{
            wordsCount[currWord]++ //increments the counter if it already exists
        }
        return wordsCount
    }, {})
}

module.exports = countWords