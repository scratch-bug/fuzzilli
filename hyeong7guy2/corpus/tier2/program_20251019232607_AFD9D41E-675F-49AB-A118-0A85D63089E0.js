function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = WeakMap[4];
            v8 | -24131;
            const v12 = { a: 1.1 };
            -26614n % -26614n;
            v8 - v12;
        }
        f6.apply();
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v18 = new F1();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
