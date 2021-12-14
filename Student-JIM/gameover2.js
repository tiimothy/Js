class gameover2 extends Phaser.Scene {
  constructor() {
    super({
      key: "gameover2",
    });

    
  }

  preload() {
    // Preload all the assets here
    this.load.image('gameover2','assets/jimgameover2.png');

    this.load.tilemapTiledJSON("world2test", "assets/world2test.json");
    
    this.load.audio("punch","assets/punchsound.mp3");
    // Preload any images here

 
    this.load.spritesheet("tilestbw", "assets/tilestbw.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }
  


  create() {
    console.log("*** gameover2 scene");

    this.add.image(0, 0, 'gameover2').setScale(1).setOrigin(0,0);

    this.deadsound = this.sound.add('punch').setVolume(0.7);

    window.punch = this.deadsound
    window.punch.play();
    

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
        console.log("Jump to world2 scene");

        this.scene.start(
          "world2",
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
