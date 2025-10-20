function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
let v4 = new F0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                const v16 = v4++;
                v16 >> v16;
            }
            const v18 = new F12(v4, F0);
            const v19 = v18.constructor;
            const v20 = new v19(this, v19, this, v19);
            v20.constructor;
            gc();
        }
        f10(this);
        f10(F0);
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v26 = new F5();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
