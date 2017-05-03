import * as PIXI from "pixi.js";
import { Actor } from "./actor";
import { Scene } from "./scene";

export class Application {
    public app // TODO
    public actors : Actor[] // TODO
    protected currentScene : Scene
    
    private static instance : Application

    public static getInstance() : Application {
        if (!Application.instance) {
            Application.instance = new Application();
        }
        return Application.instance;
    }
    
    private constructor() {
        this.app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
        document.body.appendChild(this.app.view);
    }

    public start(scene : Scene) {
        this.currentScene = scene;
        this.actors = [];
        this.app.ticker.add((delta) => {
            this.currentScene.update(delta);
            this.updateAll();
        });        
    }

    protected updateAll() {
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
