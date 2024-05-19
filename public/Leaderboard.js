export default class StartMenu extends Phaser.Scene
{
    constructor () {
        super('Leaderboard')
    }

    create ()
    {
        const d = new Date();
        const t = d.getTime() - this.registry.get('time');
        this.registry.set('time', Math.round((t/600))/100);
        const score = this.registry.get('time')
        console.log("time:"+this.registry.get('time'));

        this.add.image(400, 300, 'leaderboard_bg').setDisplaySize(800,600);
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff3300, 1);

        graphics.fillRect(90, 150, 590, 250);


        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;
        
        this.add.image(centerX, 100, 'leader_title').setScale(0.5);

        const leaderboard = [
            { rank: 1, score: this.registry.get('time') },
            { rank: 2, score: (Math.round(score*100-0.1)/100)},
            { rank: 3, score: (Math.round(score*100-0.2)/100)},
            { rank: 4, score: (Math.round(score*100-0.4)/100)},
            { rank: 5, score: (Math.round(score*100-0.5)/100)},
        ];

        let xs = 100;
        let ys = 170;

        for (let i = 0; i < leaderboard.length; i++) {
            // Create a text object for the rank
            this.add.text(xs, ys + i * 25, `Rank: ${leaderboard[i].rank}`, { fill: '#0f0', fontSize: '30px' });
    
            // Create a text object for the score, positioned a bit to the right
            this.add.text(xs + 200, ys + i * 25, `Score: ${leaderboard[i].score}`, { fill: '#0f0', fontSize: '30px' });
        }
    
    

        this.add.sprite(395, 475, 'nextButton');
        this.introText = this.add.text(centerX, centerY, 'Play Again', { font: '32px Arial', fill: '#000000' });
        // Set the origin of the text to be the center
        this.introText.setOrigin(0.5, -4.5);
        
        this.input.once('pointerdown', () => { 
            this.tweens.add({
                targets: this.introText,
                alpha: 0,
                duration: 300,
                onComplete: () => {
                    this.scene.start('StartMenu');
                }

            });
        });
    }
}





