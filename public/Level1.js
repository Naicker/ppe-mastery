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


        const hintButton = this.add.text(50, 50, 'Hint', { fill: '#0f0', fontSize: '20px' }).setInteractive();
        hintButton.on('pointerdown', () => {
            // Move to the next level or end game
            this.scene.start('hintPage'); // Change 'NextLevel' to your actual next scene key
        });

}


onRiskClicked(riskImage) {
    riskImage.destroy();
    this.score++;

        // Check if the player has identified all risks
        if (this.score === this.risks.length) {
            // Proceed to level 2
        this.add.image(50,50, 'tick').setScale(1.0);
        this.scene.start('Level1a');
        }
}
}