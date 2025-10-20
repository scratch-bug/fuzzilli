function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = Symbol.iterator.description;
            const v10 = [2.2250738585072014e-308,0.6351190960017168,-731374.4340230908,-1000000000.0];
            for (let v11 = 0; v11 < 5; v11++) {
                String.prototype.trimRight.apply(v9, v10);
            }
        }
        f5(this);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0(F0, F0);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
