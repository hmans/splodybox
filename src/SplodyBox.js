import { animated, useSpring } from "@react-spring/three";
import { between, plusMinus } from "randomish";
import { useState } from "react";
import { spawnEffect } from "./actions/spawnEffect";

export function SplodyBox() {
  const [damage, setDamage] = useState(0);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState(1);

  const handleClick = (e) => {
    setDamage(damage + 1);
    setRotation([
      rotation[0] + plusMinus(0.3),
      rotation[1] + plusMinus(0.3),
      rotation[2],
    ]);
    setScale(scale * between(1.05, 1.1));
    spawnEffect(e.point);
  };

  const props = useSpring({
    rotation,
    scale,
  });

  return (
    <animated.mesh onClick={handleClick} {...props}>
      <boxBufferGeometry />
      <meshStandardMaterial color="hotpink" />
    </animated.mesh>
  );
}
