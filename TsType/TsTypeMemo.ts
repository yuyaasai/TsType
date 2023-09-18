// https://github.com/sindresorhus/type-fest/releases
import type {
    AbstractClass,
    AbstractConstructor,
    AsyncReturnType,
    Asyncify,
    CamelCase,
    CamelCasedProperties,
    CamelCasedPropertiesDeep,
    Class,
    ConditionalKeys,
    ConditionalPick,
    ConditionalPickDeep,
    Constructor,
    DelimiterCase,
    DelimiterCasedProperties,
    DelimiterCasedPropertiesDeep,
    EmptyObject,
    Entries,
    Entry,
    Exact,
    Except,
    Finite,
    FixedLengthArray,
    Float,
    Get,
    GlobalThis,
    HasOptionalKeys,
    HasReadonlyKeys,
    HasRequiredKeys,
    HasWritableKeys,
    Includes,
    Integer,
    InvariantOf,
    IsAny,
    IsBooleanLiteral,
    IsEmptyObject,
    IsEqual,
    IsLiteral,
    IsNever,
    IsNumericLiteral,
    IsStringLiteral,
    IsSymbolLiteral,
    IsUnknown,
    IterableElement,
    Join,
    JsonArray,
    JsonObject,
    JsonPrimitive,
    JsonValue,
    Jsonifiable,
    Jsonify,
    KebabCase,
    KebabCasedProperties,
    KebabCasedPropertiesDeep,
    LastArrayElement,
    LiteralToPrimitive,
    LiteralToPrimitiveDeep,
    Merge,
    MergeDeep,
    MergeExclusive,
    MultidimensionalArray,
    MultidimensionalReadonlyArray,
    Negative,
    NegativeFloat,
    NegativeInfinity,
    NegativeInteger,
    NonEmptyObject,
    NonNegative,
    NonNegativeInteger,
    OmitIndexSignature,
    Opaque,
    OptionalKeysOf,
    OverrideProperties,
    PackageJson,
    PartialDeep,
    PartialOnUndefinedDeep,
    PascalCase,
    PascalCasedProperties,
    PascalCasedPropertiesDeep,
    PickIndexSignature,
    PositiveInfinity,
    Primitive,
    Promisable,
    ReadonlyDeep,
    ReadonlyKeysOf,
    ReadonlyTuple,
    Replace,
    RequireAllOrNone,
    RequireAtLeastOne,
    RequireExactlyOne,
    RequireOneOrNone,
    RequiredDeep,
    RequiredKeysOf,
    Schema,
    ScreamingSnakeCase,
    SetNonNullable,
    SetOptional,
    SetReadonly,
    SetRequired,
    SetReturnType,
    Simplify,
    SnakeCase,
    SnakeCasedProperties,
    SnakeCasedPropertiesDeep,
    Split,
    Spread,
    StringKeyOf,
    Stringified,
    Tagged,
    TaggedUnion,
    Trim,
    TsConfigJson,
    TupleToUnion,
    TypedArray,
    UnionToIntersection,
    UnknownRecord,
    UnwrapOpaque,
    UnwrapTagged,
    ValueOf,
    Writable,
    WritableDeep,
    WritableKeysOf
} from "type-fest"

/*
### [【TypeScript】Utility Typesをまとめて理解する - Qiita](https://qiita.com/k-penguin-sato/items/e2791d7a57e96f6144e5)
まだ使い方調べていない
ThisParameterType
OmitThisParameter
ThisType<T>
### ChatGPT に聞いたカスタムユーティリティ型 (未検証)
ReadonlyArray<T>: 配列の要素を読み取り専用にします。
ReadonlyMap<K, V>: マップの要素を読み取り専用にします。
ReadonlySet<T>: セットの要素を読み取り専用にします。
InferType<T>: 条件型内で使用され、型 T から推論可能な型を取得します。
NonOptional<T>: 型 T からオプショナルなプロパティを除去します。
Defined<T>: 型 T から undefined を除去します。
TupleOf<T, N extends number>: 長さ N のタプル型を作成します。その各要素は型 T です。
AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }>: 型 T の少なくとも1つのプロパティが存在することを保証します。
type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];
RequireAtLeastOne<T, Keys extends keyof T = keyof T>: 型 T のうち指定されたキー Keys のうち少なくとも1つが存在することを保証します。
type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
       [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
     }[Keys]
UnionToIntersection<U>: ユニオン型 U を交差型に変換します。
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
Values<T>: 型 T のすべてのプロパティ値の型を取得します。
type Values<T> = T[keyof T];
OptionalKeys<T>: 型 T の中でオプショナルなプロパティのキーのみを抽出します。
type OptionalKeys<T> = { [K in keyof T]: T extends { [P in K]: T[K] } ? never : K }[keyof T];
RequiredKeys<T>: 型 T の中で必須のプロパティのキーのみを抽出します。
type RequiredKeys<T> = { [K in keyof T]: T extends { [P in K]: T[K] } ? K : never }[keyof T];
NonFunctionKeys<T>: 型 T の中で関数でないプロパティのキーのみを抽出します。
type NonFunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
FunctionKeys<T>: 型 T の中で関数であるプロパティのキーのみを抽出します。
type FunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
Getters<T>: 型 T の中で関数であるプロパティの戻り値の型を取得します。
type Getters<T> = { [K in FunctionKeys<T>]: ReturnType<T[K]> };
Setters<T>: 型 T の中で関数であるプロパティの引数の型を取得します。
type Setters<T> = { [K in FunctionKeys<T>]: Parameters<T[K]>[0] };
ElementType<T>: 配列型 T の要素の型を取得します。
type ElementType<T> = T extends (infer U)[] ? U : never;
ArgumentType<F>: 関数型 F の最初の引数の型を取得します。
type ArgumentType<F> = F extends (arg: infer A) => any ? A : never;
Proxify<T>: 型 T の各プロパティをプロキシ化します（各プロパティが関数であることを想定）。
type Proxify<T> = {
  [P in keyof T]: (...args: any[]) => Promise<ReturnType<T[P]>>
};
Flatten<T>: 入れ子になったオブジェクト型 T を平らな型に変換します。
type Flatten<T> = { [P in keyof T]: T[P] extends infer U ? U extends object ? Flatten<U> : U : never };

Expand<T>: 型 T を再帰的に展開します。これは交差型やユニオン型をより具体的な型に展開するのに有用です。
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
NoInfer<T>: 型 T を推論から除外します。これは条件型の中で特定の型の推論を防ぐのに有用です。
type NoInfer<T> = [T][T extends any ? 0 : never];
Merge<T, U>: 型 T と U をマージします。U のプロパティは T のプロパティを上書きします。
type Merge<T, U> = Omit<T, keyof U> & U;
MarkOptional<T, K extends keyof T>: 型 T の中で指定されたキー K のプロパティをオプショナルにします。
type MarkOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
MarkRequired<T, K extends keyof T>: 型 T の中で指定されたキー K のプロパティを必須にします。
type MarkRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

ReadonlyKeys<T>: 型 T の中で読み取り専用のプロパティのキーのみを抽出します。
type ReadonlyKeys<T> = { [K in keyof T]: IfEquals<{ -readonly [Q in K]: T[K] }, { [Q in K]: T[K] }, never, K> }[keyof T];
WritableKeys<T>: 型 T の中で書き込み可能なプロパティのキーのみを抽出します。
type WritableKeys<T> = { [K in keyof T]: IfEquals<{ -readonly [Q in K]: T[K] }, { [Q in K]: T[K] }, K, never> }[keyof T];
ConditionalKeys<T, Condition>: 条件型 Condition に一致する型 T のキーを抽出します。
type ConditionalKeys<T, Condition> = NonNullable<{ [K in keyof T]: T[K] extends Condition ? K : never }[keyof T]>;
*/

