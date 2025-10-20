class C0 {
}
const v1 = class extends C0 {
}
function f3(a4, a5) {
    function f6(a7, a8) {
        for (let v9 = 0; v9 < 5; v9++) {
            v9 & v9;
        }
        return C0;
    }
    f6.apply(a4, v1);
    return f6;
}
Symbol.toString = f3;
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    function f17() {
        function f18(a19) {
            const v20 = `string${536870912n}undefined`;
            const v21 = Symbol.toString(536870912n, Symbol);
            v21(Symbol, f17, v21, v20);
            return v21;
        }
        f18();
        f18(C0);
        %OptimizeMaglevOnNextCall(f18);
        return f18;
    }
    Object.defineProperty(this, "toString", { get: f17 });
}
const v25 = new F13();
v25.toString();
