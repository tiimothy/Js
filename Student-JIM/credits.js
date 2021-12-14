class credits extends Phaser.Scene {
  constructor() {
    super({
      key: "credits",
    });

    
  }

  preload() {
    // Preload all the assets here
    this.load.image('credits','assets/jimcredits.png');
    this.load.audio('victory','assets/victorymusic.mp3')

    this.load.tilemapTiledJSON("world2test", "assets/world2test.json");
    
    // Preload any images here

 
    this.load.spritesheet("tilestbw", "assets/tilestbw.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }
  


  create() {
    console.log("*** credits scene");

    this.victorymusic = this.sound.add('victory').setVolume(0.1);
    window.music1 = this.victorymusic
    window.music1.play();
    window.music1.loop = true;
    this.add.image(0, 0, 'credits').setScale(1).setOrigin(0,0);
    

   
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to menu scene");
        window.music1.stop()
        this.scene.start(
          "main",
         
          {}
        );
      },
      this
    );

   

    // Create all the game animations here
  }
}
