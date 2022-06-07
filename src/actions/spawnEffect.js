import { Sparks } from "../effects/Sparks";
import { ECS } from "../store";

export const spawnEffect = (props) =>
  ECS.world.createEntity({
    render: (
      <group {...props}>
        <Sparks color="white" count={10} />
        <Sparks color="orange" count={20} />
      </group>
    ),
    age: 0,
    autoDestroy: { after: 1 },
  });
