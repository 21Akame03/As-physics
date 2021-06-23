import Matter from 'matter-js'

/*
    !Alert: refactor the damn thing and optimise the code while your at it
    TODO: to be refactored
*/

// landing page title section
export default function landing() {
    var box = document.getElementById("landing-bg");
    var boxprop = {
        height: box.clientHeight,
        width: box.clientWidth
    }

    // module alias
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite;
    
    // create the physics engine
    var engine = Engine.create();

    // creates the render engine which takes in the engine
    var renderEngine = Render.create({
        element: box,
        engine: engine,
        options: {
            width: box.clientWidth,
            height: box.clientHeight,
            pixelRatio: 1,
            background: '#fafafa',
            wireframeBackground: '#222',
            hasBounds: true,
            enabled: true,
            wireframes: true,
            showSleeping: true,
            showDebug: false,
            showBroadphase: false,
            showVelocity: true,
            showCollisions: false,
            showSeparations: false,
            showAxes: false,
            showPositions: true,
            showAngleIndicator: false,
            showIds: false,
            showShadows: false,
            showVertexNumbers: false,
            showConvexHulls: false,
            showInternalEdges: false,
        }
    });

    //mouse control
    // let mouse = Matter.Mouse.create(renderEngine.canvas);
    // let mouseConstraint = Matter.MouseConstraint.create(engine, {
    //     mouse: mouse,
    //     constraint: {
    //         render: {visible: false,}
    //     }
    // });
    // renderEngine.mouse = mouse;


    var launchpad_pos = {
        x: (0.25 * boxprop.width),
        y: boxprop.height - (0.40 * boxprop.height)
    }


    // boundaries
    // side walls
    var leftWall = Bodies.rectangle(-10, boxprop.height/2, 10, boxprop.height - 30, { isStatic: true });
    leftWall.label = "leftwall";
    var rightWall = Bodies.rectangle(boxprop.width + 10, boxprop.height/2, 10, boxprop.height - 30, { isStatic: true });
    rightWall.label = "rightwall";

    // grounds
    var groundWidth = (0.75 * boxprop.width);         
    //                                  x position              y position                                  width    height      options
    var upperground = Bodies.rectangle(launchpad_pos.x, launchpad_pos.y, groundWidth, 30, {isStatic: true});
    //launchpad collision box to be embedded in upperground
    var launchpad = Bodies.rectangle(100, launchpad_pos.y, 100, 35, {isStatic: true, isSensor:  true});
    launchpad.label="launchpad";

    groundWidth = box.clientWidth - (0.3 * box.clientWidth)
    var baseground = Bodies.rectangle((0.5 * boxprop.width), boxprop.height - 20, groundWidth, 30, { isStatic: true });

    
    // add all of the bodies to the world
    var world = engine.world;
    var boundaries = Composite.add(world, [ baseground, upperground, launchpad, leftWall, rightWall,]);

    // start the rendering engine
    Render.run(renderEngine);

    // runer of the physics engine
    var runner = Runner.create();

    // start the physics engine
    Runner.run(runner, engine);

    var force = {
        x: 0.5,
        y: -0.8
    }

    //screen size
    if (box.clientWidth <= 1200) {
        force.x = Math.random() * (0.7 - 0.4) + 0.4;
        // force.y = -0.4;
        force.y = Math.random() * (0.7 - 0.2) + 0.2;

    }


    //move the circle to the launchpad
    function move(circle) {
        Matter.Body.applyForce(circle, {x: circle.position.x, y: circle.position.y}, force);
    }

    //run every 5 seconds
    setInterval(function(e) {
        // random 
        // Math.floor(Math.random() * (max - min)) + min
        console.log("Create");
        var randSize = Math.floor(Math.random() * (60 - 40)) + 40;
        var newcircle = Bodies.circle(randSize + 10, launchpad_pos.y - randSize, randSize, {restitution: 0.5});
        Matter.World.addBody(world, newcircle);
        move(newcircle);
    }, 3000);


    /*
        Event detection
    */
    Matter.Events.on(runner, "afterTick", function(event) {
        for (var obj of world.bodies) {
            if (obj.position.y > boxprop.height + 100) {
                console.log("deleted", obj);
                Matter.World.remove(world, obj);
            }
        }
    });


    //detect collisions
    Matter.Events.on(engine, "collisionStart", function(event) {
        var pairs = event.pairs[0];

        if (pairs.bodyA.label == "rightwall" || pairs.bodyB.label == "rightwall") {
            Matter.Body.setVelocity(pairs.bodyB, {x: -7, y: -5})
            Matter.Body.applyForce(pairs.bodyB, {x: pairs.bodyB.position.x, y: pairs.bodyB.position.y}, {x: -4, y: 0});
        }
    });

}