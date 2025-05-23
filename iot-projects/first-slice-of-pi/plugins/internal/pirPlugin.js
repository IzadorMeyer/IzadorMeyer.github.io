const resources = require('./../../resources/model');
const Gpio = require('onoff').Gpio;

let sensor;
const device = resources.pi.sensors.pir;

function connectHardware(){
    sensor = new Gpio(device.gpio, 'in', 'both')
    sensor.watch(function (err, value){
        if(value === true){
            console.log(err)
        }else {
            device.value = !!value
        }
    });
}

function start(){
    connectHardware()
}

function stop(){
    sensor.unexport()
}

exports.start = start
exports.stop = stop