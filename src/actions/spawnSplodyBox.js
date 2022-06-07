import { SplodyBox } from "../SplodyBox";
import { ECS } from "../store";

export const spawnSplodyBox = (props) =>
  ECS.world.createEntity({
    render: <SplodyBox {...props} />,
  });
