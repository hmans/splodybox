import { DummyEffect } from "./effects/DummyEffect";
import { ECS } from "./store";

export const Effects = () => (
  <ECS.ManagedEntities tag="isEffect">
    {(entity) => {
      console.log(entity);
      return <DummyEffect />;
    }}
  </ECS.ManagedEntities>
);
