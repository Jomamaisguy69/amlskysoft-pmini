namespace StatusBarKind {
    export const Load = StatusBarKind.create()
}
function Runapp (App_ID: number) {
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
    Laod = statusbars.create(42, 4, StatusBarKind.Load)
    Laod.max = 100
    Laod.value = 0
    Laod.setLabel("Loading")
    for (let index = 0; index < 100; index++) {
        pause(20)
        Laod.value += 1
    }
    if (Laod.value > 99) {
        if (App_ID == 1) {
            scene.setBackgroundColor(8)
            game.splash("Select an app")
            Laod.setLabel(" ")
            Laod.setBarSize(0, 0)
        }
    }
}
let Laod: StatusBarSprite = null
let mySprite: Sprite = null
Runapp(1)
forever(function () {
    controller.moveSprite(mySprite)
})
forever(function () {
    Laod.attachToSprite(mySprite)
})
