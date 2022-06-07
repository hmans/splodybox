import { useFrame } from "@react-three/fiber";
import ageSystem from "./systems/ageSystem";
import autoDestroySystem from "./systems/autoDestroySystem";
import flushSystem from "./systems/flushSystem";

export const Systems = () => {
  useFrame((_, dt) => {
    ageSystem(dt);
    autoDestroySystem();
    flushSystem();
  });

  return null;
};
