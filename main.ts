controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Dino.isHittingTile(CollisionDirection.Bottom)) {
        Dino.y += -40
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    info.changeScoreBy(1)
    sprite.destroy(effects.confetti, 100)
    Speed += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.ashes, 500)
})
let Bird: Sprite = null
let Tree: Sprite = null
let Dino: Sprite = null
info.setLife(3)
Dino = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . b b b . . 
    . . . . . . . . . . b b . b b . 
    . . . . . . . . . . b b b b b b 
    . . . . . . . . . . b b b b b b 
    . b b . . . . . . b b b b . . . 
    . b b . . . . . b b b b b b b . 
    . . b b . . . b b b b b . . . . 
    . . b b . b b b b b b b b b . . 
    . . b b b b b b b b b b . b . . 
    . . . b b b b b b b b b . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . . b b b b b b b . . . . 
    . . . . . . b b . . b . . . . . 
    . . . . . . b b . . b b . . . . 
    . . . . . . b b b . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(Dino, tiles.getTileLocation(2, 2))
let Speed = -60
game.onUpdate(function () {
    Dino.setVelocity(0, 60)
})
game.onUpdateInterval(randint(1500, 3000), function () {
    Tree = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . 7 7 . . 7 7 7 . . . . . . 
        . . . 7 7 . . 7 7 7 . . . . . . 
        . . . 7 7 . . 7 7 7 . . . . . . 
        . . . 7 7 7 7 7 7 7 . . . . . . 
        . . . 7 7 7 7 7 7 7 . . 7 7 . . 
        . . . . . . . 7 7 7 . . 7 7 . . 
        . . . . . . . 7 7 7 7 7 7 7 . . 
        . . . . . . . 7 7 7 7 7 7 7 . . 
        . . . . . . . 7 7 7 7 7 7 . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        `, SpriteKind.Enemy)
    Tree.setPosition(160, 100)
    Tree.setVelocity(Speed, 0)
})
game.onUpdateInterval(1000, function () {
    Bird = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 . . . 1 1 1 . . . . 
        . . . 1 1 . . . . . . 1 . . . . 
        . . 1 1 . . . . . . . . 1 1 1 . 
        . . 1 . . . . . . . . . . . 1 1 
        . . 1 . . . . . . . . . . . . 1 
        . . 1 . . . . . . . . . . . . 1 
        . . 1 . . . . . . . . . . . . 1 
        . . 1 1 1 . . . . . . . . . 1 1 
        . . . . 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Bird.setPosition(160, randint(10, 50))
    Bird.setVelocity(randint(-20, -45), 0)
})
game.onUpdateInterval(randint(9700, 15780), function () {
    Bird = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 . . . . . . . . 
        . . . . . . 6 6 . . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . 6 . . 6 6 6 . . . . . . . 
        . . 6 6 . . 6 6 6 6 . . . . . . 
        . 6 6 6 . . 6 6 6 6 . . . . . . 
        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 6 6 . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . 6 6 6 6 6 6 6 6 6 . . 
        . . . . . . . 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Bird.setPosition(160, 80)
    Bird.setVelocity(-100, 0)
})
