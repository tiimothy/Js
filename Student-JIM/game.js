var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 720,
    height:  510,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    backgroundColor: '#000000',
    pixelArt: false,
    scene: [main,story,characters,gameplay, world,world2,world3, room1,room2,room3,gameover1,gameover2,gameover3,endgame,credits]
};

var game = new Phaser.Game(config);