type S = string
type N = number
type B = boolean
type U = undefined
type D = Date
const RANDOM = Math.random()

///
///
/// TypeScript の学習メモ
///   型の学習は [type-challenges](https://github.com/type-challenges/type-challenges/blob/main/README.ja.md) が便利
///
///

/*
 * [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
 *   条件付き型 - L extends R ? T : F という構文は R が L に代入可能であれば T そうでなければ F という意味
 */

// T1 extends T2 ? TrueType : FalseType
//   T2 が T2 に割当可能であるときは TrueType となる
const a: S extends S | N ? "y" : "n" = "y"
const b: S | N extends S ? "y" : "n" = "n"
const c: { s: S; u: N } extends { s: S } ? "y" : "n" = "y"
const d: { s: S } extends { s: S; u: N } ? "y" : "n" = "n"

/* Conditional Type Constraints */
//   T は messageプロパティを持つが型は任意、messageプロパティの型を取り出す
//   unknown は any でもOK (だけど unknown のほうがいいかも、警告が出ないから)
//   unknown は any と同様に never 以外は代入可能で、読み取りは any と違い堅い
type MessageOf<T extends { message: U }> = T["message"]
const message: MessageOf<{ message: S }> = "string型に解決される"

// message プロパティがない場合は下記のエラーとなる
//   Type '{ x: any; }' does not satisfy the constraint '{ message: unknown; }'.
//   Property 'message' is missing in type '{ x: any; }' but required in type '{ message: unknown; }'.
const noMessage: MessageOf<{ x: any }> = 0

// message プロパティがない場合にエラーにしたくない場合は下記のようにする
type MessageOf2<T> = T extends { message: unknown } ? T["message"] : never
const never: MessageOf2<{}> = "never型に代入不可"

// Flatten
type Flatten<T> = T extends any[] ? T[number] : T
type DeepFlatten<T> = T extends any[] ? DeepFlatten<T[number]> : T
const flatten1: Flatten<[N]> = 0 // number型となる
const flatten2: Flatten<[N, [N]]> = Math.random() < 0.5 ? 1 : [2] // number | [number] 型となる
const df: DeepFlatten<[N, [N]]> = 0 // number型となる

/* Inferring Within Conditional Types */
//   T extends GenericT<infer U> ? U : T
//     U 型が推論可能であれば U 、そうでなければ T
type Flatten2<T> = T extends Array<infer U> ? U : T // Flatten と同じ

type Args<T extends (...a: any[]) => unknown> = T extends (...a: infer U) => any ? U : never
const at: Args<(s: S, n: N) => any> = ["", 1]

type ReturnType<T> = T extends (...args: never[]) => infer Return ? Return : never
const rt: ReturnType<() => number> = 123

/* Distributive Conditional Types 分散条件型 */
// 条件型がジェネリック型に作用する場合、共用体型が与えられると、条件型は分散型になる
type ToArray<T> = T extends unknown ? T[] : never
const sArrayOrNArray: ToArray<string | number> = [""] // string[] | number[] 型

// これを回避する場合はキーワードを角括弧で囲む
type ToArray2<T> = [T] extends [unknown] ? T[] : never
type sOrNError = ToArray2<string | number> // (string | number)[] 型

/*
 * [Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
 */
type Abc = { a: S; b: N; c: B }
type AbcKeys = keyof Abc // "a" | "b" | "c"
const abcKeys: AbcKeys[] = ["a", "b", "c", "c"]
const abcValues: Array<Abc[AbcKeys]> = ["", 1, 2, 3, true, false]

/*
 * [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
 */
type Def = { d?: S; e?: N; f?: B }
const defD: Def["d"] = "" // X 型のプロパティ s の型を取得、つまり S 型
const defEF: Def["e" | "f"] = [undefined, 1, true][RANDOM]

/*
 * [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
 */
const numMappedType: keyof { [key: N]: S } = 123 // number
const strMappedType: Array<keyof { [key: S]: S }> = ["", 0] // number or string
const symMappedType: keyof { [key: symbol]: S } = Symbol("x") // symbol

/* Mapping Modifiers: マッピング修飾子により readonly を付与/削除 したり optional/required に変更したりできる */
let inKeyof: { readonly [P in keyof Def]-?: Def[P] } = {} // -? によりオプショナルではなくなっているためエラー
inKeyof.b = true // readonlyにより代入できないためエラー: Cannot assign to 'b' because it is read-only property

// keyof T の型は PropertyKey 型であるため、PropertyKey には string | number | symbol が代入可能
//   だが文字列だけに絞り込みたいときは keyof T & string とすると良い
const strKeyOf1: keyof string = ([1, Symbol.iterator] as const)[RANDOM]
const strKeyof2: keyof string & string = 1 // エラー: number や symbol は代入不可

// Required (type Required<T> = { [P in keyof T]-?: T[P] }) と undefined の挙動
//   a と c は string 型しか受け入れられないためエラーとなる。
//   b が undefined を代入できるのに c が undefined を代入できないのが分かりにくい
const ru: Required<{ a?: S; b: S | U; c?: S | U }> = { a: undefined, b: undefined, c: undefined }

// Partial (type Partial<T> = { [P in keyof T]?: T[P] }) と undefined の挙動
//   a も b も c も undefined を代入できる
const ou: Partial<{ a: S; b: S | U; c: S | null }> = { a: undefined, b: undefined, c: undefined }

/*
 * as による キーの再マッピング
 */
type Getters<T> = { [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P] }
const getters: Getters<Def> = { getD: () => "" }

type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void
}
type SquareEvent = { kind: "square"; x: number; y: number }
type CircleEvent = { kind: "circle"; radius: number }
const config: EventConfig<SquareEvent | CircleEvent> = {
    square: (e: SquareEvent) => {},
    circle: (e: CircleEvent) => {}
}

/*
 * [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
 */
type PropEventSource<Type> = {
    on: <Key extends string & keyof Type>(
        eventName: `${Key}Changed`,
        callback: (newValue: Type[Key]) => void
    ) => void
}
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>
const person = makeWatchedObject({ name: "ceo", age: 26 })
person.on("ageChanged", (newValue: N) => {})
person.on("nameChanged", (newValue: N) => {}) // newValue は N 型であるためエラー

