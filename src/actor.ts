import * as PIXI from "pixi.js";
import { Application } from "./application";

export class Actor {
    public x: number
    public y: number
    public vx: number
    public vy: number
    public rotation: number
    public vrotation: number
    public scale: number
    public life: number
    public alive: boolean

    public container
    protected sprite

    public constructor () {
        this.initialize(null);
    }

    protected initialize(image : string) {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.rotation = 0;
        this.vrotation = 0;
        this.scale = 1.0;
        this.life = -1;
        this.alive = true;

        if (image) {
            this.setImage(image);
        }
    }

    public setImage(image : string) {
        this.sprite = PIXI.Sprite.fromImage(image); // TODO
        this.sprite.anchor.set(0.5);
    }

    // public static create(image : string) {
    //     let newActor = new Actor(image);
    //     //Application.getInstance().actors.push(newActor);
    //     newActor.setContainer(Application.getInstance().app.stage); // TODO
    //     return newActor;
    // }

    public setContainer(container) {
        this.container = container;
        this.container.addChild(this.sprite);
    }

    public update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.vrotation;
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.sprite.rotation = this.rotation;
        this.sprite.scale.x = this.scale;
        this.sprite.scale.y = this.scale;

        const s = 100;
        if (this.x < 0-s || this.x > 800+s || this.y < 0-s || this.y > 600+s) {
            this.alive = false;
            this.dispose();
        }
    }

    public dispose() {
        this.container.removeChild(this.sprite);
    }
}
