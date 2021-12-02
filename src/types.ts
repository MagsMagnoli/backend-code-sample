export type CamelCaseToSnakeCase<S extends string> =
  S extends `${infer T}${infer U}`
    ? `${T extends Capitalize<T>
        ? '_'
        : ''}${Lowercase<T>}${CamelCaseToSnakeCase<U>}`
    : S;

export type CamelKeysToSnakeKeys<T> = T extends object
  ? {
      [K in keyof T as CamelCaseToSnakeCase<K & string>]: CamelKeysToSnakeKeys<
        T[K]
      >;
    }
  : T;

export type PostgresObject<T> = CamelKeysToSnakeKeys<T>;
