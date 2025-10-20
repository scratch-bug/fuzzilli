const v2 = /mxyz{0,1}/duy;
const v3 = Symbol.toPrimitive;
v2[v3] = Symbol;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            Object.defineProperty(a15, a15, { writable: true, enumerable: true, value: Symbol });
            v2.test("");
        }
        new F12(a10, a10);
        return a11;
    }
    f8(this, v2);
    %OptimizeFunctionOnNextCall(f8);
}
const v21 = new F4(Symbol, Symbol);
const v22 = v21.constructor;
new v22("", v2, v22, v2);
const v24 = new F4(v3, v3);
const t21 = v24.constructor;
new t21();
const v27 = new F4();
const t24 = v27.constructor;
new t24();
