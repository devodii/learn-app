/**
 * @param source - The main object to be mutated
 * @param targetDto - The object to mutate the main object
 *
 * @usage ts`
 *  serializeToDto(main, mutatorDTO)
 * `
 */
export const serializeToDto = <T>(source: any, targetDto: new () => T): T => {
  const dtoInstance = new targetDto();
  Object.assign(dtoInstance, source);
  return dtoInstance;
};
