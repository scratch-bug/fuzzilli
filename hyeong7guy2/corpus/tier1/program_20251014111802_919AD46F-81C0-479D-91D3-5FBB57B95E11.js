function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            class C9 {
            }
            class C11 {
            }
            C11.g += -9223372036854775807;
            const v12 = {};
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v17 = 30349n;
            ({"b":v17,"e":v7,...Int32Array} = F13);
            eval();
        }
        f5(f5(F0));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0(F0, F0);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
