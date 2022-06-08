import { animated, useSpring } from "@react-spring/three";
import { forwardRef } from "react";

export const SpringOnAppear = forwardRef((props, ref) => {
  const spring = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
  });

  return <animated.group {...props} {...spring} ref={ref} />;
});
