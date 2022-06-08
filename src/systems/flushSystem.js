import { world } from "../store";

const flushSystem = () => {
  world.queue.flush();
};

export default flushSystem;
