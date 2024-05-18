export default class Level2 extends Phaser.Scene {
    constructor() {
        super('Level2');

        // Define hazards and PPEs as class properties
        this.hazards = [
            { x: 100, y: 100, key: 'hazard1', correctPPE: 'ppe1' },
            { x: 700, y: 500, key: 'hazard2', correctPPE: 'ppe2' },
            // ... add more hazards as needed
        ];

        this.ppeItems = [
            { x: 350, y: 200, key: 'ppe1' },
            { x: 250, y: 250, key: 'ppe2' },
            // ... add more PPE items as needed
        ];
    }

    create() {
        // Display the background
        this.add.image(400, 300, 'ground').setDisplaySize(800,600);

        // Display hazards and create drop zones
        this.hazards.forEach(hazard => {
            // Position hazards to the left of the game
            hazard.x = 70; // Adjust this value as needed

            // Display hazard
            this.add.image(hazard.x, hazard.y, hazard.key);

            // Create drop zones using 'star' image
            const zone1 = this.add.image(hazard.x + 5000, 50, 'star').setDisplaySize(800,600).setInteractive();
            const zone2 = this.add.image(hazard.y + 4000, 40, 'star').setInteractive();

            zone1.setData('key', hazard.key);
            zone1.setData('correctPPE', hazard.correctPPE);
            zone1.setData('filled', false);

            zone2.setData('key', hazard.key);
            zone2.setData('correctPPE', hazard.correctPPE);
            zone2.setData('filled', false);
        });

        // Create draggable PPE items
        this.ppeItems.forEach(ppe => {
            const item = this.add.image(ppe.x, ppe.y, ppe.key).setInteractive();
            this.input.setDraggable(item);
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

            
                // Display the next button
                const nextButton = this.add.text(200, 550, 'Next', { fill: '#0f0' }).setInteractive();
                nextButton.on('pointerdown', () => {
                    // Move to the next level or end game
                    this.scene.start('NextLevel'); // Change 'NextLevel' to your actual next scene key
                });
            
        });
    }
}
