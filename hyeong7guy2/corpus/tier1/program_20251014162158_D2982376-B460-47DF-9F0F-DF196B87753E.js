function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [a6];
            const v8 = v7[4];
            class C9 {
            }
            const v11 = v8 | 7;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            try { F12.apply(a3, C9); } catch (e) {}
            v7.with();
            return v11;
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
