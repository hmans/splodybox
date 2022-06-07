import { ECS } from "../store";

const flushSystem = () => {
  ECS.world.queue.flush();
};

export default flushSystem;
