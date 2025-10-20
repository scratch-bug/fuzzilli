function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = /Aa+?/dusgmi;
            with (v7) {
                const v8 = [0.39346707945810944,-991803.8963643727];
                try { v8.flatMap(); } catch (e) {}
            }
            const v11 = {
                next() {
                    return v7;
                },
            };
        }
        f5(F0);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
