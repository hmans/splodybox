import { DummyEffect } from "../effects/DummyEffect";
import { ECS } from "../store";

export const spawnEffect = (position) =>
  ECS.world.createEntity({
    render: <DummyEffect position={position} />,
    age: 0,
    autoDestroy: { after: 1 },
  });
