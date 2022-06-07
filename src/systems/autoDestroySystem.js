import { ECS } from "../store";

const { entities } = ECS.world.archetype("age", "autoDestroy");

export default () => {
  for (const entity of entities) {
    if (entity.age >= entity.autoDestroy.after) {
      ECS.world.queue.destroyEntity(entity);
    }
  }
};
