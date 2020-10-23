
function loadUsers(userIds, load, done) {
    /*var users = []
    for (var i = 0; i < usersIds.length; i++) {
        users.push(load(userIds[i]))
    }
    return done(users)*/
    
    let countUsers = 0
    let users = []
    userIds.forEach(function(id, idx) {
        load(id, function(user) {
            ++countUsers
            users[idx] = user
            if (countUsers === userIds.length) return done(users)
        })
    })

}

module.exports = loadUsers
