function f2(a3, a4, a5) {
    Temporal[Symbol.isConcatSpreadable] = Int8Array;
    return a3;
}
const v11 = new Worker(f2, { type: "function" });
v11.getMessage();
