import { animated, useSpring } from "@react-spring/three";

export function SpringOnAppear(props) {
  const spring = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
  });

  return <animated.group {...props} {...spring} />;
}
