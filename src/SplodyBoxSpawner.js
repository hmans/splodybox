import { plusMinus } from "randomish";
import { useEffect } from "react";
import { Vector3 } from "three";
import { spawnSplodyBox } from "./actions/spawnSplodyBox";

export function SplodyBoxSpawner() {
  useEffect(() => {
    const id = setInterval(() => {
      spawnSplodyBox(
        new Vector3().set(plusMinus(10), plusMinus(10), plusMinus(10))
      );
    }, 1000);

    return () => clearInterval(id);
  });

  return null;
}
