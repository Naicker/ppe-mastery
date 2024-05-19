export default class hintPage extends Phaser.Scene {
    constructor() {
        super('hintPage');

        // Define hazards and PPEs as class properties
        this.flork = [
            { x: 100, y: 100, key:'flork1' },
        ];

        this.chatbox = [
            { x: 400, y: 500, key: 'chatbox' },
        ];
    }
    
    create() {
        // Add background
        const bg = this.add.image(400, 300, 'ground').setDisplaySize(800, 600);

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
        this.add.text(200, 420, 'You should wear a helmet to protect yourself.', { fontSize: '20px', fill: '#000' });
    }
}