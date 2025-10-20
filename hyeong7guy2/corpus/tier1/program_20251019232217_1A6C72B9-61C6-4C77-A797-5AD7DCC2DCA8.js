function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = [a6,a6];
            v8[3019154684] = this;
            ({ arguments: v8 }).arguments;
        }
        f5();
        f5(F0);
        function f13() {
            return f13;
        }
        function f14() {
            function f15() {
                gc();
                return { done: true };
            }
            return { next: f15 };
        }
        const v22 = Symbol.iterator;
        f13.bind(null, ...{ [v22]: f14 });
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v26 = new F0();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