/*
 * never による網羅性のチェック
 */
type Animal1 = "dog" | "cat"
function getCry(a: Animal1) {
    if (a === "dog") return "wan"
    if (a === "cat") return "nya-n"
    const _exhaustiveCheck: never = a // a は never 型に狭められるため静的エラーにならない
    throw new Error()
}

type Animal2 = "dog" | "cat" | "bird"
function getCry2(a: Animal2) {
    if (a === "dog") return "wan"
    if (a === "cat") return "nya-n"
    // a は "bird" 型に狭められるため静的エラーとなる
    const _exhaustiveCheck: never = a // エラー: Type 'string' is not assignable to type 'never'
    throw new Error()
}

///
///
/// [組み込み型のユーティリティ型](https://www.typescriptlang.org/docs/handbook/utility-types.html)
///
///

// NonNullable<T> = T & {}
const b001: NonNullable<S | U | null> = ""
// Partial<T> = { [P in keyof T]?: T[P] }
const b002: Partial<{ a: S; b: { c: N } }> = {} // { a?: S; b?: { c: N } }
// Required<T> = { [P in keyof T]-?: T[P] }
const b003: Required<{ d?: { e?: N } }> = { d: {} }
// Readonly<T> = { readonly [P in keyof T]: T[P] }
const b004: Readonly<{ f: N }> = { f: 1 }
// Record<K extends keyof any, T> = { [P in K]: T } - propertyの型を指定したT型にする
//   { [P in K]: T } は mapped (object) type という
//   ※ { [key: P]: T } は index signature parameter type で別物
const b005: Record<S, N> = { a: 1, b: 2, c: "3" } // エラー: c が number ではない
const b006: Record<1 | "a", S[]> = { 1: ["0"], a: ["A"] } // 1 も "a" も省略不可 (Partialで囲めば可)
// Pick<T, K extends keyof T> = { [P in K]: T[P] } - Tのプロパティから K で指定したのプロパティを抽出
const b007: Pick<{ a: N; b: N; c: N }, "b" | "c"> = { b: 1, c: 2 } // OK: a は指定不可
// Exclude<T, U> = T extends U ? never : T - (union型の)Tから(union型の)Uを除去
const b008: Exclude<S | N | D | U, D | U> = "D と U が除去され string | number になる"
// Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>> - type-fest:Except はこれの厳密版
const b009: Omit<{ a: N; b: N }, "b" | "c"> = { a: 1 } // OK: b は指定不可 ("c" は存在しないため無視される。type-fest:Except を使うとエラーになる)
// Extract<T, U> = T extends U ? T : never - Union型をインターセクト
const b010: Extract<S | N | B, N | B | D> = ([1, true] as const)[RANDOM] // OK: number | boolean 型
// ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
const b011: ReturnType<() => S | N> = ([1, ""] as const)[RANDOM] // OK: string | number 型
// Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never - 関数の引数の型をタプルとして取得
const b012: Parameters<(a: S, b: N) => void> = ["", 1] // OK: [string, number] 型
const b013: Parameters<(a: S, b: N) => void> = [1, ""] // エラー
// Awaited<T>: (ネストされた) Promise型から結果の型を取り出す
const b014: Awaited<Promise<N>> = 1 // OK: number 型
const b015: Awaited<Promise<Promise<S>>> = "" // OK: string 型
const b016: Awaited<S> = "" // OK: string 型

class Foo {
    d: S
    n: N
    constructor(d: S, n: N) {
        this.d = d
        this.n = n
    }
}
// ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never
const ctp: ConstructorParameters<typeof Foo> = ["", 1]
// InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any
const objType: InstanceType<typeof Foo> = { d: "", n: 1 }

/*
 * Intrinsic String Manipulation Types (TypeScript 4.1以降)
 */
const FOOBAR: Uppercase<"foo bar"> = "FOO BAR"
const foobar: Lowercase<"FOO BAR"> = "foo bar"
const FooBAr: Capitalize<"foo bar"> = "Foo bar" // 最初の文字 "f" だけ大文字に (途中の空白があっても先頭だけ)
const fOObAR: Uncapitalize<"FOO BAR"> = "fOO BAR" // 最初の文字 "F" だけ小文字に

///
///
/// カスタムユーティリティ型 (の例)
///
///

// null または undefined または optional であるキーのユニオン型
type NullableKeys<T> = {
    [K in keyof T]: undefined extends T[K] ? K : null extends T[K] ? K : never
}[keyof T]
let nk: NullableKeys<{ a: N | U; b: N | null; c?: N; d: N }> = (["a", "b", "c"] as const)[RANDOM]
nk = "d" // エラー: d は代入不可

// 再帰的な Partial, Readonly, Writable - Writable は type-fest に存在する。 PartialDeep, ReadonlyDeep, WritableDeep も type-fest に存在する
type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> }
const rp: RecursivePartial<{ a: { b: D } }> = { a: {} } // OK
if (rp.a != null) rp.a.b = { getTime: () => 0 } // エラーにならない！ type-fest:PartialDeep は対策されている

type Immutable<T> = { readonly [P in keyof T]: Immutable<T[P]> } // type-fest:ReadonlyDeep にほぼ同じ
type Mutable<T> = { -readonly [P in keyof T]: Mutable<T[P]> } // type-fest:WritableDeep にほぼ同じ

// 厳密なOmit: type-fest:Exceptとほぼ同じ
type StrictOmit<T, K extends keyof T> = Omit<T, K>

// Promise<T> 型から T 型 を取り出す - 組み込みのAwaitedを使おう
type ExtractPromise<T> = T extends PromiseLike<infer U> ? U : never
const ep: ExtractPromise<Promise<"foobar">> = "foobar"

// 非同期関数の戻り値の型 Promise<T> 型 から T 型 を取り出す - type-fest の AsyncReturnType を使おう
type GetAsyncReturnType<T extends (...args: any[]) => Promise<any>> = ExtractPromise<ReturnType<T>>
const gar: GetAsyncReturnType<() => Promise<"foobar">> = "foobar"

///
///
/// その他、Tips
///
///

// `& object` により、型がオブジェクトであることを保証する
const maybeObj: { length: number } = "" // リテラルが代入できてしまう
const mustObj: { length: number } & object = "" // これはエラーになるので期待通り

///
///
/// TypeScript の新機能で型に関するもの
///
///

// 3.7: asserts - **戻り値なしの関数** が正常終了した (throwしない) 場合、引数の型がその型であると見なす (is と似ている)
//      arrow function で書くとエラーになるので注意
function assertTest(v: unknown): asserts v is string {
    if (typeof v !== "string") throw new Error(`v must be string`)
}
const assertTestVal: unknown = "VALUE"
assertTest(assertTestVal)
assertTestVal.at(0) // string 型として扱える

