export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }
init (){
    this.velocity = 5
    this.player;
    this.banana;
    this.enemy;
    this.platforms;
    this.cursors;
    this.score = 0;
    this.gameOver = false;
    this.scoreText;
    this.Resize;
    this.width= this.scale.width
    this.height= this.scale.height
    this.camera= this.cameras.main
    this.x;
    this.y;
}
preload (){
    this.load.image('background', '/assets/img/bg.png');
    this.load.image('ground', '/assets/img/ground.png');
    this.load.image('banana', '/assets/img/banana.png');
    this.load.image('monkey', '/assets/img/monkey.png');
    this.load.image('base-ground', '/assets/img/base-ground.png');
    this.load.spritesheet('main', '/assets/img/mc.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('trees', '/assets/img/trees.png');
    this.load.image('trees2', '/assets/img/trees2.png');
    this.load.image('end', '/assets/img/great-tree.png');
}
create (){
     //  The game's background
     this.add.image(400, 300, 'background')
     .setScrollFactor(0);
     this.add.image(1,100, 'trees2')
     .setOrigin(0,0)
     .setScrollFactor(0.75)
     this.add.image(1,200, 'trees')
     .setOrigin(0,0)
     .setScrollFactor(1)
     this.physics.world.bounds.width= this.width*5.8;
     //  The platforms that allows the player to move
     this.platforms = this.physics.add.staticGroup();
     // In here the base and the platforms are scaled to fit into the game.
     this.platforms = this.physics.add.staticGroup();
    this.platforms.create(0,463, 'base-ground')
        .setOrigin(0,-2.5)
        .refreshBody()
     this.platforms.create(600, 450, 'ground');
     this.platforms.create(200, 250, 'ground');
     this.platforms.create(650, 220, 'ground');
     this.platforms.create(300, 400, 'ground');
     this.platforms.create(900, 500, 'ground');
     this.platforms.create(1000, 200, 'ground');
     this.platforms.create(1100, 350, 'ground');
     this.platforms.create(1500, 400, 'ground');
     this.platforms.create(1700, 200, 'ground');
     this.platforms.create(1800, 360, 'ground');
     this.platforms.create(2000, 450, 'ground');
     // FINISH LINE
     this.end = this.physics.add.sprite(5000, 10, 'end');
     this.end.setCollideWorldBounds(true);
     this.endText = this.add.text(220,250, 'MONKE WON', {fontSize: '80px', fill: '#FF0000'});
     this.endText.setVisible(false);
     this.endText.setScrollFactor(0);
    //Sets bounds
    this.cameras.main.setBounds(0, 0, this.width * 5.8, this.height);
    //this.cameras.main.startFollow(this.player); 
     // The player's settings and physics property for bouncing
     this.player = this.physics.add.sprite(100, 450, 'main');
     this.player.setBounce(0.2);
     this.player.setCollideWorldBounds(true);
     this.cameras.main.startFollow(this.player);
     // The player's walking and jumping animation.
     this.anims.create({
         key: 'left',
         frames: this.anims.generateFrameNumbers('main', { start: 0, end: 3 }),
         frameRate: 10,
         repeat: -1
     });
     this.anims.create({
         key: 'turn',
         frames: [ { key: 'main', frame: 4 } ],
         frameRate: 20
     });
     this.anims.create({
         key: 'right',
         frames: this.anims.generateFrameNumbers('main', { start: 5, end: 8 }),
         frameRate: 10,
         repeat: -1
     });
     //   input events
     this.cursors = this.input.keyboard.createCursorKeys();
     this.banana = this.physics.add.group({
         key: 'banana',
         repeat: 20,
         setXY: { x: 120, y: 0, stepX: 170 }
     });
     this.banana.children.iterate(function (child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
     });
     //Hostile Monkey
     this.enemy = this.physics.add.group({
        key: 'monkey',
        repeat: 5,
        setXY: {x: 1100, y:0, stepX:500}
     });
     this.x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        this.monkey = this.enemy.create(this.x, 16, 'monkey');
        this.monkey.setBounce(1);
        this.monkey.setCollideWorldBounds(true);
        this.monkey.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.monkey.allowGravity = false;

        this.monkey = this.enemy.create(500, 16, 'monkey');
        this.monkey.setBounce(1);
        this.monkey.setCollideWorldBounds(true);
        this.monkey.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.monkey.allowGravity = false;

        this.monkey = this.enemy.create(1000, 16, 'monkey');
        this.monkey.setBounce(1);
        this.monkey.setCollideWorldBounds(true);
        this.monkey.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.monkey.allowGravity = false;

        this.monkey = this.enemy.create(1500, 16, 'monkey');
        this.monkey.setBounce(1);
        this.monkey.setCollideWorldBounds(true);
        this.monkey.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.monkey.allowGravity = false;

        this.monkey = this.enemy.create(2000, 16, 'monkey');
        this.monkey.setBounce(1);
        this.monkey.setCollideWorldBounds(true);
        this.monkey.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.monkey.allowGravity = false;

        this.monkey = this.enemy.create(2500, 16, 'monkey');
        this.monkey.setBounce(1);
        this.monkey.setCollideWorldBounds(true);
        this.monkey.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.monkey.allowGravity = false;

        this.monkey = this.enemy.create(3000, 16, 'monkey');
        this.monkey.setBounce(1);
        this.monkey.setCollideWorldBounds(true);
        this.monkey.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.monkey.allowGravity = false;
     
     //  The score
     this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
     this.scoreText.setScrollFactor(0);
     // Player death
     this.gameOverText = this.add.text(220,250, 'GAME OVER', {fontSize: '80px', fill: '#FF0000'});
     this.gameOverText.setVisible(false);
     this.gameOverText.setScrollFactor(0);

     //  Collision code 
     this.physics.add.collider(this.player, this.platforms);
     //this.physics.add.collider(this.player, this.end);
     this.physics.add.collider(this.banana, this.platforms);
     this.physics.add.collider(this.enemy, this.platforms);
     this.physics.add.collider(this.end, this.platforms);
     this.physics.add.overlap(this.player, this.banana, this.collectGem, null, this);
     this.physics.add.overlap(this.player, this.end, this.endGame, null, this);
     this.physics.add.collider(this.player, this.enemy, this.enemyHit, null, this);
    }
update ()
{
    if (this.gameOver==true)
    {
        this.gameOverText.setVisible(true);
    }
    if (this.cursors.left.isDown)
    {
        this.camera.scrollX -= this.velocity
        this.player.setVelocityX(-160);
        this.player.anims.play('left', true);
    }
    else if (this.cursors.right.isDown)
    {
        this.camera.scrollX += this.velocity
        this.player.setVelocityX(160);
        this.player.anims.play('right', true);
    }
    else
    {
        this.player.setVelocityX(0);
        this.player.anims.play('turn');
    }
    if (this.cursors.up.isDown && this.player.body.touching.down)
    {
        this.player.setVelocityY(-330);   
    }
    /// Shift key to sprint
    this.Shift;
    this.Shift = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
if (this.Shift.isDown){
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-550);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(550);
            this. player.anims.play('right', true);
        }
    }
    else if (this.cursors.left.isDown)
    {
        this.player.setVelocityX(-160);
        this.player.anims.play('left', true);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.setVelocityX(160);
        this.player.anims.play('right', true);
    }
}
collectGem (player, banana)
{
    banana.disableBody(true, true);
  
    //  Add and update the score
    this.score += 10;
    this.scoreText.setText('Score: ' + this.score);
    if (this.banana.countActive(true) === 0)
    {
        //  A new batch of banana to collect
        this.banana.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });
    }
}
enemyHit (player, monkey)
{
    this.physics.pause();
    this.player.setTint(0xff0000);
    this.player.anims.play('turn');
    this.gameOver = true;
}
endGame(player,end)
{
    this.physics.pause();
    this.player.anims.play('turn');
    this.scoreText.setVisible(false);
    this.endText.setVisible(true);
}
}