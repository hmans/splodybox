import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useEffect } from "react";
import { spawnSplodyBox } from "./actions/spawnSplodyBox";
import { Entities } from "./Entities";
import { SplodyBoxSpawner } from "./SplodyBoxSpawner";
import { ECS } from "./store";

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
