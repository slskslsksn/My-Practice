
type HasFunc = (object: object, key: string) => boolean;
type AnyFunc = (...args: any[]) => any;

declare module "lodash" {
  function head<T>(array: T[]): T | undefined;
  function hasIn(object: object, path: string[] | string): boolean
  function isBoolean(vlaue: any): boolean
  function toString(value: any): string
  function split(string: string, separator: RegExp|string, limit?: number): string[]
  function hasPath(object: object, path: string[]|string, hasFunc: HasFunc): boolean;
  function filter<T>(collection: T[], predicate: AnyFunc): T[];
  function every<T>(collection: T[], predicate: AnyFunc, guard?: any): boolean;
  function map<T>(collection: T[] | {}, iteratee: AnyFunc):  T[];
  }