import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Vector3 } from "three";
import { between, number, plusMinus } from "randomish";
import { Quaternion } from "three";

function SplodyBox() {
  const [damage, setDamage] = useState(0);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState(0.5);

  const handleClick = () => {
    setDamage(damage + 1);
    setRotation([
      rotation[0] + plusMinus(0.3),
      rotation[1] + plusMinus(0.3),
      rotation[2],
    ]);
    setScale(scale * between(1.05, 1.1));
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

      <OrbitControls />
    </Canvas>
  );
}

export default App;
