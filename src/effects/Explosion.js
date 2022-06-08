import { between, plusMinus, power } from "randomish";
import { useMemo } from "react";
import { MeshBasicMaterial } from "three";
import { AdditiveBlending } from "three";
import { TextureLoader } from "three";
import { Color, MeshStandardMaterial, Vector3 } from "three";
import { Emitter, MeshParticles, ParticlesMaterial } from "vfx";

const gravity = new Vector3(0, -20, 0);
const direction = new Vector3();

const SmokeRing = () => {
  const texture = useMemo(
    () => new TextureLoader().load("/textures/smoke.png"),
    []
  );

  return (
    <MeshParticles>
      <planeGeometry />

      <ParticlesMaterial
        baseMaterial={MeshStandardMaterial}
        map={texture}
        blending={AdditiveBlending}
        depthTest={true}
        depthWrite={false}
        billboard
      />

      <Emitter
        burstParticles={() => between(10, 20)}
        initialParticles={() => between(10, 20)}
        burstCount={8}
        burstDelay={0.025}
        setup={(c) => {
          c.lifetime = 2;

          direction.randomDirection();

          c.position.copy(direction).multiplyScalar(plusMinus(0.2));

          c.velocity.copy(direction).multiplyScalar(5 + plusMinus(10));

          c.acceleration
            .copy(direction)
            .multiplyScalar(-3)
            .add(new Vector3().randomDirection().multiplyScalar(5));

          c.scaleStart.setScalar(3 + plusMinus(1));
          c.scaleEnd.setScalar(0);

          c.lifetime = between(0.5, 1.5);

          c.colorStart.setScalar(1);
          c.colorEnd.setScalar(0);
        }}
      />
    </MeshParticles>
  );
};

const Dirt = ({ delay = 0 }) => (
  <MeshParticles>
    <dodecahedronBufferGeometry />
    <ParticlesMaterial baseMaterial={MeshStandardMaterial} color="#fff" />

    <Emitter
      initialDelay={delay}
      initialParticles={() => power(3) * 200}
      burstParticles={() => power(3) * 200}
      burstCount={() => power(3) * 5}
      burstDelay={0.025}
      setup={(c) => {
        direction
          .set(1, 0, 0)
          .applyAxisAngle(new Vector3(0, 0, 1), between(0, Math.PI / 4))
          .applyAxisAngle(new Vector3(0, 1, 0), between(0, Math.PI * 2));

        c.position.copy(direction).multiplyScalar(3 + plusMinus(0.2));
        c.quaternion.random();

        c.velocity.copy(direction).multiplyScalar(10 + power(3) * 10);

        c.acceleration.copy(gravity);

        c.scaleStart.setScalar(0.2 + power(3) * 1);
        c.scaleEnd.copy(c.scaleStart);

        c.lifetime = between(0.5, 1.5);

        c.colorStart.lerpColors(new Color("#444"), new Color("#000"), power(3));
        c.colorEnd.copy(c.colorStart);
      }}
    />
  </MeshParticles>
);

const Fireball = ({ delay = 0 }) => (
  <MeshParticles>
    <sphereBufferGeometry args={[1, 8, 8]} />
    <ParticlesMaterial baseMaterial={MeshStandardMaterial} color="#fff" />

    <Emitter
      initialDelay={delay}
      initialParticles={() => 5 + power(3) * 10}
      burstParticles={() => 5 + power(3) * 10}
      setup={(c) => {
        direction.randomDirection();
        c.position.copy(direction).multiplyScalar(between(0, 2));
        c.velocity.copy(direction).multiplyScalar(between(2, 4));

        c.scaleStart.setScalar(between(0.2, 0.5));
        c.scaleEnd.setScalar(between(2, 4));

        c.lifetime = between(0.5, 1);

        c.colorStart.lerpColors(
          new Color("red").multiplyScalar(6),
          new Color("yellow").multiplyScalar(10),
          power(3)
        );
        c.colorEnd.copy(c.colorStart);
      }}
    />
  </MeshParticles>
);

const SmokeCloud = ({ delay = 0 }) => {
  const texture = useMemo(
    () => new TextureLoader().load("/textures/smoke.png"),
    []
  );

  return (
    <MeshParticles>
      <planeGeometry />

      <ParticlesMaterial
        baseMaterial={MeshStandardMaterial}
        color="#fff"
        depthWrite={false}
        map={texture}
        billboard
      />

      <Emitter
        initialDelay={delay}
        initialParticles={() => between(5, 10)}
        burstParticles={() => between(5, 10)}
        burstCount={5}
        burstDelay={0.05}
        setup={(c) => {
          direction.randomDirection();

          c.position.copy(direction).multiplyScalar(between(0.5, 3));

          c.velocity
            .copy(direction)
            .multiplyScalar(between(2, 5))
            .add(new Vector3(0, between(2, 3), 0));

          c.acceleration
            .randomDirection()
            .multiplyScalar(between(0, 3))
            .add(direction.clone().multiplyScalar(-between(2, 5)));

          c.scaleStart.setScalar(between(1, 5));
          c.scaleEnd.setScalar(between(5, 10));
          c.lifetime = between(1, 2);

          c.alphaStart = 0.3;
          c.alphaEnd = 0;

          c.colorStart.lerpColors(
            new Color("#888"),
            new Color("#666"),
            power(3)
          );
          c.colorEnd.copy(c.colorStart);
        }}
      />
    </MeshParticles>
  );
};

const Explosion = (props) => (
  <group {...props}>
    <SmokeRing />
    <Dirt />
    <Fireball />
    <SmokeCloud delay={0.3} />
  </group>
);

export default Explosion;
