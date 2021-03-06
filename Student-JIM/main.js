class main extends Phaser.Scene {
  constructor() {
    super({
      key: "main",
    });

    
  }

  preload() {
    // Preload all the assets here
    this.load.image('mainmenu','assets/jimmainmenu.png');

    this.load.tilemapTiledJSON("world2test", "assets/world2test.json");
    
    // Preload any images here

 
    this.load.spritesheet("tilestbw", "assets/tilestbw.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }
  


  create() {
    console.log("*** main scene");

    this.add.image(0, 0, 'mainmenu').setScale(1).setOrigin(0,0);
    

    
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to story scene");

        this.scene.start(
          "story",
          // Optional parameters
          {}
        );
      },
      this
    );

    

    // Create all the game animations here
  }
}
