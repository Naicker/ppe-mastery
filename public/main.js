import Preloader from "./Preloader.js"
import StartMenu from "./StartMenu.js"
import Level1 from "./Level1.js"
import Level1a from "./Level1a.js"
import Level1b from "./Level1b.js"
import Level1ab from "./Level1ab.js"
import Level2 from "./Level2.js"
import Level3 from "./Level3.js"
import Level4 from "./Level4.js"
import Level4a from "./Level4a.js"
import hintPage from "./hintPage.js"
import hintPage2 from "./hintPage2.js"
import miniGame from "./miniGame.js"





const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        width: 800,
        height: 600

    },
    scene: [Preloader, StartMenu, Level1, Level1a, Level1b, Level1ab,Level2, Level3, Level4, Level4a, miniGame,hintPage,hintPage2],
    physics: {
        default: 'arcade',
        arcade: {debut: false}
    }
};

const game = new Phaser.Game(config);



