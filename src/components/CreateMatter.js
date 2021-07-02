import Matter from 'matter-js';

class matterCanvas {
    constructor(boxId) {
        this.box = document.getElementById(boxId);
        this.boxprop = {
            height: this.box.clientHeight,
            width: this.box.clientWidth
        }

        this.Engine = Matter.Engine;
        this.Render = Matter.Render;
        this.Runner = Matter.Runner;
        this.Bodies = Matter.Bodies;
        this.Composite = Matter.Composite;    

        this.engine = this.Engine.create()
        this.world = this.engine.world;
    }

    // configure rendering engine
    configureRenderEngine(options) {
        options.width = this.boxprop.width;
        options.height = this.boxprop.height;
        this.RenderEngine = this.Render.create({
            element: this.box,
            engine: this.engine,
            options: options
        });
    }

    //run the engine and everything else
    //should be run last
    run() {
        this.Render.run(this.RenderEngine);
        this.runner = this.Runner.create();
        this.Runner.run(this.runner, this.engine);
    }
}

export default matterCanvas;