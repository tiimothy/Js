class endgame extends Phaser.Scene {
  constructor() {
    super({
      key: "endgame",
    });

    
  }

  preload() {
    // Preload all the assets here
    this.load.image('endgame','assets/jimendgame.png');
    this.load.audio('victory','assets/victorymusic.mp3')

    this.load.tilemapTiledJSON("world2test", "assets/world2test.json");
    
    // Preload any images here

 
    this.load.spritesheet("tilestbw", "assets/tilestbw.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }
  


  create() {
    console.log("*** end scene");

    this.victorymusic = this.sound.add('victory').setVolume(0.1);
    window.music1 = this.victorymusic
    window.music1.play();
    window.music1.loop = true;
    this.add.image(0, 0, 'endgame').setScale(1).setOrigin(0,0);
    

  

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to credits scene");
        window.music1.stop()
        this.scene.start(
          "credits",
          // Optional parameters
          {}
        );
      },
      this
    );

   

    // Create all the game animations here
  }
}
