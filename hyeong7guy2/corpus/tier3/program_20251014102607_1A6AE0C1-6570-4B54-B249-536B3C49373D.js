const v2 = Symbol.toPrimitive;
function f3() {
    Symbol(typeof v2);
}
Float32Array.toString = f3;
const v7 = new Float64Array();
v7.slice(Float32Array);
f3();
%OptimizeFunctionOnNextCall(f3);
f3();
