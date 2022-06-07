import { ECS } from "./store";

export const Effects = () => (
  <ECS.ManagedEntities tag="isEffect">
    {(entity) => entity.render}
  </ECS.ManagedEntities>
);
