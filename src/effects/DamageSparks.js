import { Color } from "three";
import { Sparks } from "./Sparks";

const white = new Color(5, 5, 5);
const orange = new Color(10, 5, 0);

export const DamageSparks = (props) => (
  <group {...props}>
    <Sparks color={white} count={10} />
    <Sparks color={orange} count={20} />
  </group>
);
