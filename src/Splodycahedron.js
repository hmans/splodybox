import { animated, useSpring } from "@react-spring/three";
import { between, plusMinus } from "randomish";
import { useState } from "react";
import { spawnEffect } from "./actions/spawnEffect";
import { SpringOnAppear } from "./util/SpringOnAppear";
import { ECS } from "./store";

export function Splodycahedron(props) {
  const [damage, setDamage] = useState(0);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState(1);

  /* TODO: I don't like that this assumes that it's being rendered within an entity.
     There may be situations where this is not the case (ie. the component is just rendered
     through plain JSX), and then `useEntity` could pick up _anything_.) */
  const entity = ECS.useEntity();

  const handleClick = (e) => {
    e.stopPropagation();

    spawnEffect(e.point);

    if (damage >= 4) {
      ECS.world.destroyEntity(entity);
    } else {
      setDamage(damage + 1);
      setRotation([
        rotation[0] + plusMinus(0.3),
        rotation[1] + plusMinus(0.3),
        rotation[2],
      ]);
      setScale(scale * between(1.05, 1.1));
    }
  };

  const animatedProps = useSpring({
    rotation,
    scale,
  });

  return (
    <SpringOnAppear {...props}>
      <animated.mesh
        onClick={handleClick}
        castShadow
        receiveShadow
        {...animatedProps}
      >
        <dodecahedronGeometry args={[0.8]} />
        <meshStandardMaterial color="hotpink" />
      </animated.mesh>
    </SpringOnAppear>
  );
}
