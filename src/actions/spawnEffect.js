import { Sparks } from "../effects/Sparks";
import { ECS } from "../store";

export const spawnEffect = (position) =>
  ECS.world.createEntity({
    render: (
      <group position={position}>
        <Sparks color="white" count={10} />
        <Sparks color="orange" count={20} />
      </group>
    ),
    age: 0,
    autoDestroy: { after: 1 },
  });
