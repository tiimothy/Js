class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });
  }

  // incoming data from scene below
  init(data) {}

  preload() {
    // Step 1, load JSON
   this.load.tilemapTiledJSON("world","assets/world2test.json");

    // Step 2 : Preload any images here, nickname, filename
    this.load.image("world","assets/tilestbw.png")
    this.load.image("buildingLayer", "assets/Buildings32x32.png");
    this.load.image("streetLayer","assets/Street32x32.png")
    this.load.atlas('jimfront', 'assets/frontwalk.png','assets/frontwalk.json');
    this.load.atlas('jimright', 'assets/rightwalk.png','assets/rightwalk.json');
    this.load.atlas('jimleft', 'assets/leftwalk.png','assets/leftwalk.json');
    this.load.atlas('jimback', 'assets/backwalk.png','assets/backwalk.json');
  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({key:"world"});

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let world = map.addTilesetImage("tilestbw", "world");
    // Step 5  Load in layers by layers
    this.floor = map.createLayer("floor", [world], 0, 0);
    this.wall = map.createLayer("wall", [world], 0, 0);
    this.access = map.createLayer("access", [world], 0, 0);
    this.stair = map.createLayer("stair", [world], 0, 0);
    //ObjectLayer
      var startPoint = map.findObject(
      "objectLayer", (obj) => obj.name === "startPoint"
      );
      var endPoint = map.findObject(
        "objectLayer", (obj) => obj.name === "endPoint"
    );

     var start = map.findObject("objectLayer", (obj) => obj.name === "start")
    // Add main player here with physics.add.sprite
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

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool
    this.player.setCollideWorldBounds(false);
    this.access.setCollisionByProperty({wall: true})
    this.wall.setCollisionByProperty({wall: true})
    // What will collider witg what layers
    this.physics.add.collider(this.wall, this.player);
    this.physics.add.collider(this.access, this.player);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);


    
  } /////////////////// end of create //////////////////////////////

  update() {

    //check for room1
    if (this.player.x > 23 && this.player.x < 32 && this.player.y > 473 && this.player.y < 503 ) {
    this.room1()
    };
    if (this.player.x > 743 && this.player.x < 777 && this.player.y > 411 && this.player.y < 420 ) {
      this.room2()
      };
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
  } /////////////////// end of update //////////////////////////////

  // Function to jump to rooms
  room1(player, tile) {
    console.log("room1 function");
    this.scene.start("room1")
  }
  room2(player,tile){
    console.log("room2 function");
    this.scene.start("room2")
  }
  room3(player,tile){
    console.log("room3 function");
    this.scene.start("room3")
  }
} //////////// end of class world ////////////////////////
