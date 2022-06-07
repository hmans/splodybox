import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import { spawnSplodyBox } from "./actions/spawnSplodyBox";
import { Entities } from "./Entities";
import { SplodyBoxSpawner } from "./SplodyBoxSpawner";
import { ECS } from "./store";
import { Walls } from "./Walls";

function Camera() {
  const camera = useRef();

  useEffect(() => {
    camera.current.lookAt(0, 0, 0);
  }, []);

  return <PerspectiveCamera position={[30, 18, 30]} makeDefault ref={camera} />;
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
      <directionalLight position={[15, 10, 12]} />
      <Camera />

      <SplodyBoxSpawner />
      <Entities />
      <Walls />

      <Perf />
    </Canvas>
  );
}

export default App;
