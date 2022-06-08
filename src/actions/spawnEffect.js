import { ECS } from "../store";

export const spawnEffect = (render) =>
  ECS.world.createEntity({
    render,
    age: 0,
    autoDestroy: { after: 1 },
  });
