export default class Level3 extends Phaser.Scene {
    constructor() {
        super('Level3');

        this.dropZones = [
            { x: 800, y: 600, key: 'dz1', correctPPE: 'ppe1' },
            { x: 900, y: 600, key: 'dz2', correctPPE: 'ppe2' }, // Added another drop zone next to the first one
            { x: 800, y: 700, key: 'dz3', correctPPE: 'ppe3' },
            { x: 900, y: 700, key: 'dz4', correctPPE: 'ppe4' }, // Added another drop zone next to the third one
            // ... add more drop zones as needed
        ];

        this.ppeItems = [
            { x: 100, y: 500, key: 'ppe1' },
            { x: 200, y: 500, key: 'ppe2' },
            { x: 300, y: 500, key: 'ppe3' },
            { x: 400, y: 500, key: 'ppe4' },
            // ... add more PPE items as needed
        ];
    }

    create() {
        this.add.image(400, 300, 'background_level3').setDisplaySize(800, 600);
        this.add.image(400, 300, 'worker_without_ppe').setDisplaySize(800, 600);

        this.dropZones.forEach(hazard => {
            // Add drop zone image
            const dropZoneImage = this.add.image(hazard.x - 300, hazard.y - 100, hazard.key).setScale(0.09).setInteractive({ dropZone: true });
            dropZoneImage.setData('key', hazard.key);
            dropZoneImage.setData('correctPPE', hazard.correctPPE);
            dropZoneImage.setData('filled', false);
            console.log('drop_ppe', dropZoneImage);
        });

        this.ppeItems.forEach(ppeItem => {
            const ppeImage = this.add.image(ppeItem.x, ppeItem.y, ppeItem.key).setScale(0.15).setInteractive();
            this.input.setDraggable(ppeImage);
        });

        // Drag events
        this.input.on('dragstart', (pointer, gameObject) => {
            this.children.bringToTop(gameObject);
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('dragend', (pointer, gameObject, dropped) => {
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        });

        this.input.on('drop', (pointer, gameObject, dropZone) => {
            if (gameObject.texture.key === dropZone.getData('correctPPE')) {
                gameObject.x = dropZone.x;
                gameObject.y = dropZone.y;
                dropZone.setData('filled', true);
            } else {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }

            // Check if all hazards have been correctly matched with PPEs
            const allMatched = this.dropZones.every(hazard => {
                return this.children.list.some(child => {
                    return child.getData('key') === hazard.key && child.getData('filled');
                });
            });

            if (allMatched) {
                // Display the next button
                const nextButton = this.add.text(20, 550, 'Next', { fill: '#0f0' }).setInteractive();
                nextButton.on('pointerdown', () => {
                    // Move to the next level or end game
                    this.scene.start('Level4'); // Change 'NextLevel' to your actual next scene key
                });
            }
        });
    }
}