import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="hotpink" />
      </mesh>
    </Canvas>
  );
}

export default App;
