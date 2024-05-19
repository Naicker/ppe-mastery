export default class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        this.load.setPath('./assets');

        this.add.image(400, 300, 'loading').setDisplaySize(800,600);

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

        // Load assets for Level 2
        this.load.image('ground', 'ground.png');
        this.load.image('hz1', 'hz1.png');
        this.load.image('hz2', 'hz2.png');
        this.load.image('ppe1', 'ppe1.png');
        this.load.image('ppe2', 'ppe2.png');
        this.load.image('ppe3', 'ppe3.png');
        this.load.image('ppe4', 'ppe4.png');
        this.load.image('dropZone', 'dropZone.png');
        this.load.image('dz1', 'dz1.png');
        this.load.image('dz2', 'dz2.png');
        this.load.image('dz3', 'dz3.png');
        this.load.image('dz4', 'dz4.png');
        this.load.image('nextButton', 'nextButton.png');

        //second asset
        this.load.image('hazard1', 'hazard1.png');
        this.load.image('hazard2', 'hazard2.png');
        this.load.image('ppe1', 'ppe1.png');
        this.load.image('ppe2', 'ppe2.png');
        this.load.image('ground', 'ground.png');
        this.load.image('star', 'star.png');

        //third assest
        this.load.image('background_level3', 'Level3 Assets/background_level3.png');
        this.load.image('worker_without_ppe', 'Level3 Assets/worker_without_ppe.png');
        this.load.image('mask_ppe', 'Level3 Assets/mask_ppe.jpg');
        this.load.image('drop_box', 'Level3 Assets/drop_ppe.jpg');
        this.load.image('gloves_ppe', 'Level3 Assets/gloves_ppe.jpg');




        this.load.image('leaderboard_bg', 'leaderboard_background.png');
        this.load.image('leader_title', 'leaderboard_title.png')


    }

    create() {
        this.scene.start('StartMenu');
    }
}