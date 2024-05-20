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
        this.load.image('tick', 'tick.png');

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

        //fourth asset
        this.load.image('boots_no_ppe', 'boots_no_ppe.png');
        this.load.image('boots_ppe', 'boots_ppe.png');
        this.load.image('dude', 'dude.png');
        this.load.image('drop_box', 'drop_ppe.jpg');
        this.load.image('enviroment_choosing', 'enviroment_choosing.png');
        this.load.image('game_over', 'game_over.png');
        this.load.image('helmet_no_ppe', 'helmet_no_ppe.png');
        this.load.image('safet_helmat_ppe', 'safet_helmat_ppe.png');
        this.load.image('safety_goggles_ppe', 'safety_goggles_ppe.png');
        this.load.image('level4_completed', 'level4_completed.png');
        this.load.image('plantation_enviroment', 'plantation_enviroment.png');
        this.load.image('refinery_enviroment', 'refinery_enviroment.png');
        this.load.image('sun_glass', 'sun_glass.png');
        this.load.image('jacket', 'jacket.png');
        this.load.image('goggles', 'goggles.png');
        this.load.image('facemask', 'facemask.png');
        this.load.image('name1', 'name1.png');
        this.load.image('name2', 'name2.png');
        this.load.image('name3', 'name3.png');

        //hint
        this.load.image('hintBackground', 'hintBackground.png');
        this.load.image('flork', 'flork.png');
        this.load.image('chatbox', 'chatbox.png')


    }

    create() {
        this.scene.start('StartMenu');
    }
}