import { animated, useSpring } from "@react-spring/three";
import { plusMinus } from "randomish";
import { useState } from "react";
import { spawnEffect } from "./actions/spawnEffect";
import { BouncySpring } from "./util/BouncySpring";
import { ECS } from "./store";
import { SpringOnAppear } from "./util/SpringOnAppear";
import { Color } from "three";

const colors = ["#c80", "#c60", "#c40", "#c20"];

export function Splodycahedron({ quaternion, ...props }) {
  const [damage, setDamage] = useState(0);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState(1);

  /* TODO: I don't like that this assumes that it's being rendered within an entity.
     There may be situations where this is not the case (ie. the component is just rendered
     through plain JSX), and then `useEntity` could pick up _anything_.) */
  const entity = ECS.useEntity();

  const handleClick = (e) => {
    e.stopPropagation();

    spawnEffect({ position: e.point });

    if (damage >= 4) {
      ECS.world.destroyEntity(entity);
    } else {
      setDamage(damage + 1);
      setRotation([
        rotation[0] + plusMinus(0.3),
        rotation[1] + plusMinus(0.3),
        rotation[2],
      ]);
      setScale(scale * 1.1);
    }
  };

  const animatedProps = useSpring({
    rotation,
    scale,
  });

  return (
    <SpringOnAppear {...props}>
      <BouncySpring>
        <animated.mesh
          onClick={handleClick}
          castShadow
          receiveShadow
          quaternion={quaternion}
          {...animatedProps}
        >
          <dodecahedronGeometry args={[0.8]} />
          <meshStandardMaterial
            color={colors[damage] || "#c00"}
            emissive={colors[damage] || "#c00"}
            emissiveIntensity={1.2}
          />
        </animated.mesh>
      </BouncySpring>
    </SpringOnAppear>
  );
}
