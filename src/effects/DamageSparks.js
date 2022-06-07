import { Sparks } from "./Sparks";

export const DamageSparks = (props) => (
  <group {...props}>
    <Sparks color="white" count={10} />
    <Sparks color="orange" count={20} />
  </group>
);
