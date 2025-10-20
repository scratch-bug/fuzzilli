function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = [1073741824,-9223372036854775808,581728192,-35977];
class C3 {
}
function f5(a6, a7) {
    function f8(a9, a10) {
        const v11 = a10.Realm;
        let v12;
        try { v12 = v11.global(); } catch (e) {}
        return v12;
    }
    return f8;
}
Symbol.toString = f5;
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    function f18() {
        function f19(a20) {
            function f21() {
                try { v2.toLocaleString(...this, f21, f19, F0, F14); } catch (e) {}
                for (let v23 = 0; v23 < 5; v23++) {
                }
                return a20;
            }
            const v24 = f21();
            v24 >> v24;
            const v26 = `string${536870912n}undefined`;
            const t27 = Symbol.toString();
            t27(C3, this);
            v26.normalize();
            return C3;
        }
        f19();
        f19();
        %OptimizeMaglevOnNextCall(f19);
        return f19;
    }
    Object.defineProperty(this, "toString", { get: f18 });
}
const v32 = new F14(F0, f5);
v32.toString();
