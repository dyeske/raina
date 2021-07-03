basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.showString("RAINA")
    basic.pause(1000)
})
