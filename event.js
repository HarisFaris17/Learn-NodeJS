// in order to implement event-driven program, use eventemitter
import {EventEmitter} from 'events'

// try to implement there is event click
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

event.emit('klik',null);