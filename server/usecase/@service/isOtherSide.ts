import type { EntityModel } from '../../commonTypesWithClient/models';

export const isOtherSide = (target1: EntityModel, target2: EntityModel) => {
  if ('side' in target1 && 'side' in target2) {
    return target1.side !== target2.side;
  }
  return true;
};
