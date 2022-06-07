import { plusMinus } from "randomish";
import { useEffect } from "react";
import { Quaternion } from "three";
import { Vector3 } from "three";
import { spawnSplodyBox } from "./actions/spawnSplodyBox";

export function SplodyBoxSpawner() {
  useEffect(() => {
    const id = setInterval(() => {
      spawnSplodyBox({
        position: new Vector3().set(plusMinus(8), plusMinus(8), plusMinus(8)),
        quaternion: new Quaternion().random(),
      });
    }, 1000);

    return () => clearInterval(id);
  });

  return null;
}
