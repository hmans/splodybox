import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

function SplodyBox() {
  const [damage, setDamage] = useState(0);

  const handleClick = () => {
    setDamage(damage + 1);
  };

  return (
    <mesh onClick={handleClick}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
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
