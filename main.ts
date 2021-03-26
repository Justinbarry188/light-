input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        for (let index = 0; index <= 1; index++) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(5000)
            basic.clearScreen()
            if (pins.digitalReadPin(DigitalPin.P0) == 1) {
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P0, 0)
            }
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(2000)
            basic.clearScreen()
            if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                pins.digitalWritePin(DigitalPin.P2, 1)
                pins.digitalWritePin(DigitalPin.P1, 0)
            }
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(5000)
            basic.clearScreen()
        }
        for (let index = 0; index <= 9; index++) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
