import { Application } from "./application";
import { Scene } from "./scene";
import { SceneTest } from "./scene_test";

let application = Application.getInstance();

let scene : Scene = new SceneTest(application)
application.start(scene);