// 4.9: satisfies - 宣言時の型を指定しつつ、型推論の結果が実際の型として残る
const regExpDesc = {
    test: "引数が正規表現にマッチするかテスト"
} satisfies { [K in keyof RegExp]?: string }
regExpDesc.test.at(0) // satisfies で指定した型では test?: string だが、型推論の結果が残っているため test: string となる (string | undefined ではない)
regExpDesc.exec.at(0) // エラー: Property 'exec' does not exist on type '{ test: string; flags: string; }'
regExpDesc.flags = "エラー: 型推論時に存在しないプロパティを後から追加できない"

///
///
/// type-fest (npm install type-fest)
///
///

/*
 * type-fest: Basics
 */
const primitive: Primitive = [null, undefined, "", 0, true, Symbol(""), 0n][RANDOM]
const typedArr: TypedArray = new Uint8ClampedArray() // XxxArray系の型ユニオン
const cls: Class<{ x: S }, [S]> = class {
    x: S
    constructor(x: S) {
        this.x = x
    }
}
const ctor: Constructor<{ x: S }, [S]> = cls
abstract class AbstractCls {
    x: S
    constructor(x: S) {
        this.x = x
    }
}
const abstractCls: AbstractClass<{ x: S }, [S]> = AbstractCls
const abstractCtor: AbstractConstructor<{ x: S }, [S]> = AbstractCls

/*
 * type-fest: Utilities
 */

// EmptyObject: 空オブジェクト
let emptyObj: EmptyObject = {} // OK
emptyObj.a = null // エラー: Property 'a' does not exist on type 'EmptyObject'
emptyObj = { a: undefined } // エラー

// ※ EmptyObject を使わない場合
let defaultEmptyObj = {}
defaultEmptyObj = { a: undefined, b: 1, c: "" } // エラーにならない！
defaultEmptyObj.b = 1 // エラー: Property 'b' does not exist on type '{}'

// IsEmptyObject
const isObj1Empty: IsEmptyObject<typeof emptyObj> = true

// NonEmptyObject - プロパティは1つ以上必須 (RequireAtLeastOne と違ってキーは指定不可)
let nonEmpty: NonEmptyObject<{ a: N; b?: N; c?: N }> = { a: 1 } // OK
nonEmpty = { b: 2 } // エラー

// Except: 厳密なOmit - 下記の "x" は存在しないためエラーとなる
const except: Except<{ a: N; b: N }, "b" | "x"> = {
    a: 1,
    b: 2 // "b" は除外されているためエラーとなる
}

// Writable
const writable: Writable<ReadonlyDeep<{ a: N; b: { c: N } }>> = { a: 1, b: { c: 2 } }
writable.a = 3 // OK - 書き込めるようになっている
writable.b.c = 4 // ネストされたプロパティは readonly のままなので エラー

// WritableDeep
const wDeep: WritableDeep<ReadonlyDeep<{ a: N; b: { c: N } }>> = { a: 1, b: { c: 2 } }
wDeep.b.c = 2 // OK

// Merge: 型のマージ
const mg1: Merge<{ a: string; b: string }, { b: number; c: number }> = {
    a: "",
    b: "", // エラー: Type 'string' is not assignable to type 'number ※ & で型を結合した場合、never型となる
    c: 0
}
const mg2: Merge<{ d: { e: string } }, { d: { f: number } }> = {
    d: {
        e: "", // エラー: プロパティeは型に含まれない ※ & で型を結合した場合、エラーにならない
        f: 0
    }
}

// MergeDeep: 再帰的な型のマージ
const mgd: MergeDeep<{ d: { e: S; g: S } }, { d: { e: N; f: N } }> = {
    d: { e: 0, f: 0, g: "" } // エラーにならない, MergeDeepのかわりに & を使うと e が never となる
}

// MergeExclusive<A, B>: AとBのobject型の相互のキーを排他的に持つ
let mergeExclusive: MergeExclusive<{ a: S; b: S }, { b: N; c: N }>
mergeExclusive = { a: "", b: "" }
mergeExclusive = { b: 10, c: 20 }
mergeExclusive = { b: "", c: 20 } // エラー
mergeExclusive = { a: "", b: 10 } // エラー
mergeExclusive = { b: "" } // エラー
mergeExclusive = { a: "", b: "", c: 20 } // エラー

// OverrideProperties<A, B>: Aのプロパティの型をBのプロパティの型に変更する。
//   Mergeでも同じことはできるが、これは B は A に無いプロパティを持てない制限がある
const op1: OverrideProperties<{ a: N; b: N }, { b: S }> = { a: 0, b: "" }
const op2: OverrideProperties<{ a: N; b: N }, { b: S; c: S }> = { a: 0, b: "" } // c は左辺に存在しないのでエラー

// RequireAtLeastOne<T, プロパティ名のユニオン型>: 指定したプロパティを最低1つ必須とする
let requireAtLeastOne: RequireAtLeastOne<{ a?: N; b?: N; c: N }, "a" | "b">
requireAtLeastOne = { c: 1 } // エラー: a か b のどちらか1つは必須
requireAtLeastOne = { a: 1, b: 1 } // エラー: c は optional ではないので必須
requireAtLeastOne = { a: 1, c: 1 } // OK
requireAtLeastOne = { a: 1, b: 1, c: 1 } // OK

// RequireExactlyOne<T, プロパティ名のユニオン型>: 指定したプロパティからただ1つ指定する必要がある
let requireExactlyOne: RequireExactlyOne<{ a?: N; b?: N; c: N }, "a" | "b">
requireExactlyOne = { a: 1, c: 1 } // OK
requireExactlyOne = { a: 1 } // エラー: c は optional ではないので必須
requireExactlyOne = { c: 1 } // エラー: a か b のどちらか1つは必須
requireExactlyOne = { a: 1, b: 1, c: 1 } // エラー: a と b を両方指定するとNG

// RequireAllOrNone<T, プロパティ名のユニオン名>: 指定したプロパティをすべて指定するか、1つも指定しない
let requireAllOrNone: RequireAllOrNone<{ a: N; b: N; c: N }, "a" | "b">
requireAllOrNone = { c: 1 } // a も b も指定していないのでOK (a と b は optional になる)
requireAllOrNone = { a: 1, c: 1 } // エラー: a を指定している場合は b も必須となる
requireAllOrNone = { a: 1, b: 1, c: 1 } // a と b をすべて指定しているのでOK

// RequireOneOrNone<T, プロパティ名のユニオン型>: 指定したプロパティを1つだけ指定するか、1つも指定しない
let requireOneOrNone: RequireOneOrNone<{ a: N; b: N; c: N }, "a" | "b">
requireOneOrNone = { c: 1 } // a も b も指定していないのでOK (a と b は optional になる)
requireOneOrNone = { a: 1, c: 1 } // OK
requireOneOrNone = { b: 1, c: 1 } // OK
requireOneOrNone = { a: 1, b: 1, c: 1 } // エラー: a と b を両方指定するとNG

// RequiredDeep: 再帰的な Required
const requiredDeep: RequiredDeep<{ a?: N; b?: { c?: N } }> = { a: 1, b: { c: 1 } }

// OmitIndexSignature<ObjectType>: IndexSignatureを除去
const ois: OmitIndexSignature<{ [key: S]: N; a: N }> = { a: 1, b: 1 } // エラー: 明示的に指定した a のみ残る

