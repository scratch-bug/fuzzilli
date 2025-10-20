const v2 = Symbol.toPrimitive;
function f3() {
    const v4 = typeof v2;
    v4.charAt();
    function f6(a7) {
        for (let v8 = 0; v8 < 5; v8++) {
            const v10 = eval();
            v10 ?? v10;
        }
        return f3;
    }
    try { f6(v4); } catch (e) {}
    f6(f6);
}
Float32Array.toString = f3;
const v15 = new Float64Array();
v15.slice(Float32Array);
f3();
%OptimizeFunctionOnNextCall(f3);
f3();
