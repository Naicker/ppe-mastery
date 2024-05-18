export default class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        this.load.setPath('./assets');

        // Load assets for the start menu
        this.load.image('titlescreen', 'backgrounds/titlescreen.png');

        // Load assets for Level 1
        this.load.image('ground', 'ground.png');
        this.load.image('star', 'star.png'); // Loading the risk from 'star.png'

        this.load.image('hazard1', 'hazard1.png');
        this.load.image('hz1', 'hz1.png');
        this.load.image('hazard2', 'hazard2.png');
        this.load.image('hz2', 'hz2.png');
        this.load.image('hazard3', 'hazard3.png');
        this.load.image('hz3', 'hz3.png');
        this.load.image('hazard4', 'hazard4.png');
        this.load.image('hz4', 'hz4.png');

        
        //second asset
        this.load.image('hazard1', 'hazard1.png');
        this.load.image('hazard2', 'hazard2.png');
        this.load.image('ppe1', 'ppe1.png');
        this.load.image('ppe2', 'ppe2.png');
        this.load.image('ground', 'ground.png');
        this.load.image('star', 'star.png');
    }

    create() {
        this.scene.start('StartMenu');
    }
}