// PickIndexSignature<ObjectType>: IndexSignatureのみ残す？使い方がわからん, tsconfigによっては使えんのかも
const pis1: PickIndexSignature<{ [key: S]: N; a: N }> = { a: 1 } // 通らないかと思ったらこれは通る。使い方がよくわからない…

// PartialDeep: 再帰的にオプショナルプロパティにするが、
//   Date型などの内部のプロパティには影響しない
const pd1: PartialDeep<{ a: D; b: { c: N } }> = {}
const pd3: PartialDeep<{ a: D; b: { c: N } }> = { a: undefined } // undefined が付与されるので注意
const pd2: PartialDeep<{ a: D; b: { c: N } }> = { b: {} }

// PartialOnUndefinedDeep: 再帰的に、オプショナルプロパティまたはundefinedを含むユニオン型を
//   オプショナルプロパティかつundefinedを含むユニオン型に変換する。難しいな。
let pud: PartialOnUndefinedDeep<{ a: { b?: N; c: N | U; d: N } }> = {} // エラー: a はそのまま！
pud = { a: { b: undefined, d: 1 } } // OK: b も c も optional かつ undefined を指定可能に。d はそのままなので N 型の値を指定必須

// ReadonlyDeep<T>: object/Map/Set/Arrayを再帰的に読み取り専用にする
const rod: ReadonlyDeep<{ a: N[]; m: Map<N, N> }> = { a: [], m: new Map<N, N>() }
rod.a.push(1) // エラー: readonly なので push は無い
rod.m.set(2, 3) // エラー: readonly なので set は無い

// Tagged (Opaque): 実行時の型は同じだが、静的には異なる型を定義できる
// UnwrapTagged (UnwrapOpaque): Opaque型を実際の型に戻す
type MyOpaque = Opaque<"foo" | "bar", "型を区別するための文字列">
const myOpaque: MyOpaque = "foo" // エラー: 実行時は単にstring型だが静的に区別される
const unwrapOpaque: UnwrapOpaque<typeof myOpaque> = (["foo", "bar"] as const)[RANDOM]
type MyTagged = Tagged<"foo" | "bar", "Better Opaque らしいが違いは理解していない">
const myTagged: MyTagged = "foo" // エラー: 実行時は単にstring型だが静的に区別される
const unwrapTagged: UnwrapTagged<typeof myTagged> = (["foo", "bar"] as const)[RANDOM]

// InvariantOf: 不変型を作成する
class Animal {}
class Cat extends Animal {
    meow(): void {}
}
const cats = [new Cat()] as Array<InvariantOf<Cat>>
const animals: Array<InvariantOf<Animal>> = cats // エラー: animalsが普通の配列だと共変性のためこれがエラーにならない

// SetOptional<Base, Keys extends keyof Base>: 指定したキーをオプショナルにする
const so: SetOptional<{ a: N; b?: N; c: S; d?: S }, "a" | "b"> = { c: "" } // OK: 必須なのは c のみ
// SetReadonly<BaseType, Keys extends keyof BaseType>: 指定したキーをreadonlyにする
const setReadonly: SetReadonly<{ a: N; b?: N; c: N }, "a" | "b"> = { a: 1, b: undefined, c: 3 }
setReadonly.a = 0 // エラー
setReadonly.b = 2 // エラー
setReadonly.c = 4 // OK
// SetRequired<Base, Keys extends keyof Base>: 指定したキーを必須にする
const sr: SetRequired<{ a: N; b?: N | U; c: S }, "a" | "b"> = { a: 1, b: undefined, c: "" } // エラー: b は number を指定する必要がある
// SetNonNullable<Base, Keys extends keyof Base>: 指定したキーからnull/undefinedを除去 (optionalはそのまま維持されるため、その場合undefinedが除去されない)
let sn: SetNonNullable<{ a?: N | null | U; b: N | null | U }, "a" | "b">
sn = { b: 1 } // OK
sn = { b: null } = { b: undefined } // エラー
sn = { a: undefined, b: 1 } // OK: a の undefined は残る。ここがわかりにくい
sn = { a: null, b: 1 } // エラー: a に null は入らない

// ValueOf<Obj, Value extends keyof Obj>: 指定したキーの型を取り出す
let valOf: ValueOf<{ a: N; b: S; c: B }, "b" | "c"> = ["", true][1] // OK
valOf = 1 // N型は代入不可

// ConditionalKeys<Obj, キーの型>: キーの型にマッチするキーを取り出す。使い所がよくわからない
let ck1: ConditionalKeys<{ a: N; b: N; c: S; d?: N }, N> = (["a", "b"] as const)[RANDOM] // OK
ck1 = "c" // エラー
ck1 = "d" // エラー
let ck2: ConditionalKeys<{ a?: S | U; b: N; c: U; d: N | U }, N | U>
ck2 = "a" // エラーになるけどよくわからない
ck2 = (["b", "c", "d"] as const)[RANDOM] // OK

// ConditionalPick<Obj, キーの型>: キーの型にマッチするキーを含むオブジェクトの型を作る
//   メソッドを含むオブジェクトから値だけのオブジェクトに変換したいときなど便利
const cp: ConditionalPick<{ a: N; b: S; c: () => B }, Primitive> = { a: 1, b: "" }

// ConditionalPickDeep<Obj, キーの型, {condition: 'equality' | 'extends'}>: ConditionalPickの再帰版
let cpd1: ConditionalPickDeep<{ a: { b: S | U; c?: S; d: S } }, S>
cpd1 = { a: { d: "" } } // OK
cpd1 = { a: { b: "", d: "" } } // エラー: d 以外はない

let cpd2: ConditionalPickDeep<{ a: { b: S | U; c?: S; d: S } }, S | U>
cpd2 = { a: { d: "" } } // エラー: b は必須
cpd2 = { a: { b: undefined, c: "", d: "" } } // OK

let cpd3: ConditionalPickDeep<
    { a: { b: S | U; c?: S; d: S } },
    S | U,
    { condition: "equality" } // "equality" オプションで、ユニオン型までキーが一致したらpick
>
cpd3 = { a: { b: "" } } // OK
cpd3 = { a: { b: "", c: "" } } // OK
cpd3 = { a: { b: "", d: "" } } // エラー: d は optional型ではないためpickされない

// UnionToIntersection<Union>: ユニオン型を合成
const uti: UnionToIntersection<{ foo: S } | { bar: () => N }> = { foo: "", bar: () => 2000 }

// LiteralToPrimitive: リテラル型を属するプリミティブ型に変換
const plus = <T extends S | N | bigint>(x: T, y: T): LiteralToPrimitive<T> => x + (y as any) // eslint-disable-line @typescript-eslint/restrict-plus-operands
const [plusS, plusN, plusBigint] = [plus("a", "b"), plus(1, 2), plus(1n, 2n)] as const
const ltpS: IsEqual<S, typeof plusS> = true // 戻り値の型を
const ltpN: IsEqual<N, typeof plusN> = true // 引数の型により
const ltpBigint: IsEqual<bigint, typeof plusBigint> = true // 正しい型に振り分けられる

