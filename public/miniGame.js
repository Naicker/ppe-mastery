export default class miniGame extends Phaser.Scene {
    constructor() {
        super('miniGame');

        // Define hazards and PPEs as class properties
        this.hazards = [
            { x: 100, y: 100, key: 'jacket', correctPPE: 'name1' },
            { x: 300, y: 100, key: 'goggles', correctPPE: 'name2' },
            { x: 500, y: 100, key: 'facemask', correctPPE: 'name3'}
            // ... add more hazards as needed
        ];

        this.ppeItems = [
            { x: 100, y: 500, key: 'name1' },
            { x: 300, y: 500, key: 'name2' },
            { x: 500, y: 500, key: 'name3'}
            // ... add more PPE items as needed
        ];
    }


    create() {

        // Display the background
        const bg = this.add.image(400, 300, 'miniBackground').setDisplaySize(800, 600);
        console.log('Background added', bg);

        const hintButton = this.add.text(20, 500, 'Hint', { fill: '#0f0', fontSize: '20px' }).setInteractive();
        hintButton.on('pointerdown', () => {
            // Move to the next level or end game
            this.scene.start('hintPage5'); // Change 'NextLevel' to your actual next scene key
        });

        // Display hazards and create drop zones
        this.hazards.forEach(hazard => {
            const hazardImage = this.add.image(hazard.x, hazard.y, hazard.key).setScale(0.5);
            console.log('Hazard added', hazardImage);

            // Add drop zone image
            const dropZoneImage = this.add.image(hazard.x + 400, hazard.y, 'dropZone').setScale(0.15).setInteractive({ dropZone: true });
            dropZoneImage.setData('key', hazard.key);
            dropZoneImage.setData('correctPPE', hazard.correctPPE);
            dropZoneImage.setData('filled', false);
            console.log('Drop zone added', dropZoneImage);
        });

        // Create draggable PPE items
        this.ppeItems.forEach(ppe => {
            const item = this.add.image(ppe.x, ppe.y, ppe.key).setInteractive();
            item.setScale(0.45);
            this.input.setDraggable(item);
            console.log('PPE item added', item);
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
                gameObject.input.enabled = false;
                dropZone.setData('filled', true);
            } else {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }


            // Check if all hazards have been correctly matched with PPEs
            const allMatched = this.hazards.every(hazard => {
                return this.children.list.some(child => {
                    return child.getData('key') === hazard.key && child.getData('filled');
                });
            });

            if (allMatched) {
                // Display the next button
                const nextButton = this.add.text(20, 550, 'Next', { fill: '#0f0', fontSize: '20px' }).setInteractive();
                nextButton.on('pointerdown', () => {
                    // Move to the next level or end game
                    this.scene.start('Level4'); // Change 'NextLevel' to your actual next scene key
                });
            }
        });
    }
}