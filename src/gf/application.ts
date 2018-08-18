import * as PIXI from "pixi.js";
import { Actor } from "./actor";
import { Scene } from "./scene";
import { ActorManager } from "./actor_manager";

export class Application {
  public pixi; // TODO
  protected actorManager: ActorManager;
  protected currentScene: Scene;

  private static instance: Application;

  public static getInstance(): Application {
    if (!Application.instance) {
      Application.instance = new Application();
    }
    return Application.instance;
  }

  private constructor() {
    this.pixi = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });

    this.pixi.stage.interactive = true;
    this.pixi.stage.mousemove = mouseData => {
      console.log("mousemoved!");
    };

    this.actorManager = new ActorManager();
    document.body.appendChild(this.pixi.view);

    var message = new PIXI.Text("こんにちはPIXI!!!!", {
      fontSize: 64,
      fill: "white"
    });
    message.position.set(10, 10);

    this.pixi.stage.addChild(message);

    let images = [
      "image/image01.png",
      "image/image02.png",
      "image/image03.png",
      "image/image04.png",
      "image/image05.png",
      "image/image06.png",
      "image/image07.png",
      "image/image08.png",
      "image/image09.png",
      "image/image10.png",
      "image/image11.png",
      "image/image12.png",
      "image/image13.png",
      "image/image14.png",
      "image/image15.png",
      "image/image16.png",
      "image/image17.png",
      "image/image18.png",
      "image/image19.png",
      "image/image20.png",
      "image/image21.png",
      "image/image22.png",
      "image/image23.png",
      "image/image24.png",
      "image/image25.png",
      "image/image26.png",
      "image/image27.png",
      "image/image28.png",
      "image/image29.png",
      "image/image30.png",
      "image/image31.png",
      "image/image32.png",
      "image/image33.png",
      "image/image34.png",
      "image/image35.png",
      "image/image36.png",
      "image/image37.png",
      "image/image38.png",
      "image/image39.png",
      "image/image40.png",
      "image/image41.png",
      "image/image42.png",
      "image/image43.png",
      "image/image44.png",
      "image/image45.png",
      "image/image46.png",
      "image/image47.png",
      "image/image48.png",
      "image/image49.png",
      "image/image50.png"
    ];

    PIXI.loader
      .add(images)
      .on("progress", (loader, resource) => {
        console.log("loading: " + resource.url);
        console.log("progress: " + loader.progress + "%");
      })
      .load(() => {
        console.log("completed.");
      });
  }

  public start(scene: Scene) {
    this.currentScene = scene;
    this.pixi.ticker.add(delta => {
      this.currentScene.update(delta);
      this.updateAll();
    });
  }

  protected updateAll() {
    this.actorManager.updateAll();
  }

  public createActor(image: string): Actor {
    return this.actorManager.getActor(image);
  }
}
