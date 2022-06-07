import { Splodycahedron } from "../Splodycahedron";
import { ECS } from "../store";

export const spawnSplodycahedron = (props) =>
  ECS.world.createEntity({
    render: <Splodycahedron {...props} />,
  });
