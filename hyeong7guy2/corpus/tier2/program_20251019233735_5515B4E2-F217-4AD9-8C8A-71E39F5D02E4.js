const v2 = new Uint8Array(256);
const v3 = [Uint8Array];
function f4() {
    return v2;
}
v3.constructor = f4;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const t10 = v3.constructor;
            const v13 = t10();
            v13[191] = v13;
            return a7;
        }
        f10();
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v16 = new F5();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
