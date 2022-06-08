import { ManagedEntities } from "./store";

export const Entities = () => (
  <ManagedEntities tag="render">{(entity) => entity.render}</ManagedEntities>
);
