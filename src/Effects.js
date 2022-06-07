import { ECS } from "./store";

export const Effects = () => (
  <ECS.ManagedEntities tag="effect">
    {(entity) => entity.effect}
  </ECS.ManagedEntities>
);
