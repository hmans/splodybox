import { between } from "randomish";
import { Vector3 } from "three";
import { MeshStandardMaterial } from "three";
import { Emitter, MeshParticles, ParticlesMaterial } from "vfx";

const direction = new Vector3();
const gravity = new Vector3(0, -9.81, 0);

export const Sparks = ({ color = "white", count = 50, ...props }) => (
  <MeshParticles {...props}>
    <planeGeometry args={[0.15, 0.15]} />

    <ParticlesMaterial
      baseMaterial={MeshStandardMaterial}
      color={color}
      depthTest={true}
      depthWrite={false}
      billboard
    />

    <Emitter
      initialParticles={count}
      setup={(c) => {
        direction.randomDirection();

        c.position.copy(direction).multiplyScalar(between(0, 1));
        c.velocity.copy(direction).multiplyScalar(between(0, 3));
        c.lifetime = between(0.4, 0.8);
        c.acceleration.copy(gravity);
      }}
    />
  </MeshParticles>
);
