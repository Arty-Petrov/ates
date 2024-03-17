import { Transform } from 'class-transformer';
import { TransformOptions } from 'class-transformer/types/interfaces';

export function DefaultValue(
  val: any,
  options?: TransformOptions,
): PropertyDecorator {
  return Transform(({ value }) => {
    if (value === undefined) return val;
    return value;
  }, options);
}
