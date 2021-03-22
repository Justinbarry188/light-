input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(2000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    basic.clearScreen()
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(5000)
    basic.clearScreen()
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(5000)
    basic.clearScreen()
})
