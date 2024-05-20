export default class Level4a extends Phaser.Scene {
    constructor() {
        super('Level4a');

        this.dropZone1 = { x: 900, y: 1000, key: 'dz1', correctPPE: ['boots_ppe', 'boots_no_ppe'] };
        
        this.dropZone2 = { x: 555, y: 550, key: 'dz2', correctPPE: ['safet_helmat_ppe', 'helmet_no_ppe'] };

        this.dropZone3 = { x: 700, y: 600, key: 'dz3', correctPPE: ['safety_goggles_ppe', 'sun_glass'] };


                this.dropZones = [this.dropZone1, this.dropZone2, this.dropZone3];

                this.ppeItems = [
                    { x: 200, y: 500, key: 'boots_ppe' },
                    { x: 100, y: 500, key: 'boots_no_ppe' },
                    { x: 400, y: 500, key: 'safet_helmat_ppe' },
                    { x: 300, y: 500, key: 'helmet_no_ppe' },
                    { x: 500, y: 500, key: 'safety_goggles_ppe' },
                    { x: 600, y: 500, key: 'sun_glass' },
                    // ... add more PPE items as needed
                ];
    }

    create() {
        this.add.image(400, 300, 'plantation_enviroment').setDisplaySize(800, 600);
        this.add.image(400, 300, 'dude').setDisplaySize(800, 600);


        const hintButton = this.add.text(20, 500, 'Hint', { fill: '#0f0', fontSize: '20px' }).setInteractive();
        hintButton.on('pointerdown', () => {
            // Move to the next level or end game
            this.scene.start('hintPage'); // Change 'NextLevel' to your actual next scene key
        });


        this.dropZones.forEach(hazard => {
            // Add drop zone image
            const dropZoneImage = this.add.image(hazard.x - 300, hazard.y - 500, hazard.key).setScale(0.06).setInteractive({ dropZone: true });
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
            // Check if the drop zone is already filled
            if (dropZone.getData('filled')) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            } else {
                if (dropZone.getData('correctPPE').includes(gameObject.texture.key)) {
                    gameObject.x = dropZone.x;
                    gameObject.y = dropZone.y;
                    dropZone.setData('filled', true);
                } else {
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                }
            }
        
            // Check if any incorrect PPE items have been matched
            const incorrectMatched = this.dropZones.some(hazard => {
                return this.children.list.some(child => {
                    return child.getData('key') === hazard.key && child.getData('filled') && hazard.correctPPE[1] === child.texture.key;
                });
            });
        

        
                if (incorrectMatched) {
                    const nextButton = this.add.text(20, 550, 'Next', { fill: '#0f0', fontSize: '20px' }).setInteractive();
                    nextButton.on('pointerdown', () => {
                    // Move to Level6
                    this.scene.start('Level6');
                });
            }


                 else {
                    // Check if all hazards have been correctly matched with PPEs
                    const allMatched = this.dropZones.every(hazard => {
                        return this.children.list.some(child => {
                            return child.getData('key') === hazard.key && child.getData('filled') && hazard.correctPPE[0] === child.texture.key;
                        });
                    });
        
                    if (allMatched) {
                        const nextButton = this.add.text(20, 550, 'Next', { fill: '#0f0', fontSize: '20px' }).setInteractive();
                        nextButton.on('pointerdown', () => {
                        // Move to Level6
                        this.scene.start('Leaderboard');
                    });
                    }
                }
            
        });
    }
}
