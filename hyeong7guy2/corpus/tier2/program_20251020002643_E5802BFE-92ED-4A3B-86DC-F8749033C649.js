function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = Symbol.dispose;
            const v11 = {
                [v9]() {
                },
            };
            using v12 = v11;
            const v13 = [-9223372036854775808];
            try { v13.forEach(0); } catch (e) {}
            return [] >>> 7;
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
