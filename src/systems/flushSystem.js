import { ECS } from "../store";

export default () => {
  ECS.world.queue.flush();
};
