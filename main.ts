game.setLife(3)
basic.forever(function () {
    images.createImage(`
        . . # # .
        . # . . .
        . . # # .
        . # . . .
        . . # # .
        `).showImage(0)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    images.createImage(`
        . . # # .
        . # . . #
        . . . # .
        . . # . .
        . # # # #
        `).showImage(0)
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    images.createImage(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `).showImage(0)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).scrollImage(1, 100)
    basic.pause(200)
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        images.createBigImage(`
            # # . . . . . . . .
            # . # . . # # . . #
            # # . . # . . # . #
            # . . . # . . # . #
            # . . . . # # . . .
            `).scrollImage(1, 75)
        images.createBigImage(`
            . . . . . # . . . .
            . . . # . # . . . .
            . # . # . # . . . .
            . # . # . . . . . .
            # . # . . # . . . .
            `).scrollImage(1, 75)
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).scrollImage(1, 100)
        game.addScore(1)
    } else {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        game.removeLife(1)
    }
})
basic.forever(function () {
    if (game.isGameOver()) {
        basic.showNumber(game.score())
        basic.pause(1000)
        control.reset()
    }
})
