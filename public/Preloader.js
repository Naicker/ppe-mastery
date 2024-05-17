export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader')
    }
    preload ()
    {
        this.load.setPath('./assets')
        this.load.image('titlescreen', './backgrounds/titlescreen.png');   
    }
    create ()
    {
        this.scene.start('StartMenu');
    }
}