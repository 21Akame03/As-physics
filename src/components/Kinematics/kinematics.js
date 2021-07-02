import Matter from 'matter-js'
import matterCanvas from '../CreateMatter';

/*
    !Alert: refactor the damn thing and optimise the code while your at it
    TODO: to be refactored
*/
function landing() {
    let canvas = new matterCanvas("landing-bg");
    canvas.configureRenderEngine({
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
    });


    let launchpad_pos = {
        x: (0.25 * canvas.boxprop.width),
        y: canvas.boxprop.height - (0.40 * canvas.boxprop.height)
    }  
        
    // boundaries
    // side walls
    let leftWall = canvas.Bodies.rectangle(-10, canvas.boxprop.height/2, 10, canvas.boxprop.height - 30, { isStatic: true });
    leftWall.label = "leftwall";

    let rightWall = canvas.Bodies.rectangle(canvas.boxprop.width + 10, canvas.boxprop.height/2, 10, canvas.boxprop.height - 30, { isStatic: true });
    rightWall.label = "rightwall";

    // grounds
    let groundWidth = (0.75 * canvas.boxprop.width);         
    //                                  x position              y position                                  width    height      options
    let upperground = canvas.Bodies.rectangle(launchpad_pos.x, launchpad_pos.y, groundWidth, 30, {isStatic: true});
    let launchpad = canvas.Bodies.rectangle(100, launchpad_pos.y, 100, 35, {isStatic: true, isSensor:  true});
    launchpad.label="launchpad";

    groundWidth = canvas.box.clientWidth - (0.3 * canvas.box.clientWidth)
    let baseground = canvas.Bodies.rectangle((0.5 * canvas.boxprop.width), canvas.boxprop.height - 20, 600, 30, { isStatic: true });
    baseground.label ="baseground";
    // add bodies to the world
    let boundaries = canvas.Composite.add(canvas.world, [ baseground, upperground, launchpad, leftWall, rightWall]);

    // start the rendering end physics engine
    canvas.run()

    let force = {
        x: 0.5,
        y: -0.8
    }

    //screen size
    if (canvas.boxprop.width <= 1200) {
        force.x = Math.random() * (0.7 - 0.2) + 0.2;
        // force.y = -0.4;
        force.y = Math.random() * (0.7 - 0.2) + 0.2;

    }


    //launch circle
    function move(circle) {
       Matter.Body.applyForce(circle, {x: circle.position.x, y: circle.position.y}, force);
    }

    if (!Document.hidden) {
        //run every 5 seconds
        setInterval(function(e) {
            if (canvas.world.bodies.length < 12 && !document.hidden) {
                let randSize = Math.floor(Math.random() * (60 - 40)) + 40;
                let newcircle = canvas.Bodies.circle(randSize + 10, launchpad_pos.y - randSize, randSize, {restitution: 0.5});
                Matter.World.addBody(canvas.world, newcircle);
                move(newcircle);
            }
        }, 3000);


        /*
            Event detection
        */
        Matter.Events.on(canvas.runner, "afterTick", function(event) {
            for (let obj of canvas.world.bodies) {
                if (obj.position.y > canvas.boxprop.height + 100) {
                    Matter.World.remove(canvas.world, obj);
                }
            }
        });


        //detect collisions
        Matter.Events.on(canvas.engine, "collisionStart", function(event) {
            let pairs = event.pairs[0];

            if (pairs.bodyA.label == "rightwall" || pairs.bodyB.label == "rightwall") {
                Matter.Body.setVelocity(pairs.bodyB, {x: -7, y: -5})
                Matter.Body.applyForce(pairs.bodyB, {x: pairs.bodyB.position.x, y: pairs.bodyB.position.y}, {x: -4, y: 0});
            }
            if (pairs.bodyA.label == "Circle Body") {
                Matter.Body.setVelocity(pairs.bodyB, {x: 10, y: -5})
                Matter.Body.applyForce(pairs.bodyB, {x: pairs.bodyB.position.x, y: pairs.bodyB.position.y}, {x: force.x/2, y: -2});
            }
        });
    }
}

export default landing;