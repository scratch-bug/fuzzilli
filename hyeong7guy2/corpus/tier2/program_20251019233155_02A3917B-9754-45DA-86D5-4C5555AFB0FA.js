class C1 extends Int32Array {
}
const v2 = C1.toString(C1, Int32Array, Int32Array, Int32Array);
const v7 = Intl.NumberFormat().formatRangeToParts(-574902674, -144.6422562264937);
const v8 = { done: v2 };
Object.defineProperty(v8, "toJSON", { configurable: true, enumerable: true, value: v7 });
const v10 = JSON.stringify(v8);
const v11 = JSON.parse;
v11.apply(JSON, [v10]);
