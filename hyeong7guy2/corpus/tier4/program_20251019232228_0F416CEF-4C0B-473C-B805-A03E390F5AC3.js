const v2 = class extends Uint16Array {
}
const v5 = Symbol.iterator;
function f6() {
    const v7 = new Date();
    v7.getMonth();
    return Date;
}
f6.call(v5, Uint16Array, Symbol, Date, v2);
const v10 = f6();
try { new v10(v10, v2, v10, 134, 134, v10, v5); } catch (e) {}
%OptimizeFunctionOnNextCall(f6);
f6();
