import { world } from "../store";

export const spawnEffect = (render) =>
  world.createEntity({
    render,
    age: 0,
    autoDestroy: { after: 1 },
  });
