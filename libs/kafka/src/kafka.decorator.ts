export const SUBSCRIBER_MAP = new Map();
export const SUBSCRIBER_FIXED_MAP = new Map();
export const SUBSCRIBER_OBJECT_MAP = new Map();
export const SCHEMAS = new Map();

export function SubscribeTo(topic: string) {
  return (target, propertyKey: string, descriptor) => {
    const originalMethod = target[propertyKey];
    SUBSCRIBER_MAP.set(topic, originalMethod);
    return descriptor;
  };
}
//TODO
// export function SubscribeToFixedGroup(topic) {
//   return (target, propertyKey, descriptor) => {
//     const originalMethod = target[propertyKey];
//     SUBSCRIBER_FIXED_MAP.set(topic, originalMethod);
//     return descriptor;
//   };
// }
