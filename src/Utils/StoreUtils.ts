
export function withPayloadType<T>() {
  return (t: T) => ({ payload: t })
};

export type IInputPayload<T> = {
  value: string | number;
  name: keyof T;
};