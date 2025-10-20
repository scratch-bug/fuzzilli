const v2 = new Uint8Array(256);
const v3 = [256,256];
function f4() {
    return v2;
}
v3.constructor = f4;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const t10 = v3.constructor;
            t10()[1];
        }
        f10();
        f10(a7);
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v17 = new F5(F5, f4);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
