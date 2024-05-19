export default class Boot extends Phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.setPath('./assets');
        this.load.image('loading', './backgrounds/loading.png');
    }

    create ()
    {
        this.registry.set('time', 0);

        this.scene.start('Preloader');
    }
}