controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Dino.isHittingTile(CollisionDirection.Bottom)) {
        Dino.setVelocity(0, 30)
        Dino.y += -30
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
Dino.setPosition(20, 80)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010100000000000000000000`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen))
Dino.setVelocity(0, 30)
let Speed = -60
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
