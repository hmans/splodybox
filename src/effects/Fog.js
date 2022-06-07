import { between, insideSphere } from "randomish";
import { useMemo } from "react";
import { AdditiveBlending, MeshStandardMaterial, TextureLoader } from "three";
import { Emitter, MeshParticles, ParticlesMaterial } from "vfx";

export default () => {
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
        depthTest={false}
        depthWrite={false}
        billboard
      />

      <Emitter
        initialParticles={0}
        burstDelay={0.1}
        burstCount={Infinity}
        burstAmount={100}
        setup={(c) => {
          c.position.copy(insideSphere(20));
          c.velocity.randomDirection().multiplyScalar(between(0, 10));
          c.lifetime = 20;
          c.scaleStart.setScalar(between(10, 20));
          c.scaleEnd.setScalar(between(10, 20));
          c.alphaStart = 0;
          c.alphaEnd = between(0.05, 0.08);
        }}
      />
    </MeshParticles>
  );
};