// LiteralToPrimitiveDeep: 再帰的なLiteralToPrimitiveだが内容は理解していない
const lpdText = (json: LiteralToPrimitiveDeep<{ a: S; b: { c: B } }>): void => {
    void json
}

// Stringified<Obj>: オブジェクトの全てのプロパティの型を string にする
const stringified: Stringified<{ a: S; b: N; c: B }> = { a: "", b: "", c: "" }

// IterableElement<Iterable>: Iterable(配列やジェネレータなど)の要素の型を取得
const iterable1: IterableElement<Array<{ a: N }>> = { a: 1 }
const iterable2: IterableElement<Map<S, N>> = ["", 1]
async function* iterable3Test() {
    yield 1
}
const iterable3: IterableElement<ReturnType<typeof iterable3Test>> = 1

// Entries<T>: T.entries の戻り値の型を取得
const entries: Entries<Map<S, N>> = [["", 1]]
// Entry<T>: T.entries の戻り値の配列の中の型を取得
const entry: Entry<Map<S, N>> = ["", 1]

// SetReturnType<Fn extends (...args_: any[]) => any, TypeToReturn>: 関数の戻り値型を違う型にする
const setReturnType: SetReturnType<typeof isNaN, S> = (num: number) => ""

// Simplify<T>: エディタで表示される型ヒントをシンプルにして見やすくする
const simplify: Simplify<{ a?: N; b?: S } & { c?: B; d?: D }> = {} // 変数にマウスを合わせるとシンプルになっている

// Get<Base, Path, Option>: キーパス (XPath的なもの) で指定したプロパティの値を取得
const get: Get<{ a: { b: Array<{ c: N }> } }, "a.b[0].c"> = [1, undefined][RANDOM]

// StringKeyOf<Base>: オブジェクトのキーを文字列のユニオン型で取得
const stringKeyOf: StringKeyOf<{ a: N; 1: S }> = (["a", "1"] as const)[RANDOM]

// Schema<Obj, Value>: オブジェクトのキーを再帰的に、別の型に置き換える
// プロパティ値が再帰的に指定された値型に置き換えられる、別のオブジェクト型のディープ・バージョンを作成します。
// 使用例1: フォームのバリデーション： 各フィールドがどのようにバリデートされるべきかを定義する。
// 使用例2: フォーム設定： 入力フィールドの設定を定義する。
// 使用例3: 解析： 特定のフィールドに対する特別な動作を指定する型を定義する。
const schema: Schema<{ a: N; b: { c: S } }, "foo" | "bar"> = { a: "foo", b: { c: "bar" } }

// Exact<Parameter, Input>: 余分なプロパティを許可しない型を作成
const exactTest = <T extends Exact<{ a: N }, T>>(arg: T) => {}
const exactTestArg = { a: 1, b: 2 }
exactTest(exactTestArg) // エラー
exactTest({ a: 1 }) // OK
exactTest(exactTestArg as { a: N }) // OK

// OptionalKeysOf<Obj>: オプショナルプロパティのキーを取得
const oko: OptionalKeysOf<{ a: N | U | null; b?: N; c?: N }> = (["b", "c"] as const)[RANDOM]

// HasOptionalKeys<Obj>: オプショナルプロパティがあるかどうか判定
const hok2: HasOptionalKeys<{ a?: N }> = true
const hok1: HasOptionalKeys<{ a: N }> = false

// RequiredKeysOf<Base>: 必須プロパティのキーを取得
const rko: RequiredKeysOf<{ a: N; b: N; c?: N }> = (["a", "b"] as const)[RANDOM]

// HasRequiredKeys<Obj>: 必須プロパティがあるかどうか判定
const hasRequiredKeys1: HasRequiredKeys<{ a: N }> = true
const hasRequiredKeys2: HasRequiredKeys<{ a?: N }> = false
// HasReadonlyKeys<Obj>: 読み取り専用プロパティがあるかどうか判定
const hasReadonlyKeys1: HasReadonlyKeys<{ a: N }> = false
const hasReadonlyKeys2: HasReadonlyKeys<{ readonly a: N }> = true
// HasWritableKeys<Obj>: 書き込み可能プロパティがあるかどうか判定
const hasWritableKeys1: HasWritableKeys<{ a: N }> = true
const hasWritableKeys2: HasWritableKeys<{ readonly a: N }> = false

// ReadonlyKeysOf<Obj>: 読み取り専用プロパティのキーを取得
const readonlyKeyOf: ReadonlyKeysOf<{ readonly a: N; b: N }> = "a"

// WritableKeysOf<Obj>: 書き込み可能プロパティのキーを取得
const writableKeysOf: WritableKeysOf<{ readonly a: N; b: N }> = "b"

// Spread<First, Second>: スプレッド構文で出来る型を作成
const spread: Spread<{ a: N; b: N }, { b: S; c: S }> = { ...{ a: 1, b: 1 }, ...{ b: "", c: "" } }

// IsEqual<A, B>: AとBが等しいかどうか判定
const isEqual1: IsEqual<S, N> = false
const isEqual2: IsEqual<S, S> = true

// TaggedUnion<TagKey, UnionMembers>: タグ付きユニオンを簡潔に記述するためのユーティリティ
let x: TaggedUnion<
    "type",
    {
        change: { value: string; time: Date }
        click: { time: Date }
    }
> = { type: "change", value: "", time: new Date() }
x = { type: "click", time: new Date() }

// UnknownRecord = Record<PropertyKey, unknown>: 不明なプロパティを持つオブジェクト型
const ur: Simplify<UnknownRecord> = { foo: "bar" }

/*
 * type-fest: Type Guard
 */
// IsLiteral<T>: リテラル型かどうか判定
const isLiteral1: IsLiteral<"foo"> = true
const isLiteral2: IsLiteral<12345> = true
const isLiteral3: IsLiteral<string> = false
const isLiteral4: IsLiteral<"foo" | "bar"> = true
const isLiteral5: IsLiteral<"foo" | 2000> = false // 異なる型を組み合わせたユニオンはfalseになる
const isLiteral6: IsLiteral<"foo" | false> = false // 異なる型を組み合わせたユニオンはfalseになる
// IsStringLiteral<T>: 文字列リテラル型かどうか判定
const isStringLiteral1: IsStringLiteral<"text"> = true
const isStringLiteral2: IsStringLiteral<string> = false
// IsNumericLiteral<T>: 数値リテラル型かどうか判定
const isNumericLiteral1: IsNumericLiteral<123456> = true
const isNumericLiteral2: IsNumericLiteral<number> = false
// IsBooleanLiteral: ブールリテラル型かどうか判定
const isBooleanLiteral1: IsBooleanLiteral<true> = true
const isBooleanLiteral2: IsBooleanLiteral<boolean> = false
// IsSymbolLiteral: シンボルリテラル型かどうか判定
const mySymbol = Symbol("x")
const isSymbolLiteral1: IsSymbolLiteral<typeof mySymbol> = true
const isSymbolLiteral2: IsSymbolLiteral<symbol> = false
// IsAny: any型かどうか判定
const isAny1: IsAny<any> = true
const isAny2: IsAny<unknown> = false
// IsNever: never型かどうか判定
const isNever1: IsNever<never> = true
const isNever2: IsNever<any> = false
// IsUnknown: unknown型かどうか判定
const isUnknown1: IsUnknown<unknown> = true
const isUnknown2: IsUnknown<any> = false

