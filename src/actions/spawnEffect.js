import { DamageSparks } from "../effects/DamageSparks";
import { ECS } from "../store";

export const spawnEffect = (props) =>
  ECS.world.createEntity({
    render: <DamageSparks />,
    age: 0,
    autoDestroy: { after: 1 },
  });
