
import * as sgf from "./sgf"

export class SceneTest extends sgf.Scene {
    public update(delta : number) {
        let image = this.createImageFileName();
        let newActor = this.app.createActor(image);
        newActor.x = 400;
        newActor.y = 300;
        newActor.vx = 20 * (Math.random()-0.5);
        newActor.vy = 20 * (Math.random()-0.5);
        newActor.vrotation = 0.1 * (Math.random()-0.5);
        newActor.scale = 0.1 + 1.0 * (Math.random());
    }

    private createImageFileName() : string {
        let num = Math.ceil(Math.random()*50);
        let id = (num < 10) ? "0" + num.toString() : num.toString();
        return `image/image${id}.png`;
    }
}
