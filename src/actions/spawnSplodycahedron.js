import { Tag } from "miniplex";
import { Splodycahedron } from "../Splodycahedron";
import { world } from "../store";

export const spawnSplodycahedron = (props) =>
  world.createEntity({
    isSplodycahedron: Tag,
    render: <Splodycahedron {...props} />,
  });
