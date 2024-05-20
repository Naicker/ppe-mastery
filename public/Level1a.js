export default class Level1 extends Phaser.Scene {
    constructor() {
        super('Level1a');
        this.score = 0;
        this.risks = [
            {x: 403, y: 150},

        ];
    }

    create() {
        // Display the background
        this.add.image(400, 300, 'hazard2').setDisplaySize(800,600);

        // Display the risks
        this.risks.forEach(risk => {
            const riskImage = this.add.image(risk.x, risk.y, 'hz2').setInteractive();
            riskImage.setScale(0.73);
            riskImage.on('pointerdown', () => this.onRiskClicked(riskImage));
        });


        const hintButton = this.add.text(50, 50, 'Hint', { fill: '#0f0', fontSize: '20px' }).setInteractive();
        hintButton.on('pointerdown', () => {
            // Move to the next level or end game
            this.scene.start('hintPage2'); // Change 'NextLevel' to your actual next scene key
        });
}

onRiskClicked(riskImage) {
    riskImage.destroy();
    this.scene.start('Level1b');
    }
}
