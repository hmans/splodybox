import { ECS } from "./store";

export const Entities = () => (
  <ECS.ManagedEntities tag="render">
    {(entity) => entity.render}
  </ECS.ManagedEntities>
);
