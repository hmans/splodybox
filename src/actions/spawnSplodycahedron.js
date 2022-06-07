import { Tag } from "miniplex";
import { Splodycahedron } from "../Splodycahedron";
import { ECS } from "../store";

export const spawnSplodycahedron = (props) =>
  ECS.world.createEntity({
    isSplodycahedron: Tag,
    render: <Splodycahedron {...props} />,
  });
