class story extends Phaser.Scene {
  constructor() {
    super({
      key: "story",
    });

    
  }

  preload() {
    // Preload all the assets here
    this.load.image('story','assets/jimstory.png');

    this.load.tilemapTiledJSON("world2test", "assets/world2test.json");
    
    // Preload any images here

 
    this.load.spritesheet("tilestbw", "assets/tilestbw.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }
  


  create() {
    console.log("*** story scene");

    this.add.image(0, 0, 'story').setScale(1).setOrigin(0,0);
    

    // Add any sound and music here
    // ( 0 = mute to 1 is loudest )
    //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

    //this.music.play()
    //window.music = this.music

    // Add image and detect spacebar keypress
    //this.add.image(0, 0, 'main').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to characters scene");

        this.scene.start(
          "characters",
          // Optional parameters
          {}
        );
      },
      this
    );

    // Add any text in the main page
    this.add.text(90, 600, "Press spacebar to continue", {
      font: "30px Courier",
      fill: "#FFFFFF",
    });

    // Create all the game animations here
  }
}
