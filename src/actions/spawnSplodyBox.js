import { SplodyBox } from "../SplodyBox";
import { ECS } from "../store";

export const spawnSplodyBox = (position) =>
  ECS.world.createEntity({
    render: <SplodyBox position={position} />,
  });