/*
 * type-fest: JSON
 */
// type JsonPrimitive = string | number | boolean | null;
const jsonPrimitive: JsonPrimitive = (["", 1, true, null] as const)[RANDOM] // OK - 入らないのは undefined
// type JsonObject = {[Key in string]: JsonValue} & {[Key in string]?: JsonValue | undefined};
const jsonObject: JsonObject = { foo: "bar" }
// type JsonArray = JsonValue[] | readonly JsonValue[];
const jsonArray: JsonArray = ["foo", "bar"]
// type JsonValue = JsonPrimitive | JsonObject | JsonArray;
const jsonValue1: JsonValue = ([jsonPrimitive, jsonObject, jsonArray] as const)[RANDOM]
const jsonValue2: JsonValue = new Date() // エラー
// Jsonify<T>: T型 を (objectであれば再帰的に) JsonValue型 に変換可能な型に変換
const jsonify1: IsEqual<Jsonify<Date>, string> = true
const jsonify2: IsEqual<Jsonify<{ toJSON: () => S | N }>, S | N> = true // toJSON 関数がある場合はその戻り値の型となる
const jsonify3: IsEqual<Jsonify<undefined>, never> = true
const jsonify4: IsEqual<Jsonify<undefined[]>, null[]> = true
const jsonify5: IsEqual<Jsonify<symbol>, never> = true
const jsonify6: IsEqual<Jsonify<symbol[]>, null[]> = true
const jsonify7: IsEqual<Jsonify<any>, any> = true
const jsonify8: IsEqual<Jsonify<any[]>, any[]> = true
const jsonify9: IsEqual<Jsonify<unknown>, never> = true
const jsonifyA: IsEqual<Jsonify<unknown[]>, never[]> = true
const jsonifyB: IsEqual<Jsonify<never>, never> = true
const jsonifyC: IsEqual<Jsonify<never[]>, never[]> = true
const jsonifyD: IsEqual<Jsonify<() => any>, never> = true
const jsonifyE: IsEqual<Jsonify<[]>, []> = true
const jsonifyF: IsEqual<Jsonify<PositiveInfinity | NegativeInfinity>, null> = true
const jsonifyG: IsEqual<Jsonify<Map<any, any> | Set<any>>, EmptyObject> = true
const jsonifyH: IsEqual<Jsonify<TypedArray>, Record<string, number>> = true
const jsonifyI: IsEqual<Jsonify<{ x: N | U }>, { x?: N }> = true
const jsonifyJ: Jsonify<{ x: U }> = { a: 1, b: "" } // '{}' 型になる (EmptyObject型にはしてくれない)
const jsonifyK: IsEqual<Jsonify<Error>, { name: S; message: S; stack?: S }> = true // Errorはこうなるのか…
const jsonifyL: IsEqual<Jsonify<{ x: () => string; dummy: S }>, { dummy: S }> = true
// Jsonifiable: JSONに可逆変換可能な型 (Jsonify<T> で never になる型は代入不可)
let jsonifiable: Jsonifiable = { toJSON: () => 1 } // OK
jsonifiable = { toNotJSON: () => 1 } // エラー
jsonifiable = () => 1 // エラー
jsonifiable = Symbol("foo") // エラー
jsonifiable = new Map<S, N>() // エラー
jsonifiable = { map: new Map<S, N>() } // エラー
jsonifiable = undefined // エラー
jsonifiable = { x: undefined } // OK: これは通るので注意

/*
 * type-fest: Async
 */
// type Promisable<T> = T | PromiseLike<T>: awaitできる型
const promisable: Promisable<N> = [0, Promise.resolve(0)][RANDOM]
// AsyncReturnType<T>: 非同期関数の戻り値のPromiseの中の型を取得
const asyncReturnType: AsyncReturnType<() => Promise<N>> = 1
// Asyncify<Fn>: 非同期バージョンの関数定義を取得
const asyncify: Asyncify<(num: N) => N> = async (num: N) => await Promise.resolve(num)

/*
 * type-fest: String
 */
// Trim<StringLiteral extends string>: 文字列のトリム
const trim: Trim<" \t\vfoo　\n"> = "foo"
// Split<S extends string, Delimiter extends string>: 文字列分割
const split: Split<"foobar", "o"> = ["f", "", "bar"]
// Replace<Input extends S, Search extends S, Replacement extends S, Options>: 文字列置換
const replace1: Replace<"foobar", "o", "#"> = "f#obar" // cspell: disable-line
const replace2: Replace<"foobar", "o", "#", { all: true }> = "f##bar"

/*
 * type-fest: Array
 */
// Includes<Array, Literal>: 配列に含まれるかどうか
const includes1: Includes<["a", 1 | null], "a"> = true
const includes2: Includes<["a", 1 | null], 1> = false
const includes3: Includes<["a", 1 | null], 1 | null> = true
// Join<Array, Delimiter>: 配列の結合
const join1: Join<["a", 1, true, 2n, null, undefined], ", "> = "a, 1, true, 2, , "
const join2: Join<[S, "+", N], " "> = "任意の文字列 + 123" // `${string} + ${number}` 型になる
// LastArrayElement<Array extends readonly unknown[]>: 配列の最後の要素の型を取得
const lastArrayElement: LastArrayElement<[S, D, B | N]> = ([true, 0] as const)[RANDOM]
// FixedLengthArray<T, Length>: 固定長の配列を作成
const fixedLengthArray: FixedLengthArray<N, 2> = [1, 2] // OK: 要素数が1や3だとエラーになる
fixedLengthArray.push(3) // エラー: 要素の数が変わるメソッドはエラーになる (実行時には存在するけど)
// MultidimensionalArray<T, Dimensions extends N>: 多次元配列型
const multidimensionalArray: MultidimensionalArray<S, 4> = [[[["foo"]]]] // number[][][][]
multidimensionalArray[0][0][0].push("bar")
// MultidimensionalReadonlyArray<T, Dimensions extends N>: readonlyの多次元配列型
const mra: MultidimensionalReadonlyArray<S, 2> = [["foo"]]
mra[0].push("bar") // エラー: readonlyなのでpushは無い
// ReadonlyTuple<T, Length extends N>: readonlyのタプルを作成
const readonlyTuple: ReadonlyTuple<N, 3> = [1, 2, 3] // [number, number, number]
// TupleToUnion<Array>: タプルを配列に変換 (keyof Array[number] とほぼ同じ、詳細はドキュメント参照)
const ttuSample = ["a", "b", "c"] as const
const ttu: TupleToUnion<typeof ttuSample> = ttuSample[RANDOM]

