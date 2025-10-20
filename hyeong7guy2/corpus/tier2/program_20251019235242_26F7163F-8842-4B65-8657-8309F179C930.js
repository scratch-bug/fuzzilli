const v4 = new Uint16Array(2424);
const v5 = new Uint8ClampedArray(12745);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            try { v4["1"](); } catch (e) {}
            const v16 = f11 | 7;
            for (let v17 = 0; v17 < 5; v17++) {
                v5[v16] = Uint8ClampedArray;
            }
            return a8;
        }
        f11(f11());
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v20 = new F6();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
