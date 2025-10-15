function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [a6];
            const v8 = v7[4];
            function f10() {
                return f5;
            }
            function f11() {
                function f12() {
                    return { done: true };
                }
                return { next: f12 };
            }
            const v17 = Symbol.iterator;
            f10.bind(null, ...{ [v17]: f11 });
            v8 | 7;
            v7.with();
            return null;
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v25 = new F0(F0, F0);
class C26 {
    static [v25](a28, a29, a30) {
    }
}
