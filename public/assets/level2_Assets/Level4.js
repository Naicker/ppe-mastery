import Phaser from 'phaser';

export default class Level2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level2' });
        this.backgrounds = ['background1', 'background2'];
        this.dropboxes = ['dropbox1', 'dropbox2', 'dropbox3'];
        this.elements = ['element1', 'element2', 'element3'];
    }

    preload() {
        this.load.image('background1', 'assets/background1.png');
        this.load.image('background2', 'assets/background2.png');
        this.load.image('dropbox1', 'assets/dropbox1.png');
        this.load.image('dropbox2', 'assets/dropbox2.png');
        this.load.image('dropbox3', 'assets/dropbox3.png');
        this.load.image('element1', 'assets/element1.png');
        this.load.image('element2', 'assets/element2.png');
        this.load.image('element3', 'assets/element3.png');
    }

    create() {
        this.background = this.add.image(400, 300, this.backgrounds[0]);
        this.background.setInteractive();
        this.background.on('pointerdown', () => this.setBackground(1));

        this.dropboxes.forEach((dropbox, index) => {
            this[dropbox] = this.physics.add.sprite(100 * (index + 1), 100, dropbox).setInteractive();
            this.input.setDraggable(this[dropbox]);
        });

        this.elements.forEach((element, index) => {
            this[element] = this.physics.add.sprite(100 * (index + 1), 500, element).setInteractive();
            this.input.setDraggable(this[element]);
        });

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('dragend', (pointer, gameObject) => {
            this.dropboxes.forEach(dropbox => {
                if (Phaser.Geom.Intersects.RectangleToRectangle(gameObject.getBounds(), this[dropbox].getBounds())) {
                    gameObject.x = this[dropbox].x;
                    gameObject.y = this[dropbox].y;
                }
            });
        });
    }

    setBackground(index) {
        this.background.setTexture(this.backgrounds[index]);
    }
}