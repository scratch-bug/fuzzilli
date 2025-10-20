function f1(a2, a3) {
    const v6 = new Float64Array(15);
    v6[10];
    Symbol.constructor();
    const v10 = Symbol.isConcatSpreadable;
    Symbol.for();
    Object.defineProperty(v6, v10, { configurable: true, enumerable: true, value: 14 });
    a2.cos();
    try {
        f1();
    } catch(e14) {
        v6[Symbol.isConcatSpreadable];
    }
    return Symbol;
}
f1(Math);
%OptimizeMaglevOnNextCall(f1);
try { f1(); } catch (e) {}
