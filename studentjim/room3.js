class room3 extends Phaser.Scene {

    constructor() {
        super({ key: 'room3' });
        
        // Put global variable here
    }


    init(data) {
       
        
    }

    preload() {
        this.load.tilemapTiledJSON("room3","assets/room3.json");

        // Step 2 : Preload any images here, nickname, filename
        this.load.image("room3","assets/tilestbw.png")
        this.load.atlas('jimfront', 'assets/frontwalk.png','assets/frontwalk.json');
        this.load.atlas('jimright', 'assets/rightwalk.png','assets/rightwalk.json');
        this.load.atlas('jimleft', 'assets/leftwalk.png','assets/leftwalk.json');
        this.load.atlas('jimback', 'assets/backwalk.png','assets/backwalk.json');

        this.load.atlas('seniorfront', 'assets/seniorfrontwalk.png','assets/seniorfrontwalk.json');
        this.load.atlas('seniorright', 'assets/seniorrightwalk.png','assets/seniorrightwalk.json');
        this.load.atlas('seniorleft', 'assets/seniorleftwalk.png','assets/seniorleftwalk.json');
        this.load.atlas('seniorback', 'assets/seniorbackwalk.png','assets/seniorbackwalk.json');
    }

    create() {
        console.log('*** room3 scene');
        let map = this.make.tilemap({key:"room3"});

        // Step 4 Load the game tiles
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let room3 = map.addTilesetImage("tilestbw", "room3");
        // Step 5  Load in layers by layers
        this.floor = map.createLayer("floor", [room3], 0, 0);
        this.wall = map.createLayer("wall", [room3], 0, 0);
        this.objects = map.createLayer("objects", [room3], 0, 0);
        this.object2 = map.createLayer("object2", [room3], 0, 0);
        

        this.anims.create({
            key:'front',
          frames: [
              {key: 'jimfront',frame: 'Jim-front(1).png'},
              {key: 'jimfront',frame: 'Jim-front(2).png'},
              {key: 'jimfront',frame: 'Jim-front(3).png'},
          ],
            frameRate:3,
            repeat:-1
        });
        this.anims.create({
          key:'right',
        frames: [
            {key: 'jimright',frame: 'Jim-right(1)'},
            {key: 'jimright',frame: 'Jim-right(2)'},
            {key: 'jimright',frame: 'Jim-right(3)'},
            {key: 'jimright',frame: 'Jim-right(4)'},
        ],
          frameRate:6,
          repeat:-1
      });
      this.anims.create({
        key:'left',
      frames: [
          {key: 'jimleft',frame: 'Jim-left(1)'},
          {key: 'jimleft',frame: 'Jim-left(2)'},
          {key: 'jimleft',frame: 'Jim-left(3)'},
          {key: 'jimleft',frame: 'Jim-left(4)'},
      
      ],
        frameRate:6,
        repeat:-1
      });
      this.anims.create({
        key:'back',
      frames: [
          {key: 'jimback',frame: 'Jim-back(1)'},
          {key: 'jimback',frame: 'Jim-back(2)'},
          {key: 'jimback',frame: 'Jim-back(3)'},
      ],
        frameRate:3,
        repeat:-1
      });

      this.anims.create({
        key:'seniorfront',
      frames: [
          {key: 'seniorfront',frame: 'senior-front(1)'},
          {key: 'seniorfront',frame: 'senior-front(2)'},
          {key: 'seniorfront',frame: 'senior-front(3)'},
          {key: 'seniorfront',frame: 'senior-front(4)'},
      ],
        frameRate:6,
        repeat:-1
    });
    this.anims.create({
      key:'seniorright',
    frames: [
        {key: 'seniorright',frame: 'senior-right(1)'},
        {key: 'seniorright',frame: 'senior-right(2)'},
        {key: 'seniorright',frame: 'senior-right(3)'},
        {key: 'seniorright',frame: 'senior-right(4)'},
    ],
      frameRate:6,
      repeat:-1
  });
  this.anims.create({
    key:'seniorleft',
  frames: [
      {key: 'seniorleft',frame: 'senior-left(1)'},
      {key: 'seniorleft',frame: 'senior-left(2)'},
      {key: 'seniorleft',frame: 'senior-left(3)'},
      {key: 'seniorleft',frame: 'senior-left(4)'},
  
  ],
    frameRate:6,
    repeat:-1
  });
  this.anims.create({
    key:'seniorback',
  frames: [
      {key: 'seniorback',frame: 'senior-back(1)'},
      {key: 'seniorback',frame: 'senior-back(2)'},
      {key: 'seniorback',frame: 'senior-back(3)'},
      {key: 'seniorback',frame: 'senior-back(4)'},
  ],
    frameRate:6,
    repeat:-1
  });
      
        this.player = this.physics.add.sprite(400 ,757 ,"jimback")
        this.player.setScale(0.15). setSize(100,130)
        this.seniorupdown = this.physics.add.sprite(385,87,"seniorfront").play('seniorfront').setScale(0.20). setSize(110,150)
        this.seniordownup = this.physics.add.sprite(481,419,"seniorback").play('seniorback').setScale(0.20). setSize(110,150)

        this.time.addEvent({
          delay: 500,
          callback: moveUpDown,
          callbackScope: this,
          loop: false,
        });
        this.time.addEvent({
          delay: 500,
          callback: moveDownUp,
          callbackScope: this,
          loop: false,
        });

         //enable debug
    window.player = this.player;

    // get the tileIndex number in json, +1
     //mapLayer.setTileIndexCallback(11, this.room1, this);

     // Add custom properties in Tiled called "mouintain" as bool
     this.player.setCollideWorldBounds(false);
     this.objects. setCollisionByProperty ({wall: true})
     this.object2. setCollisionByProperty ({wall: true})
     this.wall.setCollisionByProperty({wall: true})
    // What will collider witg what layers
    this.physics.add.collider(this.wall, this.player);
     this.physics.add.collider(this.objects,this.player);
     this.physics.add.collider(this.object2, this.player);

    // create the arrow keys
     this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
     this.cameras.main.startFollow(this.player);

     var Rdown = this.input.keyboard.addKey("R");

     // On spacebar event, call the world scene
     Rdown.on(
       "down",
       function () {
         console.log("Jump to world scene");
 
         this.scene.start(
           "world",
           // Optional parameters
           {}
         );
       },
       this
     );
    

    function moveUpDown() {
      console.log("moveDownUp");
      this.tweens.timeline({
        targets: this.seniorupdown,
        ease: "Linear",
        loop: -1, // loop forever
        duration: 1000,
        tweens: [
          {
            y: 87,
          },
          {
            y: 355,
          },
        ],
      });
    }
    function moveDownUp() {
      console.log("moveDownUp");
      this.tweens.timeline({
        targets: this.seniordownup,
        ease: "Linear",
        loop: -1, // loop forever
        duration: 1000,
        tweens: [
          {
            y: 419,
          },
          {
            y: 87,
          },
        ],
      });
    }
    }

    update() {
        if (this.cursors.left.isDown){
            this.player.body.setVelocityX(-200);
            this.player.anims.play("left",true);
           
          }
          else if (this.cursors.right.isDown){
            this.player.body.setVelocityX(200);
            this.player.anims.play("right",true);
      
          }
          else if (this.cursors.up.isDown){
            this.player.body.setVelocityY(-200);
            this.player.anims.play("back",true);
      
          }
          else if (this.cursors.down.isDown){
            this.player.body.setVelocityY(200);
            this.player.anims.play("front",true);
      
          }
          else{
            this.player.anims.stop();
            this.player.body.setVelocity(0,0);
          }
    }

    

}
