namespace SpriteKind {
    export const shop_keeper = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, tiles.util.door1, function (sprite, location) {
    tiles.loadConnectedMap(ConnectionKind.Door1)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    tiles.coverAllTiles(assets.tile`myTile2`, assets.tile`myTile`)
    tiles.coverAllTiles(tiles.util.door1, assets.tile`myTile`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    current_location = tiles.locationOfSprite(mySprite)
    if (tiles.tileIs(current_location, assets.tile`myTile0`)) {
        tiles.setTileAt(current_location, assets.tile`myTile1`)
    }
})
tiles.onMapLoaded(function (tilemap2) {
    tiles.createSpritesOnTiles(assets.tile`myTile12`, SpriteKind.shop_keeper)
})
function closeinventory () {
    in_pause_screen = false
    controller.moveSprite(mySprite, 100, 100)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    selected_index = Math.max(selected_index - 1, 0)
})
function open_inventory () {
    in_pause_screen = true
    controller.moveSprite(mySprite, 0, 0)
    selected_index = 0
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    selected_index = Math.min(selected_index + 1, tools.length - 1)
})
sprites.onCreated(SpriteKind.shop_keeper, function (sprite) {
    sprite.setImage(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b 1 1 1 1 1 b b 1 1 1 1 1 b b 
        b b 1 f f f 1 b b 1 f f f 1 b b 
        b b 1 f f f 1 b b 1 f f f 1 b b 
        b b 1 f f f 1 b b 1 f f f 1 b b 
        b b 1 1 1 1 1 b b 1 1 1 1 1 b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b 1 d 1 d 1 b b b b b b 
        b b b b d 1 d 1 d 1 d b b b b b 
        b b b b b f f f f f b b b b b b 
        b b b b b f f f f f b b b b b b 
        b b b b d d d d d d d b b b b b 
        b b b b b d d d d d b b b b b b 
        `)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (in_pause_screen) {
        closeinventory()
    } else {
        open_inventory()
    }
})
spriteutils.createRenderable(100, function (screen2) {
    if (in_pause_screen) {
        screen2.fillRect(10, 10, 140, 100, 13)
        screen2.drawRect(10, 10, 140, 100, 14)
        images.print(screen2, "Invetory", 14, 14, 14)
        images.print(screen2, tool_names[selected_index], 76, 14, 14)
        screen2.fillRect(14, 25, 132, 2, 14)
        tool_top = 28
        for (let index = 0; index <= tools.length - 1; index++) {
            spriteutils.drawTransparentImage(tools[index], screen2, 14 + index * 20, tool_top)
            spriteutils.drawTransparentImage(assets.image`selector`, screen2, 14 + selected_index * 20 - 2, tool_top - 2)
        }
    }
})
tiles.onMapUnloaded(function (tilemap2) {
    sprites.destroyAllSpritesOfKind(SpriteKind.shop_keeper)
})
let tool_top = 0
let selected_index = 0
let in_pause_screen = false
let current_location: tiles.Location = null
let tool_names: string[] = []
let tools: Image[] = []
let mySprite: Sprite = null
let farm_map = tiles.createMap(tilemap`level2`)
let shop_map = tiles.createMap(tilemap`level10`)
tiles.connectMapById(farm_map, shop_map, ConnectionKind.Door1)
tiles.loadMap(farm_map)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
mySprite = sprites.create(img`
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b 1 1 1 1 1 b b 1 1 1 1 1 b b 
    b b 1 f f f 1 b b 1 f f f 1 b b 
    b b 1 f f f 1 b b 1 f f f 1 b b 
    b b 1 f f f 1 b b 1 f f f 1 b b 
    b b 1 1 1 1 1 b b 1 1 1 1 1 b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b c e c e c b b b b b b 
    b b b b e c e c e c e b b b b b 
    b b b b b f f f f f b b b b b b 
    b b b b b f f f f f b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
color.startFade(color.GrayScale, color.originalPalette)
tiles.coverAllTiles(assets.tile`myTile2`, assets.tile`myTile`)
tiles.coverAllTiles(tiles.util.door1, assets.tile`myTile`)
tools = [
img`
    . 4 4 4 4 . . . . . . . . . . . 
    4 . . . . 4 . . . . . . . . . . 
    4 . . . . . 4 . . . . . . . . . 
    4 . 4 4 4 4 4 4 4 4 4 4 . . . . 
    e . 4 4 4 4 4 4 4 4 4 4 . . . 4 
    e . 4 4 4 4 4 4 4 4 4 4 . 4 4 4 
    . e 4 4 4 4 4 4 4 4 4 4 . 4 4 4 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
    . . 4 4 4 4 4 4 4 4 4 4 4 e . e 
    . . 4 4 4 4 4 4 4 4 4 4 e . . . 
    . . e 4 4 4 4 4 4 4 4 4 . . . . 
    . . e 4 4 4 4 4 4 4 4 4 . . . . 
    . . e 4 4 4 4 4 4 4 4 4 . . . . 
    . . e 4 4 4 4 4 4 4 4 4 . . . . 
    . . e e e e e e e 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . 6 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 6 . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . b b . . . . . . . . . . . . . 
    . b b e . . . . . . . . . . . . 
    . . e e e . . . . . . . . . . . 
    . . . e e e . . . . . . . . . . 
    . . . . e e e . . . . . . . . . 
    . . . . . e e e . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . . . . e e e . b b . . 
    . . . . . . . . . e e b b b b . 
    . . . . . . . . . . b b b b b b 
    . . . . . . . . . b b b b b b b 
    . . . . . . . . . b b b b b b b 
    . . . . . . . . . . b b b b b b 
    . . . . . . . . . . . b b b b . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . b b b b b b b e b b . . . . . 
    . . b b b b b b e b b . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . . . . e e . . . . . . 
    . . . . . . . . e e e . . . . . 
    . . . . . . . . e e e . . . . . 
    . . . . . . . . . e e . . . . . 
    . . . . . . . . . e e e . . . . 
    . . . . . . . . . . e e . . . . 
    . . . . . . . . . . e e . . . . 
    . . . . . . . . . . e e e . . . 
    `
]
tool_names = [
"watering can",
"gloves",
"shovel",
"hoe"
]
