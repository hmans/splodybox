import { world } from "../store";

const { entities } = world.archetype("age", "autoDestroy");

const autoDestroySystem = () => {
  for (const entity of entities) {
    if (entity.age >= entity.autoDestroy.after) {
      world.queue.destroyEntity(entity);
    }
  }
};

export default autoDestroySystem;
