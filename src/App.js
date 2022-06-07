import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import { Entities } from "./Entities";
import { SplodyBoxSpawner } from "./SplodyBoxSpawner";
import { SpringOnAppear } from "./util/SpringOnAppear";
import { Walls } from "./Walls";

function Camera() {
  const camera = useRef();

  useEffect(() => {
    camera.current.lookAt(0, 0, 0);
  }, []);

  return <PerspectiveCamera position={[30, 18, 30]} makeDefault ref={camera} />;
}

function App() {
  return (
    <Canvas shadows>
      <ambientLight />
      <pointLight
        position={[20, 10, 12]}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <Camera />

      <SplodyBoxSpawner />
      <Entities />

      <SpringOnAppear>
        <Walls />
      </SpringOnAppear>

      <Perf />
    </Canvas>
  );
}

export default App;
