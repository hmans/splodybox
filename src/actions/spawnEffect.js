import { Tag } from "miniplex";
import { DummyEffect } from "../effects/DummyEffect";
import { ECS } from "../store";

export const spawnEffect = (position) => {
  ECS.world.createEntity({
    isEffect: Tag,
    render: <DummyEffect position={position} />,
  });
};
