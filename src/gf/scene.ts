import { Application } from "./application"

export abstract class Scene {
    protected app : Application
    abstract update(delta : number);

    constructor (app : Application) {
        this.app = app;
    }
}
