input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        for (let index = 0; index <= 0; index++) {
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
                . . # . #
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
input.onButtonPressed(Button.AB, function () {
    malfun += 1
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 0; index++) {
        for (let index = 0; index <= 18; index++) {
            basic.showLeds(`
                . . # . .
                . # # # .
                . . # . .
                . # . # .
                . . . . .
                `)
            music.playTone(698, music.beat(BeatFraction.Whole))
        }
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(15)
        basic.showLeds(`
            # . . # .
            # . # . #
            # . # . #
            # . # . #
            # . . # .
            `)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showNumber(9)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showNumber(8)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showNumber(7)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showNumber(6)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showNumber(5)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showNumber(4)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showNumber(3)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showNumber(2)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showNumber(1)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let malfun = 0
basic.forever(function () {
    if (malfun == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    } else if (malfun == 2) {
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        malfun = 0
    }
})
