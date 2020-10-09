function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(id => goodUsers.some(goodUserId => goodUserId === id))
    }
}

module.exports = checkUsersValid