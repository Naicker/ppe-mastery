export default class hintPage2 extends Phaser.Scene {
    constructor() {
        super('hintPage2');

        // Define hazards and PPEs as class properties
        this.flork = [
            { x: 100, y: 100, key:'flork' },
        ];

        this.chatbox = [
            { x: 400, y: 500, key: 'chatbox' },
        ];

        this.exitButton = [
            { x: 750, y: 50, key: 'exitButton' },
        ];
    }



    create() {
        // Add background
        const bg = this.add.image(400, 300, 'hintBackground').setDisplaySize(800, 600);

        // Add flork
        this.flork.forEach((flork) => {
            this.add.image(flork.x, flork.y, flork.key).setScale(0.5);
        });

        // Add chatbox
        this.chatbox.forEach((chatbox) => {
            this.add.image(chatbox.x, chatbox.y, chatbox.key).setScale(0.5);
        });

        // Add text
        this.add.text(200, 400, 'This is a flork. It is a hazard.', { fontSize: '20px', fill: '#000' });
        this.add.text(200, 420, 'You should wear a helmet to protect yourself.', { fontSize: '20px', fill: '#000' });

        // Add exit button
        this.exitButton.forEach((exitButton) => {
            const button = this.add.text(20, 550, 'exit', { fill: '#0f0', fontSize: '20px' }).setInteractive();
            button.on('pointerdown', () => {
                // Return to the previous scene
                this.scene.start('Level1a');
            });
        });
    }
}