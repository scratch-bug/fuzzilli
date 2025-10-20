function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = Symbol.iterator.description;
            const v10 = [2.2250738585072014e-308,0.6351190960017168,-731374.4340230908,-1000000000.0];
            for (let v11 = 0; v11 < 5; v11++) {
                String.prototype.trimRight.apply(v9, v10);
                function f16() {
                    return f16;
                }
            }
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
