import MenuScene from './scene/MenuScene.js';
import GameScene from './scene/GameScene.js';


let menuScene = new MenuScene();
let gameScene = new GameScene();


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};

let game = new Phaser.Game(config);


game.scene.add('MenuScene', menuScene);
game.scene.add('GameScene', gameScene);
game.scene.start('MenuScene');