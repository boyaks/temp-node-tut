const EventEmitter = require('events')

const customEmitter = new EventEmitter()


customEmitter.on('response', (name, id) => {
console.log(`data received user ${name}, with ID: ${id}`)

})

customEmitter.on('response', (name,id) => {
    console.log(`some other logic her ${name}, ${id}` )
    
    })
    
customEmitter.emit('response', 'John', 34)
customEmitter.emit('response', 'Peter', 23)