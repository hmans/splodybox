export const Walls = () => (
  <group>
    <mesh rotation-x={-Math.PI / 2} position-y={-10}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#666" />
    </mesh>

    <mesh rotation-y={Math.PI / 2} position-x={-10}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#666" />
    </mesh>

    <mesh position-z={-10}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#666" />
    </mesh>
  </group>
);
