// in order to implement event-driven program, use eventemitter
import {EventEmitter} from 'events'

// try to implement there is event click
// remember that EvenetEmitter should handle events, and events is asynchronous. Then EvenetEmitter is asynchronous (as a proof, there is callback function on 'on' method)
let event  = new EventEmitter()

const display = ()=>{
    console.log('Haris the handsome one');
}

// on method consists of two arguments, first is the name of event, second is the function callback (function that executed when event 'klik' appeared)
event.on('klik',display)
// we can add more and more functions to the same event
event.on('klik',()=>{console.log("Nuke the beautiful one")});
// even can add the same callback function, therefore function display will executed twice
event.on('klik',display)

// suppose that event klik has happened
event.emit('klik',null);

let event2 = new EventEmitter();

// the parameter of callback function use destructuring object, since the value that will be passed to the callback funcions only certain propertys
event2.on('display-name',({name})=>{console.log(`Hai ${name}`)});
event2.on('display-name',({balance})=>{console.log(`Your balance is ${balance}`)});

// here the second argument will be passed to all functions registered as callback functions of 'display-name'. If certain callback function only need certain property of the second argument, therefore object destructuring should be implemented to the callback functions
event2.emit('display-name',{name : 'Haris', balance : 10000000});


