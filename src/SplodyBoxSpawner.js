import { plusMinus } from "randomish";
import { useEffect } from "react";
import { Quaternion } from "three";
import { Vector3 } from "three";
import { spawnSplodycahedron } from "./actions/spawnSplodycahedron";
import { world } from "./store";

const { entities } = world.archetype("isSplodycahedron");

export function SplodyBoxSpawner() {
  useEffect(() => {
    const id = setInterval(() => {
      if (entities.length < 30)
        spawnSplodycahedron({
          position: new Vector3().set(plusMinus(8), plusMinus(8), plusMinus(8)),
          quaternion: new Quaternion().random(),
        });
    }, 1000);

    return () => clearInterval(id);
  });

  return null;
}
