import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import Fog from "./effects/Fog";
import { Entities } from "./Entities";
import { SplodyBoxSpawner } from "./SplodyBoxSpawner";
import { Systems } from "./Systems";
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
    <Canvas
      flat
      shadows
      dpr={[1, 1]}
      gl={{
        logarithmicDepthBuffer: false,
        antialias: false,
        stencil: false,
        depth: false,
      }}
    >
      <color attach="background" args={["#555"]} />
      <fogExp2 attach="fog" args={["#555", 0.01]} />
      <ambientLight intensity={0.5} />

      <pointLight
        position={[20, 10, 12]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-radius={10}
        shadow-bias={-0.0001}
      />

      <Camera />

      <SplodyBoxSpawner />
      <Entities />

      <SpringOnAppear>
        <Walls />
      </SpringOnAppear>

      <Fog />

      <Perf />
      <Systems />

      <EffectComposer>
        <Bloom luminanceThreshold={0.9} luminanceSmoothing={0.9} height={300} />
        {/* <Noise opacity={0.02} /> */}
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
