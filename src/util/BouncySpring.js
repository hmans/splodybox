import { animated, useSpring } from "@react-spring/three";

export function BouncySpring(props) {
  const animatedProps = useSpring({
    from: { "scale-x": 0.75, "scale-y": 1.25, "scale-z": 0.75 },
    to: { "scale-x": 1, "scale-y": 1, "scale-z": 1 },
    reset: true,
  });

  return <animated.group {...animatedProps} {...props} />;
}
