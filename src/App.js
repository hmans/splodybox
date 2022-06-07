import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Entities } from "./Entities";
import { SplodyBox } from "./SplodyBox";

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <SplodyBox />
      <Entities />

      <OrbitControls />
    </Canvas>
  );
}

export default App;
