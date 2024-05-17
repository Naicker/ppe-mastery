export default class StartMenu extends Phaser.Scene
{
    constructor () {
        super('StartMenu')
    }

    create ()
    {
        const background = this.add.image(400, 300, 'titlescreen').setDisplaySize(800,600);
        
    }
}