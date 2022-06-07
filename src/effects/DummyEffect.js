import { between } from "randomish";
import { Vector3 } from "three";
import { MeshStandardMaterial } from "three";
import { Emitter, MeshParticles, ParticlesMaterial } from "vfx";

const direction = new Vector3();

export const DummyEffect = (props) => (
  <MeshParticles {...props}>
    <boxGeometry args={[0.1, 0.1, 0.1]} />

    <ParticlesMaterial
      baseMaterial={MeshStandardMaterial}
      color="#888"
      depthTest={true}
      depthWrite={false}
    />

    <Emitter
      initialParticles={50}
      setup={(c) => {
        direction.randomDirection();

        c.position.copy(direction).multiplyScalar(between(0, 1));
        c.velocity.copy(direction).multiplyScalar(between(0, 3));
        c.lifetime = 0.5;
      }}
    />
  </MeshParticles>
);
