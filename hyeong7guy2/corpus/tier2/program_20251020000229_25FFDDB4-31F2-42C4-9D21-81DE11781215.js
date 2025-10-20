function f0(a1, a2, a3) {
    let v5 = -229684853n;
    v5++;
    const v8 = BigInt.asUintN(5, v5);
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a12;
    }
    new F9(v5, v8);
    return a2;
}
f0();
f0();
const v17 = class extends Int16Array {
}
Object.defineProperty(Int16Array, 5, { configurable: true, value: v17 });
%OptimizeFunctionOnNextCall(f0);
f0();
