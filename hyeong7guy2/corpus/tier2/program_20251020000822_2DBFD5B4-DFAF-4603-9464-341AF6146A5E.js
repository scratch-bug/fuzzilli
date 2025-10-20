function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                const v9 = { value: v7, __proto__: null };
            }
        }
        f5(f5);
        f5(f4);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v12 = new F0();
class C13 {
    static [v12](a15, a16, a17) {
    }
}
