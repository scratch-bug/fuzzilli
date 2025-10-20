function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            -9007199254740990 >> a2;
            function f10() {
                return this;
            }
            function f11() {
                function f12() {
                    return { done: true };
                }
                return { next: f12 };
            }
            const v16 = Symbol.iterator;
            f10.bind(null, ...{ [v16]: f11 });
        }
        f5(f5(f5));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
