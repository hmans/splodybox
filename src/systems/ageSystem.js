import { world } from "../store";

const { entities } = world.archetype("age");

const ageSystem = (dt) => {
  for (const entity of entities) {
    entity.age += dt;
  }
};

export default ageSystem;
