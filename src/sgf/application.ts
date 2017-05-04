import * as PIXI from "pixi.js";
import { Actor } from "./actor";
import { Scene } from "./scene";
import { ActorManager } from "./actor_manager";

export class Application {
    public pixi // TODO
    protected actorManager : ActorManager
    protected currentScene : Scene
    
    private static instance : Application

    public static getInstance() : Application {
        if (!Application.instance) {
            Application.instance = new Application();
        }
        return Application.instance;
    }
    
    private constructor() {
        this.pixi = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
        this.actorManager = new ActorManager();
        document.body.appendChild(this.pixi.view);
    }

    public start(scene : Scene) {
        this.currentScene = scene;
        //this.actors = [];
        this.pixi.ticker.add((delta) => {
            this.currentScene.update(delta);
            this.updateAll();
        });
    }

    protected updateAll() {
        this.actorManager.updateAll();
    }

    public createActor(image : string) : Actor {
        return this.actorManager.getActor(image);
    }
}
