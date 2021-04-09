export default class MenuScene extends Phaser.Scene {
    
    constructor() {
        super('MenuScene');
    }
    
    preload(){

        this.load.image('title', '/assets/img/title.png');
        this.load.image('start', '/assets/img/start.png');

    }
    create(){
        ///Background of the menu
        this.cameras.main.setBackgroundColor('#000000');
        ///Game title and logo
        this.add.image(390, 200, 'title');
        ///Start
        let start= this.add.sprite(400,500, 'start');
        start.setInteractive();
        start.on('pointerdown',()=> this.startButton());
    }    
    startButton(pointer,start) {
    this.scene.start('GameScene');
    }
}
