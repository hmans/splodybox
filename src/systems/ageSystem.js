import { ECS } from "../store";

const { entities } = ECS.world.archetype("age");

export default (dt) => {
  for (const entity of entities) {
    entity.age += dt;
  }
};
