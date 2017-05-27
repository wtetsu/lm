import * as gf from "./gf"
import { SceneTest } from "./scene_test"

let application = gf.Application.getInstance();

let scene : gf.Scene = new SceneTest(application)
application.start(scene);
