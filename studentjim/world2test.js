class world2test extends Phaser.Scene {
  constructor() {
    super({
      key: 'world2test',
    });
  }

  // incoming data from scene below
  init(data) {}

  preload() {
    // Step 1, load JSON
   this.load.tilemapTiledJSON("world2test","assets/world2test.json");

    // Step 2 : Preload any images here, nickname, filename
    this.load.image("school", "assets/tilestbw.png");
    this.load.image("streetLayer","assets/Street32x32.png")
    this.load.atlas('jimfront', 'assets/frontwalk.png','assets/frontwalk.json');
    this.load.atlas('jimright', 'assets/rightwalk.png','assets/rightwalk.json');
    this.load.atlas('jimleft', 'assets/leftwalk.png','assets/leftwalk.json');
    this.load.atlas('jimback', 'assets/backwalk.png','assets/backwalk.json');
  }

  create() {
    console.log("*** world2test scene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({key:"world2test"});

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let school = map.addTilesetImage("tilestbw", "school");
    let streetTiles = map.addTilesetImage("Street32x32", "street");
    // Step 5  Load in layers by layers
    this.floor = map.createLayer("floor", [buildingTiles,streetTiles], 0, 0);
    this.wall = map.createLayer("wall", [buildingTiles,streetTiles], 0, 0);
    this.access = map.createLayer("access", [buildingTiles,streetTiles], 0, 0);
    this.stair = map.createLayer("stair", [buildingTiles,streetTiles], 0, 0);

    // Add main player here with physics.add.sprite
    this.physics.add.sprite(100,150,'jim')
    

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

this.player = this.physics.add.sprite(200,200,'jimfront')
this.player.setScale(0.3)

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
  } /////////////////// end of create //////////////////////////////

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
  } /////////////////// end of update //////////////////////////////

  // Function to jump to room1
  room1(player, tile) {
    console.log("room1 function");
  }
} //////////// end of class world ////////////////////////
