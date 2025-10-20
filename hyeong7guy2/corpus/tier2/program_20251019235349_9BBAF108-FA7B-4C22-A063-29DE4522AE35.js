function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = { __proto__: null };
            const v9 = class {
            }
            const v10 = [-51739.19180922606,-2.0];
            const v11 = class extends v9 {
            }
            let [] = v10;
            return eval(a2);
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
