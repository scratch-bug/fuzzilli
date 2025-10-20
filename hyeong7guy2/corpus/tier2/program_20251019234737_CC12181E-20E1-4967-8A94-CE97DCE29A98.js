for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            let v16 = 0;
            while (v16 < 1) {
                const t8 = [Symbol,Symbol,Symbol,Symbol,Symbol];
                t8[1] = Symbol;
                const v21 = v16++;
                function F22(a24, a25) {
                    if (!new.target) { throw 'must be called with new'; }
                    eval(v16);
                }
                a = v21;
            }
            for (let i31 = 0, i32 = 10; i32; i32--) {
            }
            class C38 {
            }
            return a11;
        }
        f14(a12);
        f14();
        %OptimizeMaglevOnNextCall(f14);
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v41 = new F9();
class C42 {
    static [v41](a44, a45, a46) {
    }
}
