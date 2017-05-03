
import { Scene } from "./scene"
import { Actor } from "./actor"

export class SceneTest extends Scene {
    public update(delta : number) {
        let newActor = Actor.create("image.png");
        
        newActor.x = 400;
        newActor.y = 300;
        newActor.vx = 20 * (Math.random()-0.5);
        newActor.vy = 20 * (Math.random()-0.5);
        newActor.vrotation = 0.1 * (Math.random()-0.5);
        newActor.scale = 0.1 + 1.0 * (Math.random());
    }
}
