const names = require('./4-names')

const sayHi=require('./5-utils')
console.log(names)  

const data=require('./6-alternativexport')

require('./7-mindgrenade')
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter) 