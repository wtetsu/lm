import * as sgf from "./sgf"
import { SceneTest } from "./scene_test"

let application = sgf.Application.getInstance();

let scene : sgf.Scene = new SceneTest(application)
application.start(scene);

