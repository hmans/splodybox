import { ECS } from "../store";

const { entities } = ECS.world.archetype("age");

const ageSystem = (dt) => {
  for (const entity of entities) {
    entity.age += dt;
  }
};

export default ageSystem;
