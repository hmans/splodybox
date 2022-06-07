import { Tag } from "miniplex";
import { ECS } from "../store";

export const spawnEffect = () => {
  const e = ECS.world.createEntity({
    isEffect: Tag,
  });
};
