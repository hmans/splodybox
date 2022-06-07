import { Tag } from "miniplex";
import { ECS } from "../store";

export const spawnEffect = () => {
  ECS.world.createEntity({
    isEffect: Tag,
  });
};
