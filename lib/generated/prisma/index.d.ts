
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model classe
 * 
 */
export type classe = $Result.DefaultSelection<Prisma.$classePayload>
/**
 * Model creneaux_horaire
 * 
 */
export type creneaux_horaire = $Result.DefaultSelection<Prisma.$creneaux_horairePayload>
/**
 * Model salles
 * 
 */
export type salles = $Result.DefaultSelection<Prisma.$sallesPayload>
/**
 * Model utilisateurs
 * 
 */
export type utilisateurs = $Result.DefaultSelection<Prisma.$utilisateursPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Classes
 * const classes = await prisma.classe.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Classes
   * const classes = await prisma.classe.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.classe`: Exposes CRUD operations for the **classe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classe.findMany()
    * ```
    */
  get classe(): Prisma.classeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creneaux_horaire`: Exposes CRUD operations for the **creneaux_horaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creneaux_horaires
    * const creneaux_horaires = await prisma.creneaux_horaire.findMany()
    * ```
    */
  get creneaux_horaire(): Prisma.creneaux_horaireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salles`: Exposes CRUD operations for the **salles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salles
    * const salles = await prisma.salles.findMany()
    * ```
    */
  get salles(): Prisma.sallesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisateurs`: Exposes CRUD operations for the **utilisateurs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateurs.findMany()
    * ```
    */
  get utilisateurs(): Prisma.utilisateursDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    classe: 'classe',
    creneaux_horaire: 'creneaux_horaire',
    salles: 'salles',
    utilisateurs: 'utilisateurs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "classe" | "creneaux_horaire" | "salles" | "utilisateurs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      classe: {
        payload: Prisma.$classePayload<ExtArgs>
        fields: Prisma.classeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.classeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.classeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          findFirst: {
            args: Prisma.classeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.classeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          findMany: {
            args: Prisma.classeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>[]
          }
          create: {
            args: Prisma.classeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          createMany: {
            args: Prisma.classeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.classeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>[]
          }
          delete: {
            args: Prisma.classeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          update: {
            args: Prisma.classeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          deleteMany: {
            args: Prisma.classeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.classeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.classeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>[]
          }
          upsert: {
            args: Prisma.classeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          aggregate: {
            args: Prisma.ClasseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasse>
          }
          groupBy: {
            args: Prisma.classeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClasseGroupByOutputType>[]
          }
          count: {
            args: Prisma.classeCountArgs<ExtArgs>
            result: $Utils.Optional<ClasseCountAggregateOutputType> | number
          }
        }
      }
      creneaux_horaire: {
        payload: Prisma.$creneaux_horairePayload<ExtArgs>
        fields: Prisma.creneaux_horaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.creneaux_horaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creneaux_horairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.creneaux_horaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creneaux_horairePayload>
          }
          findFirst: {
            args: Prisma.creneaux_horaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creneaux_horairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.creneaux_horaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creneaux_horairePayload>
          }
          findMany: {
            args: Prisma.creneaux_horaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creneaux_horairePayload>[]
          }
          create: {
            args: Prisma.creneaux_horaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creneaux_horairePayload>
          }
          createMany: {
            args: Prisma.creneaux_horaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.creneaux_horaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creneaux_horairePayload>[]
          }
          delete: {
            args: Prisma.creneaux_horaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creneaux_horairePayload>
          }
          update: {
            args: Prisma.creneaux_horaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creneaux_horairePayload>
          }
          deleteMany: {
            args: Prisma.creneaux_horaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.creneaux_horaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.creneaux_horaireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creneaux_horairePayload>[]
          }
          upsert: {
            args: Prisma.creneaux_horaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creneaux_horairePayload>
          }
          aggregate: {
            args: Prisma.Creneaux_horaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreneaux_horaire>
          }
          groupBy: {
            args: Prisma.creneaux_horaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<Creneaux_horaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.creneaux_horaireCountArgs<ExtArgs>
            result: $Utils.Optional<Creneaux_horaireCountAggregateOutputType> | number
          }
        }
      }
      salles: {
        payload: Prisma.$sallesPayload<ExtArgs>
        fields: Prisma.sallesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sallesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sallesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sallesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sallesPayload>
          }
          findFirst: {
            args: Prisma.sallesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sallesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sallesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sallesPayload>
          }
          findMany: {
            args: Prisma.sallesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sallesPayload>[]
          }
          create: {
            args: Prisma.sallesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sallesPayload>
          }
          createMany: {
            args: Prisma.sallesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sallesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sallesPayload>[]
          }
          delete: {
            args: Prisma.sallesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sallesPayload>
          }
          update: {
            args: Prisma.sallesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sallesPayload>
          }
          deleteMany: {
            args: Prisma.sallesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sallesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sallesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sallesPayload>[]
          }
          upsert: {
            args: Prisma.sallesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sallesPayload>
          }
          aggregate: {
            args: Prisma.SallesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalles>
          }
          groupBy: {
            args: Prisma.sallesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SallesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sallesCountArgs<ExtArgs>
            result: $Utils.Optional<SallesCountAggregateOutputType> | number
          }
        }
      }
      utilisateurs: {
        payload: Prisma.$utilisateursPayload<ExtArgs>
        fields: Prisma.utilisateursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.utilisateursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.utilisateursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          findFirst: {
            args: Prisma.utilisateursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.utilisateursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          findMany: {
            args: Prisma.utilisateursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>[]
          }
          create: {
            args: Prisma.utilisateursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          createMany: {
            args: Prisma.utilisateursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.utilisateursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>[]
          }
          delete: {
            args: Prisma.utilisateursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          update: {
            args: Prisma.utilisateursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          deleteMany: {
            args: Prisma.utilisateursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.utilisateursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.utilisateursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>[]
          }
          upsert: {
            args: Prisma.utilisateursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateursPayload>
          }
          aggregate: {
            args: Prisma.UtilisateursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateurs>
          }
          groupBy: {
            args: Prisma.utilisateursGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateursGroupByOutputType>[]
          }
          count: {
            args: Prisma.utilisateursCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateursCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    classe?: classeOmit
    creneaux_horaire?: creneaux_horaireOmit
    salles?: sallesOmit
    utilisateurs?: utilisateursOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model classe
   */

  export type AggregateClasse = {
    _count: ClasseCountAggregateOutputType | null
    _avg: ClasseAvgAggregateOutputType | null
    _sum: ClasseSumAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  export type ClasseAvgAggregateOutputType = {
    id_classe: number | null
  }

  export type ClasseSumAggregateOutputType = {
    id_classe: number | null
  }

  export type ClasseMinAggregateOutputType = {
    id_classe: number | null
    libelle: string | null
  }

  export type ClasseMaxAggregateOutputType = {
    id_classe: number | null
    libelle: string | null
  }

  export type ClasseCountAggregateOutputType = {
    id_classe: number
    libelle: number
    _all: number
  }


  export type ClasseAvgAggregateInputType = {
    id_classe?: true
  }

  export type ClasseSumAggregateInputType = {
    id_classe?: true
  }

  export type ClasseMinAggregateInputType = {
    id_classe?: true
    libelle?: true
  }

  export type ClasseMaxAggregateInputType = {
    id_classe?: true
    libelle?: true
  }

  export type ClasseCountAggregateInputType = {
    id_classe?: true
    libelle?: true
    _all?: true
  }

  export type ClasseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classe to aggregate.
     */
    where?: classeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classeOrderByWithRelationInput | classeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: classeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned classes
    **/
    _count?: true | ClasseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClasseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClasseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClasseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClasseMaxAggregateInputType
  }

  export type GetClasseAggregateType<T extends ClasseAggregateArgs> = {
        [P in keyof T & keyof AggregateClasse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasse[P]>
      : GetScalarType<T[P], AggregateClasse[P]>
  }




  export type classeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classeWhereInput
    orderBy?: classeOrderByWithAggregationInput | classeOrderByWithAggregationInput[]
    by: ClasseScalarFieldEnum[] | ClasseScalarFieldEnum
    having?: classeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClasseCountAggregateInputType | true
    _avg?: ClasseAvgAggregateInputType
    _sum?: ClasseSumAggregateInputType
    _min?: ClasseMinAggregateInputType
    _max?: ClasseMaxAggregateInputType
  }

  export type ClasseGroupByOutputType = {
    id_classe: number
    libelle: string
    _count: ClasseCountAggregateOutputType | null
    _avg: ClasseAvgAggregateOutputType | null
    _sum: ClasseSumAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  type GetClasseGroupByPayload<T extends classeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClasseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClasseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClasseGroupByOutputType[P]>
            : GetScalarType<T[P], ClasseGroupByOutputType[P]>
        }
      >
    >


  export type classeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_classe?: boolean
    libelle?: boolean
  }, ExtArgs["result"]["classe"]>

  export type classeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_classe?: boolean
    libelle?: boolean
  }, ExtArgs["result"]["classe"]>

  export type classeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_classe?: boolean
    libelle?: boolean
  }, ExtArgs["result"]["classe"]>

  export type classeSelectScalar = {
    id_classe?: boolean
    libelle?: boolean
  }

  export type classeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_classe" | "libelle", ExtArgs["result"]["classe"]>

  export type $classePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "classe"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_classe: number
      libelle: string
    }, ExtArgs["result"]["classe"]>
    composites: {}
  }

  type classeGetPayload<S extends boolean | null | undefined | classeDefaultArgs> = $Result.GetResult<Prisma.$classePayload, S>

  type classeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<classeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClasseCountAggregateInputType | true
    }

  export interface classeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['classe'], meta: { name: 'classe' } }
    /**
     * Find zero or one Classe that matches the filter.
     * @param {classeFindUniqueArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends classeFindUniqueArgs>(args: SelectSubset<T, classeFindUniqueArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {classeFindUniqueOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends classeFindUniqueOrThrowArgs>(args: SelectSubset<T, classeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeFindFirstArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends classeFindFirstArgs>(args?: SelectSubset<T, classeFindFirstArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeFindFirstOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends classeFindFirstOrThrowArgs>(args?: SelectSubset<T, classeFindFirstOrThrowArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classe.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classe.findMany({ take: 10 })
     * 
     * // Only select the `id_classe`
     * const classeWithId_classeOnly = await prisma.classe.findMany({ select: { id_classe: true } })
     * 
     */
    findMany<T extends classeFindManyArgs>(args?: SelectSubset<T, classeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classe.
     * @param {classeCreateArgs} args - Arguments to create a Classe.
     * @example
     * // Create one Classe
     * const Classe = await prisma.classe.create({
     *   data: {
     *     // ... data to create a Classe
     *   }
     * })
     * 
     */
    create<T extends classeCreateArgs>(args: SelectSubset<T, classeCreateArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {classeCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classe = await prisma.classe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends classeCreateManyArgs>(args?: SelectSubset<T, classeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {classeCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classe = await prisma.classe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id_classe`
     * const classeWithId_classeOnly = await prisma.classe.createManyAndReturn({
     *   select: { id_classe: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends classeCreateManyAndReturnArgs>(args?: SelectSubset<T, classeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classe.
     * @param {classeDeleteArgs} args - Arguments to delete one Classe.
     * @example
     * // Delete one Classe
     * const Classe = await prisma.classe.delete({
     *   where: {
     *     // ... filter to delete one Classe
     *   }
     * })
     * 
     */
    delete<T extends classeDeleteArgs>(args: SelectSubset<T, classeDeleteArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classe.
     * @param {classeUpdateArgs} args - Arguments to update one Classe.
     * @example
     * // Update one Classe
     * const classe = await prisma.classe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends classeUpdateArgs>(args: SelectSubset<T, classeUpdateArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {classeDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends classeDeleteManyArgs>(args?: SelectSubset<T, classeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classe = await prisma.classe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends classeUpdateManyArgs>(args: SelectSubset<T, classeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {classeUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const classe = await prisma.classe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id_classe`
     * const classeWithId_classeOnly = await prisma.classe.updateManyAndReturn({
     *   select: { id_classe: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends classeUpdateManyAndReturnArgs>(args: SelectSubset<T, classeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classe.
     * @param {classeUpsertArgs} args - Arguments to update or create a Classe.
     * @example
     * // Update or create a Classe
     * const classe = await prisma.classe.upsert({
     *   create: {
     *     // ... data to create a Classe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classe we want to update
     *   }
     * })
     */
    upsert<T extends classeUpsertArgs>(args: SelectSubset<T, classeUpsertArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classe.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends classeCountArgs>(
      args?: Subset<T, classeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClasseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClasseAggregateArgs>(args: Subset<T, ClasseAggregateArgs>): Prisma.PrismaPromise<GetClasseAggregateType<T>>

    /**
     * Group by Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends classeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: classeGroupByArgs['orderBy'] }
        : { orderBy?: classeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, classeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the classe model
   */
  readonly fields: classeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for classe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__classeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the classe model
   */
  interface classeFieldRefs {
    readonly id_classe: FieldRef<"classe", 'Int'>
    readonly libelle: FieldRef<"classe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * classe findUnique
   */
  export type classeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter, which classe to fetch.
     */
    where: classeWhereUniqueInput
  }

  /**
   * classe findUniqueOrThrow
   */
  export type classeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter, which classe to fetch.
     */
    where: classeWhereUniqueInput
  }

  /**
   * classe findFirst
   */
  export type classeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter, which classe to fetch.
     */
    where?: classeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classeOrderByWithRelationInput | classeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * classe findFirstOrThrow
   */
  export type classeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter, which classe to fetch.
     */
    where?: classeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classeOrderByWithRelationInput | classeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * classe findMany
   */
  export type classeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classeOrderByWithRelationInput | classeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing classes.
     */
    cursor?: classeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * classe create
   */
  export type classeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * The data needed to create a classe.
     */
    data: XOR<classeCreateInput, classeUncheckedCreateInput>
  }

  /**
   * classe createMany
   */
  export type classeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many classes.
     */
    data: classeCreateManyInput | classeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * classe createManyAndReturn
   */
  export type classeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * The data used to create many classes.
     */
    data: classeCreateManyInput | classeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * classe update
   */
  export type classeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * The data needed to update a classe.
     */
    data: XOR<classeUpdateInput, classeUncheckedUpdateInput>
    /**
     * Choose, which classe to update.
     */
    where: classeWhereUniqueInput
  }

  /**
   * classe updateMany
   */
  export type classeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update classes.
     */
    data: XOR<classeUpdateManyMutationInput, classeUncheckedUpdateManyInput>
    /**
     * Filter which classes to update
     */
    where?: classeWhereInput
    /**
     * Limit how many classes to update.
     */
    limit?: number
  }

  /**
   * classe updateManyAndReturn
   */
  export type classeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * The data used to update classes.
     */
    data: XOR<classeUpdateManyMutationInput, classeUncheckedUpdateManyInput>
    /**
     * Filter which classes to update
     */
    where?: classeWhereInput
    /**
     * Limit how many classes to update.
     */
    limit?: number
  }

  /**
   * classe upsert
   */
  export type classeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * The filter to search for the classe to update in case it exists.
     */
    where: classeWhereUniqueInput
    /**
     * In case the classe found by the `where` argument doesn't exist, create a new classe with this data.
     */
    create: XOR<classeCreateInput, classeUncheckedCreateInput>
    /**
     * In case the classe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<classeUpdateInput, classeUncheckedUpdateInput>
  }

  /**
   * classe delete
   */
  export type classeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter which classe to delete.
     */
    where: classeWhereUniqueInput
  }

  /**
   * classe deleteMany
   */
  export type classeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classes to delete
     */
    where?: classeWhereInput
    /**
     * Limit how many classes to delete.
     */
    limit?: number
  }

  /**
   * classe without action
   */
  export type classeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
  }


  /**
   * Model creneaux_horaire
   */

  export type AggregateCreneaux_horaire = {
    _count: Creneaux_horaireCountAggregateOutputType | null
    _avg: Creneaux_horaireAvgAggregateOutputType | null
    _sum: Creneaux_horaireSumAggregateOutputType | null
    _min: Creneaux_horaireMinAggregateOutputType | null
    _max: Creneaux_horaireMaxAggregateOutputType | null
  }

  export type Creneaux_horaireAvgAggregateOutputType = {
    id_creneaux: number | null
  }

  export type Creneaux_horaireSumAggregateOutputType = {
    id_creneaux: number | null
  }

  export type Creneaux_horaireMinAggregateOutputType = {
    id_creneaux: number | null
    heure_debut: Date | null
    heure_fin: Date | null
  }

  export type Creneaux_horaireMaxAggregateOutputType = {
    id_creneaux: number | null
    heure_debut: Date | null
    heure_fin: Date | null
  }

  export type Creneaux_horaireCountAggregateOutputType = {
    id_creneaux: number
    heure_debut: number
    heure_fin: number
    _all: number
  }


  export type Creneaux_horaireAvgAggregateInputType = {
    id_creneaux?: true
  }

  export type Creneaux_horaireSumAggregateInputType = {
    id_creneaux?: true
  }

  export type Creneaux_horaireMinAggregateInputType = {
    id_creneaux?: true
    heure_debut?: true
    heure_fin?: true
  }

  export type Creneaux_horaireMaxAggregateInputType = {
    id_creneaux?: true
    heure_debut?: true
    heure_fin?: true
  }

  export type Creneaux_horaireCountAggregateInputType = {
    id_creneaux?: true
    heure_debut?: true
    heure_fin?: true
    _all?: true
  }

  export type Creneaux_horaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which creneaux_horaire to aggregate.
     */
    where?: creneaux_horaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creneaux_horaires to fetch.
     */
    orderBy?: creneaux_horaireOrderByWithRelationInput | creneaux_horaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: creneaux_horaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creneaux_horaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creneaux_horaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned creneaux_horaires
    **/
    _count?: true | Creneaux_horaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Creneaux_horaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Creneaux_horaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Creneaux_horaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Creneaux_horaireMaxAggregateInputType
  }

  export type GetCreneaux_horaireAggregateType<T extends Creneaux_horaireAggregateArgs> = {
        [P in keyof T & keyof AggregateCreneaux_horaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreneaux_horaire[P]>
      : GetScalarType<T[P], AggregateCreneaux_horaire[P]>
  }




  export type creneaux_horaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: creneaux_horaireWhereInput
    orderBy?: creneaux_horaireOrderByWithAggregationInput | creneaux_horaireOrderByWithAggregationInput[]
    by: Creneaux_horaireScalarFieldEnum[] | Creneaux_horaireScalarFieldEnum
    having?: creneaux_horaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Creneaux_horaireCountAggregateInputType | true
    _avg?: Creneaux_horaireAvgAggregateInputType
    _sum?: Creneaux_horaireSumAggregateInputType
    _min?: Creneaux_horaireMinAggregateInputType
    _max?: Creneaux_horaireMaxAggregateInputType
  }

  export type Creneaux_horaireGroupByOutputType = {
    id_creneaux: number
    heure_debut: Date
    heure_fin: Date
    _count: Creneaux_horaireCountAggregateOutputType | null
    _avg: Creneaux_horaireAvgAggregateOutputType | null
    _sum: Creneaux_horaireSumAggregateOutputType | null
    _min: Creneaux_horaireMinAggregateOutputType | null
    _max: Creneaux_horaireMaxAggregateOutputType | null
  }

  type GetCreneaux_horaireGroupByPayload<T extends creneaux_horaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Creneaux_horaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Creneaux_horaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Creneaux_horaireGroupByOutputType[P]>
            : GetScalarType<T[P], Creneaux_horaireGroupByOutputType[P]>
        }
      >
    >


  export type creneaux_horaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_creneaux?: boolean
    heure_debut?: boolean
    heure_fin?: boolean
  }, ExtArgs["result"]["creneaux_horaire"]>

  export type creneaux_horaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_creneaux?: boolean
    heure_debut?: boolean
    heure_fin?: boolean
  }, ExtArgs["result"]["creneaux_horaire"]>

  export type creneaux_horaireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_creneaux?: boolean
    heure_debut?: boolean
    heure_fin?: boolean
  }, ExtArgs["result"]["creneaux_horaire"]>

  export type creneaux_horaireSelectScalar = {
    id_creneaux?: boolean
    heure_debut?: boolean
    heure_fin?: boolean
  }

  export type creneaux_horaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_creneaux" | "heure_debut" | "heure_fin", ExtArgs["result"]["creneaux_horaire"]>

  export type $creneaux_horairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "creneaux_horaire"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_creneaux: number
      heure_debut: Date
      heure_fin: Date
    }, ExtArgs["result"]["creneaux_horaire"]>
    composites: {}
  }

  type creneaux_horaireGetPayload<S extends boolean | null | undefined | creneaux_horaireDefaultArgs> = $Result.GetResult<Prisma.$creneaux_horairePayload, S>

  type creneaux_horaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<creneaux_horaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Creneaux_horaireCountAggregateInputType | true
    }

  export interface creneaux_horaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['creneaux_horaire'], meta: { name: 'creneaux_horaire' } }
    /**
     * Find zero or one Creneaux_horaire that matches the filter.
     * @param {creneaux_horaireFindUniqueArgs} args - Arguments to find a Creneaux_horaire
     * @example
     * // Get one Creneaux_horaire
     * const creneaux_horaire = await prisma.creneaux_horaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends creneaux_horaireFindUniqueArgs>(args: SelectSubset<T, creneaux_horaireFindUniqueArgs<ExtArgs>>): Prisma__creneaux_horaireClient<$Result.GetResult<Prisma.$creneaux_horairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Creneaux_horaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {creneaux_horaireFindUniqueOrThrowArgs} args - Arguments to find a Creneaux_horaire
     * @example
     * // Get one Creneaux_horaire
     * const creneaux_horaire = await prisma.creneaux_horaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends creneaux_horaireFindUniqueOrThrowArgs>(args: SelectSubset<T, creneaux_horaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__creneaux_horaireClient<$Result.GetResult<Prisma.$creneaux_horairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creneaux_horaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creneaux_horaireFindFirstArgs} args - Arguments to find a Creneaux_horaire
     * @example
     * // Get one Creneaux_horaire
     * const creneaux_horaire = await prisma.creneaux_horaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends creneaux_horaireFindFirstArgs>(args?: SelectSubset<T, creneaux_horaireFindFirstArgs<ExtArgs>>): Prisma__creneaux_horaireClient<$Result.GetResult<Prisma.$creneaux_horairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creneaux_horaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creneaux_horaireFindFirstOrThrowArgs} args - Arguments to find a Creneaux_horaire
     * @example
     * // Get one Creneaux_horaire
     * const creneaux_horaire = await prisma.creneaux_horaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends creneaux_horaireFindFirstOrThrowArgs>(args?: SelectSubset<T, creneaux_horaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__creneaux_horaireClient<$Result.GetResult<Prisma.$creneaux_horairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Creneaux_horaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creneaux_horaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Creneaux_horaires
     * const creneaux_horaires = await prisma.creneaux_horaire.findMany()
     * 
     * // Get first 10 Creneaux_horaires
     * const creneaux_horaires = await prisma.creneaux_horaire.findMany({ take: 10 })
     * 
     * // Only select the `id_creneaux`
     * const creneaux_horaireWithId_creneauxOnly = await prisma.creneaux_horaire.findMany({ select: { id_creneaux: true } })
     * 
     */
    findMany<T extends creneaux_horaireFindManyArgs>(args?: SelectSubset<T, creneaux_horaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$creneaux_horairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Creneaux_horaire.
     * @param {creneaux_horaireCreateArgs} args - Arguments to create a Creneaux_horaire.
     * @example
     * // Create one Creneaux_horaire
     * const Creneaux_horaire = await prisma.creneaux_horaire.create({
     *   data: {
     *     // ... data to create a Creneaux_horaire
     *   }
     * })
     * 
     */
    create<T extends creneaux_horaireCreateArgs>(args: SelectSubset<T, creneaux_horaireCreateArgs<ExtArgs>>): Prisma__creneaux_horaireClient<$Result.GetResult<Prisma.$creneaux_horairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Creneaux_horaires.
     * @param {creneaux_horaireCreateManyArgs} args - Arguments to create many Creneaux_horaires.
     * @example
     * // Create many Creneaux_horaires
     * const creneaux_horaire = await prisma.creneaux_horaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends creneaux_horaireCreateManyArgs>(args?: SelectSubset<T, creneaux_horaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Creneaux_horaires and returns the data saved in the database.
     * @param {creneaux_horaireCreateManyAndReturnArgs} args - Arguments to create many Creneaux_horaires.
     * @example
     * // Create many Creneaux_horaires
     * const creneaux_horaire = await prisma.creneaux_horaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Creneaux_horaires and only return the `id_creneaux`
     * const creneaux_horaireWithId_creneauxOnly = await prisma.creneaux_horaire.createManyAndReturn({
     *   select: { id_creneaux: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends creneaux_horaireCreateManyAndReturnArgs>(args?: SelectSubset<T, creneaux_horaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$creneaux_horairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Creneaux_horaire.
     * @param {creneaux_horaireDeleteArgs} args - Arguments to delete one Creneaux_horaire.
     * @example
     * // Delete one Creneaux_horaire
     * const Creneaux_horaire = await prisma.creneaux_horaire.delete({
     *   where: {
     *     // ... filter to delete one Creneaux_horaire
     *   }
     * })
     * 
     */
    delete<T extends creneaux_horaireDeleteArgs>(args: SelectSubset<T, creneaux_horaireDeleteArgs<ExtArgs>>): Prisma__creneaux_horaireClient<$Result.GetResult<Prisma.$creneaux_horairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Creneaux_horaire.
     * @param {creneaux_horaireUpdateArgs} args - Arguments to update one Creneaux_horaire.
     * @example
     * // Update one Creneaux_horaire
     * const creneaux_horaire = await prisma.creneaux_horaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends creneaux_horaireUpdateArgs>(args: SelectSubset<T, creneaux_horaireUpdateArgs<ExtArgs>>): Prisma__creneaux_horaireClient<$Result.GetResult<Prisma.$creneaux_horairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Creneaux_horaires.
     * @param {creneaux_horaireDeleteManyArgs} args - Arguments to filter Creneaux_horaires to delete.
     * @example
     * // Delete a few Creneaux_horaires
     * const { count } = await prisma.creneaux_horaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends creneaux_horaireDeleteManyArgs>(args?: SelectSubset<T, creneaux_horaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creneaux_horaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creneaux_horaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Creneaux_horaires
     * const creneaux_horaire = await prisma.creneaux_horaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends creneaux_horaireUpdateManyArgs>(args: SelectSubset<T, creneaux_horaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creneaux_horaires and returns the data updated in the database.
     * @param {creneaux_horaireUpdateManyAndReturnArgs} args - Arguments to update many Creneaux_horaires.
     * @example
     * // Update many Creneaux_horaires
     * const creneaux_horaire = await prisma.creneaux_horaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Creneaux_horaires and only return the `id_creneaux`
     * const creneaux_horaireWithId_creneauxOnly = await prisma.creneaux_horaire.updateManyAndReturn({
     *   select: { id_creneaux: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends creneaux_horaireUpdateManyAndReturnArgs>(args: SelectSubset<T, creneaux_horaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$creneaux_horairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Creneaux_horaire.
     * @param {creneaux_horaireUpsertArgs} args - Arguments to update or create a Creneaux_horaire.
     * @example
     * // Update or create a Creneaux_horaire
     * const creneaux_horaire = await prisma.creneaux_horaire.upsert({
     *   create: {
     *     // ... data to create a Creneaux_horaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Creneaux_horaire we want to update
     *   }
     * })
     */
    upsert<T extends creneaux_horaireUpsertArgs>(args: SelectSubset<T, creneaux_horaireUpsertArgs<ExtArgs>>): Prisma__creneaux_horaireClient<$Result.GetResult<Prisma.$creneaux_horairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Creneaux_horaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creneaux_horaireCountArgs} args - Arguments to filter Creneaux_horaires to count.
     * @example
     * // Count the number of Creneaux_horaires
     * const count = await prisma.creneaux_horaire.count({
     *   where: {
     *     // ... the filter for the Creneaux_horaires we want to count
     *   }
     * })
    **/
    count<T extends creneaux_horaireCountArgs>(
      args?: Subset<T, creneaux_horaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Creneaux_horaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Creneaux_horaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Creneaux_horaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Creneaux_horaireAggregateArgs>(args: Subset<T, Creneaux_horaireAggregateArgs>): Prisma.PrismaPromise<GetCreneaux_horaireAggregateType<T>>

    /**
     * Group by Creneaux_horaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creneaux_horaireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends creneaux_horaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: creneaux_horaireGroupByArgs['orderBy'] }
        : { orderBy?: creneaux_horaireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, creneaux_horaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreneaux_horaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the creneaux_horaire model
   */
  readonly fields: creneaux_horaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for creneaux_horaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__creneaux_horaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the creneaux_horaire model
   */
  interface creneaux_horaireFieldRefs {
    readonly id_creneaux: FieldRef<"creneaux_horaire", 'Int'>
    readonly heure_debut: FieldRef<"creneaux_horaire", 'DateTime'>
    readonly heure_fin: FieldRef<"creneaux_horaire", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * creneaux_horaire findUnique
   */
  export type creneaux_horaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
    /**
     * Filter, which creneaux_horaire to fetch.
     */
    where: creneaux_horaireWhereUniqueInput
  }

  /**
   * creneaux_horaire findUniqueOrThrow
   */
  export type creneaux_horaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
    /**
     * Filter, which creneaux_horaire to fetch.
     */
    where: creneaux_horaireWhereUniqueInput
  }

  /**
   * creneaux_horaire findFirst
   */
  export type creneaux_horaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
    /**
     * Filter, which creneaux_horaire to fetch.
     */
    where?: creneaux_horaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creneaux_horaires to fetch.
     */
    orderBy?: creneaux_horaireOrderByWithRelationInput | creneaux_horaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for creneaux_horaires.
     */
    cursor?: creneaux_horaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creneaux_horaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creneaux_horaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of creneaux_horaires.
     */
    distinct?: Creneaux_horaireScalarFieldEnum | Creneaux_horaireScalarFieldEnum[]
  }

  /**
   * creneaux_horaire findFirstOrThrow
   */
  export type creneaux_horaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
    /**
     * Filter, which creneaux_horaire to fetch.
     */
    where?: creneaux_horaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creneaux_horaires to fetch.
     */
    orderBy?: creneaux_horaireOrderByWithRelationInput | creneaux_horaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for creneaux_horaires.
     */
    cursor?: creneaux_horaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creneaux_horaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creneaux_horaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of creneaux_horaires.
     */
    distinct?: Creneaux_horaireScalarFieldEnum | Creneaux_horaireScalarFieldEnum[]
  }

  /**
   * creneaux_horaire findMany
   */
  export type creneaux_horaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
    /**
     * Filter, which creneaux_horaires to fetch.
     */
    where?: creneaux_horaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creneaux_horaires to fetch.
     */
    orderBy?: creneaux_horaireOrderByWithRelationInput | creneaux_horaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing creneaux_horaires.
     */
    cursor?: creneaux_horaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creneaux_horaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creneaux_horaires.
     */
    skip?: number
    distinct?: Creneaux_horaireScalarFieldEnum | Creneaux_horaireScalarFieldEnum[]
  }

  /**
   * creneaux_horaire create
   */
  export type creneaux_horaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
    /**
     * The data needed to create a creneaux_horaire.
     */
    data: XOR<creneaux_horaireCreateInput, creneaux_horaireUncheckedCreateInput>
  }

  /**
   * creneaux_horaire createMany
   */
  export type creneaux_horaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many creneaux_horaires.
     */
    data: creneaux_horaireCreateManyInput | creneaux_horaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * creneaux_horaire createManyAndReturn
   */
  export type creneaux_horaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
    /**
     * The data used to create many creneaux_horaires.
     */
    data: creneaux_horaireCreateManyInput | creneaux_horaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * creneaux_horaire update
   */
  export type creneaux_horaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
    /**
     * The data needed to update a creneaux_horaire.
     */
    data: XOR<creneaux_horaireUpdateInput, creneaux_horaireUncheckedUpdateInput>
    /**
     * Choose, which creneaux_horaire to update.
     */
    where: creneaux_horaireWhereUniqueInput
  }

  /**
   * creneaux_horaire updateMany
   */
  export type creneaux_horaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update creneaux_horaires.
     */
    data: XOR<creneaux_horaireUpdateManyMutationInput, creneaux_horaireUncheckedUpdateManyInput>
    /**
     * Filter which creneaux_horaires to update
     */
    where?: creneaux_horaireWhereInput
    /**
     * Limit how many creneaux_horaires to update.
     */
    limit?: number
  }

  /**
   * creneaux_horaire updateManyAndReturn
   */
  export type creneaux_horaireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
    /**
     * The data used to update creneaux_horaires.
     */
    data: XOR<creneaux_horaireUpdateManyMutationInput, creneaux_horaireUncheckedUpdateManyInput>
    /**
     * Filter which creneaux_horaires to update
     */
    where?: creneaux_horaireWhereInput
    /**
     * Limit how many creneaux_horaires to update.
     */
    limit?: number
  }

  /**
   * creneaux_horaire upsert
   */
  export type creneaux_horaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
    /**
     * The filter to search for the creneaux_horaire to update in case it exists.
     */
    where: creneaux_horaireWhereUniqueInput
    /**
     * In case the creneaux_horaire found by the `where` argument doesn't exist, create a new creneaux_horaire with this data.
     */
    create: XOR<creneaux_horaireCreateInput, creneaux_horaireUncheckedCreateInput>
    /**
     * In case the creneaux_horaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<creneaux_horaireUpdateInput, creneaux_horaireUncheckedUpdateInput>
  }

  /**
   * creneaux_horaire delete
   */
  export type creneaux_horaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
    /**
     * Filter which creneaux_horaire to delete.
     */
    where: creneaux_horaireWhereUniqueInput
  }

  /**
   * creneaux_horaire deleteMany
   */
  export type creneaux_horaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which creneaux_horaires to delete
     */
    where?: creneaux_horaireWhereInput
    /**
     * Limit how many creneaux_horaires to delete.
     */
    limit?: number
  }

  /**
   * creneaux_horaire without action
   */
  export type creneaux_horaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creneaux_horaire
     */
    select?: creneaux_horaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creneaux_horaire
     */
    omit?: creneaux_horaireOmit<ExtArgs> | null
  }


  /**
   * Model salles
   */

  export type AggregateSalles = {
    _count: SallesCountAggregateOutputType | null
    _avg: SallesAvgAggregateOutputType | null
    _sum: SallesSumAggregateOutputType | null
    _min: SallesMinAggregateOutputType | null
    _max: SallesMaxAggregateOutputType | null
  }

  export type SallesAvgAggregateOutputType = {
    id: number | null
    capacite: number | null
  }

  export type SallesSumAggregateOutputType = {
    id: number | null
    capacite: number | null
  }

  export type SallesMinAggregateOutputType = {
    id: number | null
    code: string | null
    capacite: number | null
    disponible: boolean | null
    created_at: Date | null
  }

  export type SallesMaxAggregateOutputType = {
    id: number | null
    code: string | null
    capacite: number | null
    disponible: boolean | null
    created_at: Date | null
  }

  export type SallesCountAggregateOutputType = {
    id: number
    code: number
    capacite: number
    disponible: number
    created_at: number
    _all: number
  }


  export type SallesAvgAggregateInputType = {
    id?: true
    capacite?: true
  }

  export type SallesSumAggregateInputType = {
    id?: true
    capacite?: true
  }

  export type SallesMinAggregateInputType = {
    id?: true
    code?: true
    capacite?: true
    disponible?: true
    created_at?: true
  }

  export type SallesMaxAggregateInputType = {
    id?: true
    code?: true
    capacite?: true
    disponible?: true
    created_at?: true
  }

  export type SallesCountAggregateInputType = {
    id?: true
    code?: true
    capacite?: true
    disponible?: true
    created_at?: true
    _all?: true
  }

  export type SallesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which salles to aggregate.
     */
    where?: sallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salles to fetch.
     */
    orderBy?: sallesOrderByWithRelationInput | sallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned salles
    **/
    _count?: true | SallesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SallesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SallesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SallesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SallesMaxAggregateInputType
  }

  export type GetSallesAggregateType<T extends SallesAggregateArgs> = {
        [P in keyof T & keyof AggregateSalles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalles[P]>
      : GetScalarType<T[P], AggregateSalles[P]>
  }




  export type sallesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sallesWhereInput
    orderBy?: sallesOrderByWithAggregationInput | sallesOrderByWithAggregationInput[]
    by: SallesScalarFieldEnum[] | SallesScalarFieldEnum
    having?: sallesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SallesCountAggregateInputType | true
    _avg?: SallesAvgAggregateInputType
    _sum?: SallesSumAggregateInputType
    _min?: SallesMinAggregateInputType
    _max?: SallesMaxAggregateInputType
  }

  export type SallesGroupByOutputType = {
    id: number
    code: string
    capacite: number
    disponible: boolean | null
    created_at: Date | null
    _count: SallesCountAggregateOutputType | null
    _avg: SallesAvgAggregateOutputType | null
    _sum: SallesSumAggregateOutputType | null
    _min: SallesMinAggregateOutputType | null
    _max: SallesMaxAggregateOutputType | null
  }

  type GetSallesGroupByPayload<T extends sallesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SallesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SallesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SallesGroupByOutputType[P]>
            : GetScalarType<T[P], SallesGroupByOutputType[P]>
        }
      >
    >


  export type sallesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    capacite?: boolean
    disponible?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["salles"]>

  export type sallesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    capacite?: boolean
    disponible?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["salles"]>

  export type sallesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    capacite?: boolean
    disponible?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["salles"]>

  export type sallesSelectScalar = {
    id?: boolean
    code?: boolean
    capacite?: boolean
    disponible?: boolean
    created_at?: boolean
  }

  export type sallesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "capacite" | "disponible" | "created_at", ExtArgs["result"]["salles"]>

  export type $sallesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "salles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      capacite: number
      disponible: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["salles"]>
    composites: {}
  }

  type sallesGetPayload<S extends boolean | null | undefined | sallesDefaultArgs> = $Result.GetResult<Prisma.$sallesPayload, S>

  type sallesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sallesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SallesCountAggregateInputType | true
    }

  export interface sallesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['salles'], meta: { name: 'salles' } }
    /**
     * Find zero or one Salles that matches the filter.
     * @param {sallesFindUniqueArgs} args - Arguments to find a Salles
     * @example
     * // Get one Salles
     * const salles = await prisma.salles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sallesFindUniqueArgs>(args: SelectSubset<T, sallesFindUniqueArgs<ExtArgs>>): Prisma__sallesClient<$Result.GetResult<Prisma.$sallesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Salles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sallesFindUniqueOrThrowArgs} args - Arguments to find a Salles
     * @example
     * // Get one Salles
     * const salles = await prisma.salles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sallesFindUniqueOrThrowArgs>(args: SelectSubset<T, sallesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sallesClient<$Result.GetResult<Prisma.$sallesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sallesFindFirstArgs} args - Arguments to find a Salles
     * @example
     * // Get one Salles
     * const salles = await prisma.salles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sallesFindFirstArgs>(args?: SelectSubset<T, sallesFindFirstArgs<ExtArgs>>): Prisma__sallesClient<$Result.GetResult<Prisma.$sallesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sallesFindFirstOrThrowArgs} args - Arguments to find a Salles
     * @example
     * // Get one Salles
     * const salles = await prisma.salles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sallesFindFirstOrThrowArgs>(args?: SelectSubset<T, sallesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sallesClient<$Result.GetResult<Prisma.$sallesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sallesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salles
     * const salles = await prisma.salles.findMany()
     * 
     * // Get first 10 Salles
     * const salles = await prisma.salles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sallesWithIdOnly = await prisma.salles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sallesFindManyArgs>(args?: SelectSubset<T, sallesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sallesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Salles.
     * @param {sallesCreateArgs} args - Arguments to create a Salles.
     * @example
     * // Create one Salles
     * const Salles = await prisma.salles.create({
     *   data: {
     *     // ... data to create a Salles
     *   }
     * })
     * 
     */
    create<T extends sallesCreateArgs>(args: SelectSubset<T, sallesCreateArgs<ExtArgs>>): Prisma__sallesClient<$Result.GetResult<Prisma.$sallesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salles.
     * @param {sallesCreateManyArgs} args - Arguments to create many Salles.
     * @example
     * // Create many Salles
     * const salles = await prisma.salles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sallesCreateManyArgs>(args?: SelectSubset<T, sallesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salles and returns the data saved in the database.
     * @param {sallesCreateManyAndReturnArgs} args - Arguments to create many Salles.
     * @example
     * // Create many Salles
     * const salles = await prisma.salles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salles and only return the `id`
     * const sallesWithIdOnly = await prisma.salles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sallesCreateManyAndReturnArgs>(args?: SelectSubset<T, sallesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sallesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Salles.
     * @param {sallesDeleteArgs} args - Arguments to delete one Salles.
     * @example
     * // Delete one Salles
     * const Salles = await prisma.salles.delete({
     *   where: {
     *     // ... filter to delete one Salles
     *   }
     * })
     * 
     */
    delete<T extends sallesDeleteArgs>(args: SelectSubset<T, sallesDeleteArgs<ExtArgs>>): Prisma__sallesClient<$Result.GetResult<Prisma.$sallesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Salles.
     * @param {sallesUpdateArgs} args - Arguments to update one Salles.
     * @example
     * // Update one Salles
     * const salles = await prisma.salles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sallesUpdateArgs>(args: SelectSubset<T, sallesUpdateArgs<ExtArgs>>): Prisma__sallesClient<$Result.GetResult<Prisma.$sallesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salles.
     * @param {sallesDeleteManyArgs} args - Arguments to filter Salles to delete.
     * @example
     * // Delete a few Salles
     * const { count } = await prisma.salles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sallesDeleteManyArgs>(args?: SelectSubset<T, sallesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sallesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salles
     * const salles = await prisma.salles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sallesUpdateManyArgs>(args: SelectSubset<T, sallesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salles and returns the data updated in the database.
     * @param {sallesUpdateManyAndReturnArgs} args - Arguments to update many Salles.
     * @example
     * // Update many Salles
     * const salles = await prisma.salles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salles and only return the `id`
     * const sallesWithIdOnly = await prisma.salles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sallesUpdateManyAndReturnArgs>(args: SelectSubset<T, sallesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sallesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Salles.
     * @param {sallesUpsertArgs} args - Arguments to update or create a Salles.
     * @example
     * // Update or create a Salles
     * const salles = await prisma.salles.upsert({
     *   create: {
     *     // ... data to create a Salles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Salles we want to update
     *   }
     * })
     */
    upsert<T extends sallesUpsertArgs>(args: SelectSubset<T, sallesUpsertArgs<ExtArgs>>): Prisma__sallesClient<$Result.GetResult<Prisma.$sallesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sallesCountArgs} args - Arguments to filter Salles to count.
     * @example
     * // Count the number of Salles
     * const count = await prisma.salles.count({
     *   where: {
     *     // ... the filter for the Salles we want to count
     *   }
     * })
    **/
    count<T extends sallesCountArgs>(
      args?: Subset<T, sallesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SallesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Salles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SallesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SallesAggregateArgs>(args: Subset<T, SallesAggregateArgs>): Prisma.PrismaPromise<GetSallesAggregateType<T>>

    /**
     * Group by Salles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sallesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sallesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sallesGroupByArgs['orderBy'] }
        : { orderBy?: sallesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sallesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSallesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the salles model
   */
  readonly fields: sallesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for salles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sallesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the salles model
   */
  interface sallesFieldRefs {
    readonly id: FieldRef<"salles", 'Int'>
    readonly code: FieldRef<"salles", 'String'>
    readonly capacite: FieldRef<"salles", 'Int'>
    readonly disponible: FieldRef<"salles", 'Boolean'>
    readonly created_at: FieldRef<"salles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * salles findUnique
   */
  export type sallesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
    /**
     * Filter, which salles to fetch.
     */
    where: sallesWhereUniqueInput
  }

  /**
   * salles findUniqueOrThrow
   */
  export type sallesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
    /**
     * Filter, which salles to fetch.
     */
    where: sallesWhereUniqueInput
  }

  /**
   * salles findFirst
   */
  export type sallesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
    /**
     * Filter, which salles to fetch.
     */
    where?: sallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salles to fetch.
     */
    orderBy?: sallesOrderByWithRelationInput | sallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for salles.
     */
    cursor?: sallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of salles.
     */
    distinct?: SallesScalarFieldEnum | SallesScalarFieldEnum[]
  }

  /**
   * salles findFirstOrThrow
   */
  export type sallesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
    /**
     * Filter, which salles to fetch.
     */
    where?: sallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salles to fetch.
     */
    orderBy?: sallesOrderByWithRelationInput | sallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for salles.
     */
    cursor?: sallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of salles.
     */
    distinct?: SallesScalarFieldEnum | SallesScalarFieldEnum[]
  }

  /**
   * salles findMany
   */
  export type sallesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
    /**
     * Filter, which salles to fetch.
     */
    where?: sallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salles to fetch.
     */
    orderBy?: sallesOrderByWithRelationInput | sallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing salles.
     */
    cursor?: sallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salles.
     */
    skip?: number
    distinct?: SallesScalarFieldEnum | SallesScalarFieldEnum[]
  }

  /**
   * salles create
   */
  export type sallesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
    /**
     * The data needed to create a salles.
     */
    data: XOR<sallesCreateInput, sallesUncheckedCreateInput>
  }

  /**
   * salles createMany
   */
  export type sallesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many salles.
     */
    data: sallesCreateManyInput | sallesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * salles createManyAndReturn
   */
  export type sallesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
    /**
     * The data used to create many salles.
     */
    data: sallesCreateManyInput | sallesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * salles update
   */
  export type sallesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
    /**
     * The data needed to update a salles.
     */
    data: XOR<sallesUpdateInput, sallesUncheckedUpdateInput>
    /**
     * Choose, which salles to update.
     */
    where: sallesWhereUniqueInput
  }

  /**
   * salles updateMany
   */
  export type sallesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update salles.
     */
    data: XOR<sallesUpdateManyMutationInput, sallesUncheckedUpdateManyInput>
    /**
     * Filter which salles to update
     */
    where?: sallesWhereInput
    /**
     * Limit how many salles to update.
     */
    limit?: number
  }

  /**
   * salles updateManyAndReturn
   */
  export type sallesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
    /**
     * The data used to update salles.
     */
    data: XOR<sallesUpdateManyMutationInput, sallesUncheckedUpdateManyInput>
    /**
     * Filter which salles to update
     */
    where?: sallesWhereInput
    /**
     * Limit how many salles to update.
     */
    limit?: number
  }

  /**
   * salles upsert
   */
  export type sallesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
    /**
     * The filter to search for the salles to update in case it exists.
     */
    where: sallesWhereUniqueInput
    /**
     * In case the salles found by the `where` argument doesn't exist, create a new salles with this data.
     */
    create: XOR<sallesCreateInput, sallesUncheckedCreateInput>
    /**
     * In case the salles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sallesUpdateInput, sallesUncheckedUpdateInput>
  }

  /**
   * salles delete
   */
  export type sallesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
    /**
     * Filter which salles to delete.
     */
    where: sallesWhereUniqueInput
  }

  /**
   * salles deleteMany
   */
  export type sallesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which salles to delete
     */
    where?: sallesWhereInput
    /**
     * Limit how many salles to delete.
     */
    limit?: number
  }

  /**
   * salles without action
   */
  export type sallesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salles
     */
    select?: sallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salles
     */
    omit?: sallesOmit<ExtArgs> | null
  }


  /**
   * Model utilisateurs
   */

  export type AggregateUtilisateurs = {
    _count: UtilisateursCountAggregateOutputType | null
    _avg: UtilisateursAvgAggregateOutputType | null
    _sum: UtilisateursSumAggregateOutputType | null
    _min: UtilisateursMinAggregateOutputType | null
    _max: UtilisateursMaxAggregateOutputType | null
  }

  export type UtilisateursAvgAggregateOutputType = {
    id: number | null
  }

  export type UtilisateursSumAggregateOutputType = {
    id: number | null
  }

  export type UtilisateursMinAggregateOutputType = {
    id: number | null
    email: string | null
    mot_de_passe: string | null
  }

  export type UtilisateursMaxAggregateOutputType = {
    id: number | null
    email: string | null
    mot_de_passe: string | null
  }

  export type UtilisateursCountAggregateOutputType = {
    id: number
    email: number
    mot_de_passe: number
    _all: number
  }


  export type UtilisateursAvgAggregateInputType = {
    id?: true
  }

  export type UtilisateursSumAggregateInputType = {
    id?: true
  }

  export type UtilisateursMinAggregateInputType = {
    id?: true
    email?: true
    mot_de_passe?: true
  }

  export type UtilisateursMaxAggregateInputType = {
    id?: true
    email?: true
    mot_de_passe?: true
  }

  export type UtilisateursCountAggregateInputType = {
    id?: true
    email?: true
    mot_de_passe?: true
    _all?: true
  }

  export type UtilisateursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateurs to aggregate.
     */
    where?: utilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateursOrderByWithRelationInput | utilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: utilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned utilisateurs
    **/
    _count?: true | UtilisateursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateursMaxAggregateInputType
  }

  export type GetUtilisateursAggregateType<T extends UtilisateursAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateurs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateurs[P]>
      : GetScalarType<T[P], AggregateUtilisateurs[P]>
  }




  export type utilisateursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilisateursWhereInput
    orderBy?: utilisateursOrderByWithAggregationInput | utilisateursOrderByWithAggregationInput[]
    by: UtilisateursScalarFieldEnum[] | UtilisateursScalarFieldEnum
    having?: utilisateursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateursCountAggregateInputType | true
    _avg?: UtilisateursAvgAggregateInputType
    _sum?: UtilisateursSumAggregateInputType
    _min?: UtilisateursMinAggregateInputType
    _max?: UtilisateursMaxAggregateInputType
  }

  export type UtilisateursGroupByOutputType = {
    id: number
    email: string
    mot_de_passe: string
    _count: UtilisateursCountAggregateOutputType | null
    _avg: UtilisateursAvgAggregateOutputType | null
    _sum: UtilisateursSumAggregateOutputType | null
    _min: UtilisateursMinAggregateOutputType | null
    _max: UtilisateursMaxAggregateOutputType | null
  }

  type GetUtilisateursGroupByPayload<T extends utilisateursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateursGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateursGroupByOutputType[P]>
        }
      >
    >


  export type utilisateursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mot_de_passe?: boolean
  }, ExtArgs["result"]["utilisateurs"]>

  export type utilisateursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mot_de_passe?: boolean
  }, ExtArgs["result"]["utilisateurs"]>

  export type utilisateursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mot_de_passe?: boolean
  }, ExtArgs["result"]["utilisateurs"]>

  export type utilisateursSelectScalar = {
    id?: boolean
    email?: boolean
    mot_de_passe?: boolean
  }

  export type utilisateursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "mot_de_passe", ExtArgs["result"]["utilisateurs"]>

  export type $utilisateursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "utilisateurs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      mot_de_passe: string
    }, ExtArgs["result"]["utilisateurs"]>
    composites: {}
  }

  type utilisateursGetPayload<S extends boolean | null | undefined | utilisateursDefaultArgs> = $Result.GetResult<Prisma.$utilisateursPayload, S>

  type utilisateursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<utilisateursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateursCountAggregateInputType | true
    }

  export interface utilisateursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['utilisateurs'], meta: { name: 'utilisateurs' } }
    /**
     * Find zero or one Utilisateurs that matches the filter.
     * @param {utilisateursFindUniqueArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends utilisateursFindUniqueArgs>(args: SelectSubset<T, utilisateursFindUniqueArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateurs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {utilisateursFindUniqueOrThrowArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends utilisateursFindUniqueOrThrowArgs>(args: SelectSubset<T, utilisateursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursFindFirstArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends utilisateursFindFirstArgs>(args?: SelectSubset<T, utilisateursFindFirstArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateurs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursFindFirstOrThrowArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends utilisateursFindFirstOrThrowArgs>(args?: SelectSubset<T, utilisateursFindFirstOrThrowArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateursWithIdOnly = await prisma.utilisateurs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends utilisateursFindManyArgs>(args?: SelectSubset<T, utilisateursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateurs.
     * @param {utilisateursCreateArgs} args - Arguments to create a Utilisateurs.
     * @example
     * // Create one Utilisateurs
     * const Utilisateurs = await prisma.utilisateurs.create({
     *   data: {
     *     // ... data to create a Utilisateurs
     *   }
     * })
     * 
     */
    create<T extends utilisateursCreateArgs>(args: SelectSubset<T, utilisateursCreateArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {utilisateursCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends utilisateursCreateManyArgs>(args?: SelectSubset<T, utilisateursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {utilisateursCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateursWithIdOnly = await prisma.utilisateurs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends utilisateursCreateManyAndReturnArgs>(args?: SelectSubset<T, utilisateursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateurs.
     * @param {utilisateursDeleteArgs} args - Arguments to delete one Utilisateurs.
     * @example
     * // Delete one Utilisateurs
     * const Utilisateurs = await prisma.utilisateurs.delete({
     *   where: {
     *     // ... filter to delete one Utilisateurs
     *   }
     * })
     * 
     */
    delete<T extends utilisateursDeleteArgs>(args: SelectSubset<T, utilisateursDeleteArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateurs.
     * @param {utilisateursUpdateArgs} args - Arguments to update one Utilisateurs.
     * @example
     * // Update one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends utilisateursUpdateArgs>(args: SelectSubset<T, utilisateursUpdateArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {utilisateursDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateurs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends utilisateursDeleteManyArgs>(args?: SelectSubset<T, utilisateursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends utilisateursUpdateManyArgs>(args: SelectSubset<T, utilisateursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {utilisateursUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateursWithIdOnly = await prisma.utilisateurs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends utilisateursUpdateManyAndReturnArgs>(args: SelectSubset<T, utilisateursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateurs.
     * @param {utilisateursUpsertArgs} args - Arguments to update or create a Utilisateurs.
     * @example
     * // Update or create a Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.upsert({
     *   create: {
     *     // ... data to create a Utilisateurs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateurs we want to update
     *   }
     * })
     */
    upsert<T extends utilisateursUpsertArgs>(args: SelectSubset<T, utilisateursUpsertArgs<ExtArgs>>): Prisma__utilisateursClient<$Result.GetResult<Prisma.$utilisateursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateurs.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends utilisateursCountArgs>(
      args?: Subset<T, utilisateursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilisateursAggregateArgs>(args: Subset<T, UtilisateursAggregateArgs>): Prisma.PrismaPromise<GetUtilisateursAggregateType<T>>

    /**
     * Group by Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends utilisateursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: utilisateursGroupByArgs['orderBy'] }
        : { orderBy?: utilisateursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, utilisateursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the utilisateurs model
   */
  readonly fields: utilisateursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for utilisateurs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__utilisateursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the utilisateurs model
   */
  interface utilisateursFieldRefs {
    readonly id: FieldRef<"utilisateurs", 'Int'>
    readonly email: FieldRef<"utilisateurs", 'String'>
    readonly mot_de_passe: FieldRef<"utilisateurs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * utilisateurs findUnique
   */
  export type utilisateursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where: utilisateursWhereUniqueInput
  }

  /**
   * utilisateurs findUniqueOrThrow
   */
  export type utilisateursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where: utilisateursWhereUniqueInput
  }

  /**
   * utilisateurs findFirst
   */
  export type utilisateursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where?: utilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateursOrderByWithRelationInput | utilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateurs.
     */
    cursor?: utilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateurs.
     */
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * utilisateurs findFirstOrThrow
   */
  export type utilisateursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where?: utilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateursOrderByWithRelationInput | utilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateurs.
     */
    cursor?: utilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateurs.
     */
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * utilisateurs findMany
   */
  export type utilisateursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where?: utilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateursOrderByWithRelationInput | utilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing utilisateurs.
     */
    cursor?: utilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * utilisateurs create
   */
  export type utilisateursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * The data needed to create a utilisateurs.
     */
    data: XOR<utilisateursCreateInput, utilisateursUncheckedCreateInput>
  }

  /**
   * utilisateurs createMany
   */
  export type utilisateursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many utilisateurs.
     */
    data: utilisateursCreateManyInput | utilisateursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * utilisateurs createManyAndReturn
   */
  export type utilisateursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * The data used to create many utilisateurs.
     */
    data: utilisateursCreateManyInput | utilisateursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * utilisateurs update
   */
  export type utilisateursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * The data needed to update a utilisateurs.
     */
    data: XOR<utilisateursUpdateInput, utilisateursUncheckedUpdateInput>
    /**
     * Choose, which utilisateurs to update.
     */
    where: utilisateursWhereUniqueInput
  }

  /**
   * utilisateurs updateMany
   */
  export type utilisateursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update utilisateurs.
     */
    data: XOR<utilisateursUpdateManyMutationInput, utilisateursUncheckedUpdateManyInput>
    /**
     * Filter which utilisateurs to update
     */
    where?: utilisateursWhereInput
    /**
     * Limit how many utilisateurs to update.
     */
    limit?: number
  }

  /**
   * utilisateurs updateManyAndReturn
   */
  export type utilisateursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * The data used to update utilisateurs.
     */
    data: XOR<utilisateursUpdateManyMutationInput, utilisateursUncheckedUpdateManyInput>
    /**
     * Filter which utilisateurs to update
     */
    where?: utilisateursWhereInput
    /**
     * Limit how many utilisateurs to update.
     */
    limit?: number
  }

  /**
   * utilisateurs upsert
   */
  export type utilisateursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * The filter to search for the utilisateurs to update in case it exists.
     */
    where: utilisateursWhereUniqueInput
    /**
     * In case the utilisateurs found by the `where` argument doesn't exist, create a new utilisateurs with this data.
     */
    create: XOR<utilisateursCreateInput, utilisateursUncheckedCreateInput>
    /**
     * In case the utilisateurs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<utilisateursUpdateInput, utilisateursUncheckedUpdateInput>
  }

  /**
   * utilisateurs delete
   */
  export type utilisateursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
    /**
     * Filter which utilisateurs to delete.
     */
    where: utilisateursWhereUniqueInput
  }

  /**
   * utilisateurs deleteMany
   */
  export type utilisateursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateurs to delete
     */
    where?: utilisateursWhereInput
    /**
     * Limit how many utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * utilisateurs without action
   */
  export type utilisateursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateurs
     */
    select?: utilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateurs
     */
    omit?: utilisateursOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClasseScalarFieldEnum: {
    id_classe: 'id_classe',
    libelle: 'libelle'
  };

  export type ClasseScalarFieldEnum = (typeof ClasseScalarFieldEnum)[keyof typeof ClasseScalarFieldEnum]


  export const Creneaux_horaireScalarFieldEnum: {
    id_creneaux: 'id_creneaux',
    heure_debut: 'heure_debut',
    heure_fin: 'heure_fin'
  };

  export type Creneaux_horaireScalarFieldEnum = (typeof Creneaux_horaireScalarFieldEnum)[keyof typeof Creneaux_horaireScalarFieldEnum]


  export const SallesScalarFieldEnum: {
    id: 'id',
    code: 'code',
    capacite: 'capacite',
    disponible: 'disponible',
    created_at: 'created_at'
  };

  export type SallesScalarFieldEnum = (typeof SallesScalarFieldEnum)[keyof typeof SallesScalarFieldEnum]


  export const UtilisateursScalarFieldEnum: {
    id: 'id',
    email: 'email',
    mot_de_passe: 'mot_de_passe'
  };

  export type UtilisateursScalarFieldEnum = (typeof UtilisateursScalarFieldEnum)[keyof typeof UtilisateursScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type classeWhereInput = {
    AND?: classeWhereInput | classeWhereInput[]
    OR?: classeWhereInput[]
    NOT?: classeWhereInput | classeWhereInput[]
    id_classe?: IntFilter<"classe"> | number
    libelle?: StringFilter<"classe"> | string
  }

  export type classeOrderByWithRelationInput = {
    id_classe?: SortOrder
    libelle?: SortOrder
  }

  export type classeWhereUniqueInput = Prisma.AtLeast<{
    id_classe?: number
    AND?: classeWhereInput | classeWhereInput[]
    OR?: classeWhereInput[]
    NOT?: classeWhereInput | classeWhereInput[]
    libelle?: StringFilter<"classe"> | string
  }, "id_classe">

  export type classeOrderByWithAggregationInput = {
    id_classe?: SortOrder
    libelle?: SortOrder
    _count?: classeCountOrderByAggregateInput
    _avg?: classeAvgOrderByAggregateInput
    _max?: classeMaxOrderByAggregateInput
    _min?: classeMinOrderByAggregateInput
    _sum?: classeSumOrderByAggregateInput
  }

  export type classeScalarWhereWithAggregatesInput = {
    AND?: classeScalarWhereWithAggregatesInput | classeScalarWhereWithAggregatesInput[]
    OR?: classeScalarWhereWithAggregatesInput[]
    NOT?: classeScalarWhereWithAggregatesInput | classeScalarWhereWithAggregatesInput[]
    id_classe?: IntWithAggregatesFilter<"classe"> | number
    libelle?: StringWithAggregatesFilter<"classe"> | string
  }

  export type creneaux_horaireWhereInput = {
    AND?: creneaux_horaireWhereInput | creneaux_horaireWhereInput[]
    OR?: creneaux_horaireWhereInput[]
    NOT?: creneaux_horaireWhereInput | creneaux_horaireWhereInput[]
    id_creneaux?: IntFilter<"creneaux_horaire"> | number
    heure_debut?: DateTimeFilter<"creneaux_horaire"> | Date | string
    heure_fin?: DateTimeFilter<"creneaux_horaire"> | Date | string
  }

  export type creneaux_horaireOrderByWithRelationInput = {
    id_creneaux?: SortOrder
    heure_debut?: SortOrder
    heure_fin?: SortOrder
  }

  export type creneaux_horaireWhereUniqueInput = Prisma.AtLeast<{
    id_creneaux?: number
    AND?: creneaux_horaireWhereInput | creneaux_horaireWhereInput[]
    OR?: creneaux_horaireWhereInput[]
    NOT?: creneaux_horaireWhereInput | creneaux_horaireWhereInput[]
    heure_debut?: DateTimeFilter<"creneaux_horaire"> | Date | string
    heure_fin?: DateTimeFilter<"creneaux_horaire"> | Date | string
  }, "id_creneaux">

  export type creneaux_horaireOrderByWithAggregationInput = {
    id_creneaux?: SortOrder
    heure_debut?: SortOrder
    heure_fin?: SortOrder
    _count?: creneaux_horaireCountOrderByAggregateInput
    _avg?: creneaux_horaireAvgOrderByAggregateInput
    _max?: creneaux_horaireMaxOrderByAggregateInput
    _min?: creneaux_horaireMinOrderByAggregateInput
    _sum?: creneaux_horaireSumOrderByAggregateInput
  }

  export type creneaux_horaireScalarWhereWithAggregatesInput = {
    AND?: creneaux_horaireScalarWhereWithAggregatesInput | creneaux_horaireScalarWhereWithAggregatesInput[]
    OR?: creneaux_horaireScalarWhereWithAggregatesInput[]
    NOT?: creneaux_horaireScalarWhereWithAggregatesInput | creneaux_horaireScalarWhereWithAggregatesInput[]
    id_creneaux?: IntWithAggregatesFilter<"creneaux_horaire"> | number
    heure_debut?: DateTimeWithAggregatesFilter<"creneaux_horaire"> | Date | string
    heure_fin?: DateTimeWithAggregatesFilter<"creneaux_horaire"> | Date | string
  }

  export type sallesWhereInput = {
    AND?: sallesWhereInput | sallesWhereInput[]
    OR?: sallesWhereInput[]
    NOT?: sallesWhereInput | sallesWhereInput[]
    id?: IntFilter<"salles"> | number
    code?: StringFilter<"salles"> | string
    capacite?: IntFilter<"salles"> | number
    disponible?: BoolNullableFilter<"salles"> | boolean | null
    created_at?: DateTimeNullableFilter<"salles"> | Date | string | null
  }

  export type sallesOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    capacite?: SortOrder
    disponible?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type sallesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: sallesWhereInput | sallesWhereInput[]
    OR?: sallesWhereInput[]
    NOT?: sallesWhereInput | sallesWhereInput[]
    capacite?: IntFilter<"salles"> | number
    disponible?: BoolNullableFilter<"salles"> | boolean | null
    created_at?: DateTimeNullableFilter<"salles"> | Date | string | null
  }, "id" | "code">

  export type sallesOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    capacite?: SortOrder
    disponible?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: sallesCountOrderByAggregateInput
    _avg?: sallesAvgOrderByAggregateInput
    _max?: sallesMaxOrderByAggregateInput
    _min?: sallesMinOrderByAggregateInput
    _sum?: sallesSumOrderByAggregateInput
  }

  export type sallesScalarWhereWithAggregatesInput = {
    AND?: sallesScalarWhereWithAggregatesInput | sallesScalarWhereWithAggregatesInput[]
    OR?: sallesScalarWhereWithAggregatesInput[]
    NOT?: sallesScalarWhereWithAggregatesInput | sallesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"salles"> | number
    code?: StringWithAggregatesFilter<"salles"> | string
    capacite?: IntWithAggregatesFilter<"salles"> | number
    disponible?: BoolNullableWithAggregatesFilter<"salles"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"salles"> | Date | string | null
  }

  export type utilisateursWhereInput = {
    AND?: utilisateursWhereInput | utilisateursWhereInput[]
    OR?: utilisateursWhereInput[]
    NOT?: utilisateursWhereInput | utilisateursWhereInput[]
    id?: IntFilter<"utilisateurs"> | number
    email?: StringFilter<"utilisateurs"> | string
    mot_de_passe?: StringFilter<"utilisateurs"> | string
  }

  export type utilisateursOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
  }

  export type utilisateursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: utilisateursWhereInput | utilisateursWhereInput[]
    OR?: utilisateursWhereInput[]
    NOT?: utilisateursWhereInput | utilisateursWhereInput[]
    mot_de_passe?: StringFilter<"utilisateurs"> | string
  }, "id" | "email">

  export type utilisateursOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
    _count?: utilisateursCountOrderByAggregateInput
    _avg?: utilisateursAvgOrderByAggregateInput
    _max?: utilisateursMaxOrderByAggregateInput
    _min?: utilisateursMinOrderByAggregateInput
    _sum?: utilisateursSumOrderByAggregateInput
  }

  export type utilisateursScalarWhereWithAggregatesInput = {
    AND?: utilisateursScalarWhereWithAggregatesInput | utilisateursScalarWhereWithAggregatesInput[]
    OR?: utilisateursScalarWhereWithAggregatesInput[]
    NOT?: utilisateursScalarWhereWithAggregatesInput | utilisateursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"utilisateurs"> | number
    email?: StringWithAggregatesFilter<"utilisateurs"> | string
    mot_de_passe?: StringWithAggregatesFilter<"utilisateurs"> | string
  }

  export type classeCreateInput = {
    libelle: string
  }

  export type classeUncheckedCreateInput = {
    id_classe?: number
    libelle: string
  }

  export type classeUpdateInput = {
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type classeUncheckedUpdateInput = {
    id_classe?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type classeCreateManyInput = {
    id_classe?: number
    libelle: string
  }

  export type classeUpdateManyMutationInput = {
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type classeUncheckedUpdateManyInput = {
    id_classe?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type creneaux_horaireCreateInput = {
    heure_debut: Date | string
    heure_fin: Date | string
  }

  export type creneaux_horaireUncheckedCreateInput = {
    id_creneaux?: number
    heure_debut: Date | string
    heure_fin: Date | string
  }

  export type creneaux_horaireUpdateInput = {
    heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type creneaux_horaireUncheckedUpdateInput = {
    id_creneaux?: IntFieldUpdateOperationsInput | number
    heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type creneaux_horaireCreateManyInput = {
    id_creneaux?: number
    heure_debut: Date | string
    heure_fin: Date | string
  }

  export type creneaux_horaireUpdateManyMutationInput = {
    heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type creneaux_horaireUncheckedUpdateManyInput = {
    id_creneaux?: IntFieldUpdateOperationsInput | number
    heure_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sallesCreateInput = {
    code: string
    capacite: number
    disponible?: boolean | null
    created_at?: Date | string | null
  }

  export type sallesUncheckedCreateInput = {
    id?: number
    code: string
    capacite: number
    disponible?: boolean | null
    created_at?: Date | string | null
  }

  export type sallesUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    disponible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sallesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    disponible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sallesCreateManyInput = {
    id?: number
    code: string
    capacite: number
    disponible?: boolean | null
    created_at?: Date | string | null
  }

  export type sallesUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    disponible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sallesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    disponible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateursCreateInput = {
    email: string
    mot_de_passe: string
  }

  export type utilisateursUncheckedCreateInput = {
    id?: number
    email: string
    mot_de_passe: string
  }

  export type utilisateursUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
  }

  export type utilisateursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
  }

  export type utilisateursCreateManyInput = {
    id?: number
    email: string
    mot_de_passe: string
  }

  export type utilisateursUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
  }

  export type utilisateursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type classeCountOrderByAggregateInput = {
    id_classe?: SortOrder
    libelle?: SortOrder
  }

  export type classeAvgOrderByAggregateInput = {
    id_classe?: SortOrder
  }

  export type classeMaxOrderByAggregateInput = {
    id_classe?: SortOrder
    libelle?: SortOrder
  }

  export type classeMinOrderByAggregateInput = {
    id_classe?: SortOrder
    libelle?: SortOrder
  }

  export type classeSumOrderByAggregateInput = {
    id_classe?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type creneaux_horaireCountOrderByAggregateInput = {
    id_creneaux?: SortOrder
    heure_debut?: SortOrder
    heure_fin?: SortOrder
  }

  export type creneaux_horaireAvgOrderByAggregateInput = {
    id_creneaux?: SortOrder
  }

  export type creneaux_horaireMaxOrderByAggregateInput = {
    id_creneaux?: SortOrder
    heure_debut?: SortOrder
    heure_fin?: SortOrder
  }

  export type creneaux_horaireMinOrderByAggregateInput = {
    id_creneaux?: SortOrder
    heure_debut?: SortOrder
    heure_fin?: SortOrder
  }

  export type creneaux_horaireSumOrderByAggregateInput = {
    id_creneaux?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type sallesCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    capacite?: SortOrder
    disponible?: SortOrder
    created_at?: SortOrder
  }

  export type sallesAvgOrderByAggregateInput = {
    id?: SortOrder
    capacite?: SortOrder
  }

  export type sallesMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    capacite?: SortOrder
    disponible?: SortOrder
    created_at?: SortOrder
  }

  export type sallesMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    capacite?: SortOrder
    disponible?: SortOrder
    created_at?: SortOrder
  }

  export type sallesSumOrderByAggregateInput = {
    id?: SortOrder
    capacite?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type utilisateursCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
  }

  export type utilisateursAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type utilisateursMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
  }

  export type utilisateursMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
  }

  export type utilisateursSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}