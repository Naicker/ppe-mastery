export default class Level4 extends Phaser.Scene {
    constructor() {
        super('Level4');
    }

    create() {
        this.add.image(400, 300, 'enviroment_choosing').setDisplaySize(800, 600);

        const background1Button = this.add.text(50, 300, 'Background1', { fill: '#0f0', fontSize: '20px' }).setInteractive();
        background1Button.on('pointerdown', () => {
            // Set the chosen background
            this.registry.set('background', 'background1');
            // Move to the next level
            this.scene.start('Level4a');
        });

        const background2Button = this.add.text(500, 300, 'Background2', { fill: '#0f0', fontSize: '20px' }).setInteractive();
        background2Button.on('pointerdown', () => {
            // Set the chosen background
            this.registry.set('background', 'background2');
            // Move to the next level
            this.scene.start('Leaderboard');
        });
    }
}