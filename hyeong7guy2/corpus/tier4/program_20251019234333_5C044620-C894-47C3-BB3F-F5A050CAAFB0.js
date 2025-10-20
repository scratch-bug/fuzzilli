const v2 = Symbol.toPrimitive;
function f3() {
    return typeof v2 === "function";
}
Float32Array.toString = f3;
const v8 = new Float64Array();
v8.slice(Float32Array);
f3();
%OptimizeFunctionOnNextCall(f3);
f3();
