import * as actor from "./actor";
import * as PIXI from "pixi.js";

var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

let actors = [];

function updateAll() {
    let removeList = [];
    for (let i = 0; i < actors.length; i++) {
        let a = actors[i];
        a.update();
        if (!a.alive) {
            removeList.push(i)
        }
    }

    for (let i = removeList.length-1; i >= 0 ; i--) {
        let index = removeList[i];
        actors.splice(index, 1);
    }
}

app.ticker.add(function(delta) {
    let newActor = new actor.Actor("image.png");
    newActor.setContainer(app.stage);
    
    newActor.x = 400;
    newActor.y = 300;
    newActor.vx = 20 * (Math.random()-0.5);
    newActor.vy = 20 * (Math.random()-0.5);
    newActor.vrotation = 0.1 * (Math.random()-0.5);
    newActor.scale = 0.1 + 1.0 * (Math.random());
    actors.push(newActor);
    updateAll();

    console.info(actors.length);
});

