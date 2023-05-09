import { InjectionKey, type Ref } from "vue";

export interface CountContext {
  count: Ref<number>;
  incrementCount: () => void;
}

export const countKey = Symbol("count") as InjectionKey<CountContext>;
