class world3 extends Phaser.Scene {
  constructor() {
    super({
      key: "world3",
      
    });
    this.score = 0
  }

  // incoming data from scene below
  init(data) {}

  preload() {
    // Step 1, load JSON
   this.load.tilemapTiledJSON("world","assets/world2test.json");

    // Step 2 : Preload any images here, nickname, filename
    this.load.image("world","assets/tilestbw.png")
    this.load.atlas('jimfront', 'assets/frontwalk.png','assets/frontwalk.json');
    this.load.atlas('jimright', 'assets/rightwalk.png','assets/rightwalk.json');
    this.load.atlas('jimleft', 'assets/leftwalk.png','assets/leftwalk.json');
    this.load.atlas('jimback', 'assets/backwalk.png','assets/backwalk.json');
    this.load.audio('background','assets/saiba31.mp3');
  }

  create() {
    console.log("*** world3 scene");

    
    let map = this.make.tilemap({key:"world"});

    this.backgroundmusic = this.sound.add('background').setVolume(0.3);

    window.music1 = this.backgroundmusic
    window.music1.play();
    window.music1.loop = true;
    
    let world = map.addTilesetImage("tilestbw", "world");
  
    this.floor = map.createLayer("floor", [world], 0, 0);
    this.wall = map.createLayer("wall", [world], 0, 0);
    this.access = map.createLayer("access", [world], 0, 0);
    this.stair = map.createLayer("stair", [world], 0, 0);
 
      

   // this.physics.add.sprite(100,150,'jim')
    

    // Add time event / movement here
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

  this.player = this.physics.add.sprite(406 ,750 ,"jimback")
  this.player.setScale(0.15). setSize(100,130)

  //enable debug
  window.player = this.player;

   
    this.player.setCollideWorldBounds(false);
    this.access.setCollisionByProperty({wall: true})
    this.wall.setCollisionByProperty({wall: true})
    
    this.physics.add.collider(this.wall, this.player);
    this.physics.add.collider(this.access, this.player);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);


    
  } /////////////////// end of create //////////////////////////////

  update() {

    
    //if (this.player.x > 23 && this.player.x < 32 && this.player.y > 473 && this.player.y < 503 ) {
    //this.room1()
    //};
    //if (this.player.x > 743 && this.player.x < 777 && this.player.y > 411 && this.player.y < 420 ) {
      //this.room2()
     // };
    if (this.player.x > 343 && this.player.x < 377 && this.player.y > 27 && this.player.y < 37 ) {
        this.room3()
        };

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

  // Function to jump to rooms
  room1(player, tile) {
    console.log("room1 function");
    this.scene.start("room1")
    window.music1.stop();
  }
  room2(player,tile){
    console.log("room2 function");
    this.scene.start("room2")
    window.music1.stop();
  }
  room3(player,tile){
    console.log("room3 function");
    this.scene.start("room3")
    window.music1.stop();
  }
  
} //////////// end of class world ////////////////////////
