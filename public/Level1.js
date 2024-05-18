export default class Level1 extends Phaser.Scene {
    constructor() {
        super('Level1');
        this.score = 0;
        this.risks = [
            {x: 485, y: 523},

        ];
    }

    create() {
        // Display the background
        this.add.image(400, 300, 'hazard1').setDisplaySize(800,600);

        // Display the risks
        this.risks.forEach(risk => {
            const riskImage = this.add.image(risk.x, risk.y, 'hz1').setInteractive();
            riskImage.setScale(0.75);
            riskImage.on('pointerdown', () => this.onRiskClicked(riskImage));
        });
  // Display the score
  this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
}

onRiskClicked(riskImage) {
    riskImage.destroy();
    this.score++;

    

        // Check if the player has identified all risks
        if (this.score === this.risks.length) {
            // Proceed to level 2
        this.scene.start('Level1a');
        }
}
}