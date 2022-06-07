import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { plusMinus } from "randomish";
import { useEffect } from "react";
import { Vector3 } from "three";
import { spawnSplodyBox } from "./actions/spawnSplodyBox";
import { Entities } from "./Entities";
import { ECS } from "./store";

function SplodyBoxSpawner() {
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

function App() {
  /* TODO: StrictMode double render alert! Let's find a nicer pattern for cleaning up after our actions */
  useEffect(() => {
    const entity = spawnSplodyBox();
    return () => ECS.world.destroyEntity(entity);
  }, []);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <PerspectiveCamera position={[20, 20, -30]} makeDefault />

      <SplodyBoxSpawner />
      <Entities />

      <OrbitControls />
      <Perf />
    </Canvas>
  );
}

export default App;
