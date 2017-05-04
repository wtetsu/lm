import {Actor} from "./actor"
import {Application} from "./application"

export class ActorManager {
    private actors : Actor[];

    constructor() {
        this.actors = [];
    }

    public getActor(image : string) : Actor {
        let newActor = new Actor();
        newActor.setImage(image);

        let stage = Application.getInstance().pixi.stage;
        newActor.setContainer(stage); // TODO
        
        this.actors.push(newActor);
        return newActor;
    }

    public updateAll() {
        let removeList = [];
        for (let i = 0; i < this.actors.length; i++) {
            let a = this.actors[i];
            a.update();
            if (!a.alive) {
                removeList.push(i)
            }
        }

        for (let i = removeList.length-1; i >= 0 ; i--) {
            let index = removeList[i];
            this.actors.splice(index, 1);
        }
    }
}
