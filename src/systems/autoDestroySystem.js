import { ECS } from "../store";

const { entities } = ECS.world.archetype("age", "autoDestroy");

const autoDestroySystem = () => {
  for (const entity of entities) {
    if (entity.age >= entity.autoDestroy.after) {
      ECS.world.queue.destroyEntity(entity);
    }
  }
};

export default autoDestroySystem;
