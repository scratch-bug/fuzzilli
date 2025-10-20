function f0(a1, a2, a3) {
    const v7 = BigInt.asUintN(5, -229684853n);
    const v8 = v7 << v7;
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        v8.c = a12;
    }
    new F9(-229684853n, v8);
    return f0;
}
f0(f0, f0(f0, f0, f0), f0);
const v17 = class extends Int16Array {
}
v17.prototype = v17;
%OptimizeFunctionOnNextCall(f0);
f0();
