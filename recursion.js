/*var loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
      "optimist": {
        "version": "0.3.7",
        "dependencies": {
          "wordwrap": {
            "version": "0.0.2"
          }
        }
      },
      "inflection": {
        "version": "1.2.6"
      }
    }
  }

  getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]*/

function getDependencies(module, result) {

    result = result || []
    let dependencies = module && module.dependencies || []

    Object.keys(dependencies).forEach(function(dep) {
        let key = dep + '@' + module.dependencies[dep].version
        if (result.indexOf(key) === -1) result.push(key)
        getDependencies(module.dependencies[dep], result) 
    })

    return result.sort()

}

module.exports = getDependencies
