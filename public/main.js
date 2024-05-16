window.onload = function() {    const config = {
    type: Phaser.AUTO,        width: 800,
    height: 600,        backgroundColor: '#2d2d2d',
    physics: {            default: 'arcade',
        arcade: {                gravity: { y: 300 },
            debug: false            }
    },        scene: [BootScene, Level1, Level2, Level3, Level4, MiniGame, Leaderboard]
};
const game = new Phaser.Game(config);};
class BootScene extends Phaser.Scene {
constructor() {        super({ key: 'BootScene' });
}
preload() {        // Load common assets
}
create() {        this.scene.start('Level1');
}}

class Level1 extends Phaser.Scene {    constructor() {
    super({ key: 'Level1' });    }
create() {
    // Setup background and game logic for level 1        this.add.text(10, 10, 'Identify Risks', { font: '16px Arial', fill: '#ffffff' });
    // Example interaction to identify risks
    this.input.on('pointerdown', (pointer) => {            // Logic to check if pointer is on a risk
        // If true, increase score and display next item            // Once all risks are identified, proceed to level 2
        this.scene.start('Level2');        });
}}
class Level2 extends Phaser.Scene {
constructor() {        super({ key: 'Level2' });
}
create() {        // Setup for choosing correct PPE
    this.add.text(10, 10, 'Choose Correct PPE', { font: '16px Arial', fill: '#ffffff' });
    // Example interaction to choose PPE        this.input.on('pointerdown', (pointer) => {
        // Logic to select PPE            // If correct, increase score
        // Once all scenarios are completed, proceed to level 3            this.scene.start('Level3');
    });    }
}
class Level3 extends Phaser.Scene {    constructor() {
    super({ key: 'Level3' });    }
create() {
    // Setup for identifying wrong PPE and suggesting correct method        this.add.text(10, 10, 'Identify Wrong PPE', { font: '16px Arial', fill: '#ffffff' });
    // Example interaction for wrong PPE
    this.input.on('pointerdown', (pointer) => {            // Logic to identify wrong PPE and suggest correct one
        // If correct, increase score            // If wrong, add penalty
        // Once all scenarios are completed, proceed to level 4            this.scene.start('Level4');
    });    }
}
class Level4 extends Phaser.Scene {    constructor() {
    super({ key: 'Level4' });    }
create() {
    // Setup for final tasks in different environments        this.add.text(10, 10, 'Prepare Employee to Work', { font: '16px Arial', fill: '#ffffff' });
    // Example interaction to choose environment and complete tasks
    this.input.on('pointerdown', (pointer) => {            // Logic to handle tasks in refinery or plantation
        // If task is executed wrongly, initiate mini-game            // If mini-game is won, allow retry
        this.scene.start('MiniGame');        });
}}
class MiniGame extends Phaser.Scene {
constructor() {        super({ key: 'MiniGame' });
}
create() {        // Setup mini-game to match PPE to its functions
    this.add.text(10, 10, 'Mini Game: Match PPE to Function', { font: '16px Arial', fill: '#ffffff' });
    // Example interaction for matching PPE        this.input.on('pointerdown', (pointer) => {
        // Logic to match PPE correctly            // If matched, allow retry of level 4
        this.scene.start('Level4');        });
}}
class Leaderboard extends Phaser.Scene {
constructor() {        super({ key: 'Leaderboard' });
}
create() {        // Setup for leaderboard
    this.add.text(10, 10, 'Leaderboard', { font: '16px Arial', fill: '#ffffff' });
    // Display leaderboard based on completion time
}}