/*
 * type-fest: Numeric
 */
// PositiveInfinity
const positiveInfinity1: IsEqual<PositiveInfinity, 1e309> = true
const positiveInfinity2: IsEqual<PositiveInfinity, 1e308> = false
// NegativeInfinity
const negativeInfinity1: IsEqual<NegativeInfinity, -1e309> = true
const negativeInfinity2: IsEqual<NegativeInfinity, -1e308> = false
// Finite<T extends N>: Finiteであれば代入可能とする
const finite1: IsEqual<Finite<1e309>, never> = true
const finite2: IsEqual<Finite<-1e309>, never> = true
const finite3: Finite<123 | 456 | 1e309> = 1e309 // エラー: 123 or 456 のみ代入可能
// type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never - Integerであれば代入可能とする
const integer1: Integer<0.1> = 0.1 // エラー: 0.1 は never 型になる
const integer2: Integer<2 | -2> = ([2, -2] as const)[RANDOM] // OK
const integer3: Integer<0.1 | 2> = 2 // エラー: floatを含むユニオン型はダメらしい
// type Float<T extends number> = T extends Integer<T> ? never : T
const float1: Float<1.0> = 1.0 // エラー: 1.0 は never 型になる
const float2: Float<2.2 | -2.2> = ([2.2, -2.2] as const)[RANDOM] // OK: 2.2 のみ代入可能
const float3: Float<1.0 | -2.2> = -2.2 // OK: Integer<T>だとダメだけどこれはできるのか…
// type Negative<T extends Numeric> = T extends Zero ? never : `${T}` extends `-${string}` ? T : never
const negative1: Negative<1 | -1.5> = -1.5 // OK
const negative2: Negative<1> = 1 // エラー: 1 は never になる
const negative3: Negative<1e999> = 1e999 // エラー: Inifinity は never になる
const negative4: Negative<-1e999> = -1e999 // OK
// NegativeFloat<T extends number> = Negative<Float<T>>
const negativeFloat: NegativeFloat<1 | 1.5 | 0 | -1 | -1.5> = -1.5
// NonNegative<T extends Numeric> = T extends Zero ? T : Negative<T> extends never ? T : never
const nonNegative: NonNegative<1 | 1.5 | 0 | -1 | -1.5> = ([1, 1.5, 0] as const)[RANDOM]
// NegativeInteger<T extends number> = Negative<Integer<T>>
const negativeInteger1: NegativeInteger<1 | 1.5 | 0 | -1 | -1.5> = -1 // エラー: やはりfloatを含むユニオン型はダメらしい
const negativeInteger2: NegativeInteger<1 | 0 | -1> = -1 // OK
// NonNegativeInteger
const nonNegativeInteger1: NonNegativeInteger<1 | 1.5 | 0 | -1 | -1.5> = 1 // エラー: やはりfloatを含むユニオン型はダメらしい
const nonNegativeInteger2: NonNegativeInteger<1 | 0 | -1> = ([0, 1] as const)[RANDOM] // OK

/*
 * type-fest: Change case
 */
// CamelCase: キャメルケースにする
const cc1: CamelCase<"foo_bar"> = "fooBar"
const cc2: CamelCase<"FOO_BAR"> = "fooBar"
const cc3: CamelCase<"FOOBarFOOBarID", { preserveConsecutiveUppercase: true }> = "fOOBarFOOBarID"
const cc4: CamelCase<"FOOBarFOOBarID", { preserveConsecutiveUppercase: false }> = "fooBarFooBarId"
const cc5: IsEqual<
    CamelCase<"FOOBarFOOBar">, // true がデフォルト
    CamelCase<"FOOBarFOOBar", { preserveConsecutiveUppercase: true }>
> = true
// CamelCasedProperties<Value, { preserveConsecutiveUppercase: true }>
const ccp: CamelCasedProperties<{ FooBar: N; a_a: { b_b: N } }> = { fooBar: 0, aA: { b_b: 1 } }
// CamelCasedPropertiesDeep<Value, { preserveConsecutiveUppercase?: boolean }>
const cpd: CamelCasedPropertiesDeep<{ A_a: { b_B: N } }> = { aA: { bB: 1 } }
// KebabCase
const kc1: KebabCase<"AbC"> = "ab-c"
const kc2: KebabCase<"ABC"> = "abc"
const kc3: KebabCase<"A-bC"> = "a-b-c"
// KebabCasedProperties
const kcp: KebabCasedProperties<{ aA: { bB: N } }> = { "a-a": { bB: 1 } }
// KebabCasedPropertiesDeep
const kpd: KebabCasedPropertiesDeep<{ aA: { bB: N } }> = { "a-a": { "b-b": 1 } }
// PascalCase
const pc1: PascalCase<"FooBar"> = "FooBar"
const pc2: PascalCase<"FOOBar"> = "FOOBar"
const pc3: PascalCase<"fooBAR"> = "FooBAR"
const pc4: PascalCase<"FOO-BAR"> = "FooBar"
// PascalCasedProperties
const pcp: PascalCasedProperties<{ fOO_bAR: { A_B: N } }> = { FOOBAR: { A_B: 1 } }
// PascalCasedPropertiesDeep
const ppd: PascalCasedPropertiesDeep<{ fOO_bAR: { A_B: N } }> = { FOOBAR: { AB: 1 } }
// SnakeCase
const sc1: SnakeCase<"AbC"> = "ab_c"
const sc2: SnakeCase<"ABC"> = "abc"
const sc3: SnakeCase<"A-bC"> = "a_b_c"
// SnakeCasedProperties
const scp: SnakeCasedProperties<{ AABb: { Cc: N } }> = { a_a_bb: { Cc: 1 }, aa_bb: { Cc: 2 } }
// SnakeCasedPropertiesDeep
const spd: SnakeCasedPropertiesDeep<{ FOO: { BAR: N } }> = { foo: { bar: 3 } }
// ScreamingSnakeCase
const ssc: ScreamingSnakeCase<"AABb-cc"> = (["A_A_BB_CC", "AA_BB_CC"] as const)[RANDOM]
// DelimiterCase<Value, Delimiter extends string>
const dc: DelimiterCase<"AABb-cc", "+"> = (["a+a+bb+cc", "aa+bb+cc"] as const)[RANDOM]
// DelimiterCasedProperties
const dcp: DelimiterCasedProperties<{ Aa: { bB: N } }, "="> = { aa: { bB: 1 } }
// DelimiterCasedPropertiesDeep
const dpd: DelimiterCasedPropertiesDeep<{ Aa: { bB: N } }, "="> = { aa: { "b=b": 1 } }
/*
 * type-fest: Miscellaneous
 */
// GlobalThis
const globalThis: GlobalThis = window
// PackageJson
const packageJson: PackageJson = { devDependencies: { typescript: "3.9.7" } }
// TsConfigJson
const tsConfigJson: TsConfigJson = { compilerOptions: { target: "ESNext" } }
