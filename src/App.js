import { animated, useSpring } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { between, plusMinus } from "randomish";
import { useState } from "react";
import { spawnEffect } from "./actions/spawnEffect";
import { Effects } from "./Effects";

function SplodyBox() {
  const [damage, setDamage] = useState(0);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState(1);

  const handleClick = (e) => {
    setDamage(damage + 1);
    setRotation([
      rotation[0] + plusMinus(0.3),
      rotation[1] + plusMinus(0.3),
      rotation[2],
    ]);
    setScale(scale * between(1.05, 1.1));
    spawnEffect(e.point);
  };

  const props = useSpring({
    rotation,
    scale,
  });

  return (
    <animated.mesh onClick={handleClick} {...props}>
      <boxBufferGeometry />
      <meshStandardMaterial color="hotpink" />
    </animated.mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <SplodyBox />
      <Effects />

      <OrbitControls />
    </Canvas>
  );
}

export default App;
