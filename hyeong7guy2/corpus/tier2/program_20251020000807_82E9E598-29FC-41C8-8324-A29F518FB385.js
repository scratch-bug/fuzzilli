const v4 = Symbol.iterator;
const v31 = {
    [v4]() {
        const v6 = [1.0];
        v6.entries();
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                function f13(a14) {
                    const v17 = Array.of(v6)[0];
                    v17.pop(a14, v17, v17, f13, v4);
                }
                f13();
                a10[3] = this;
                return f13;
            }
            f12();
            a10.g ||= a10;
            Object.defineProperty(this, "toString", { get: f12 });
        }
        const v21 = new F8(v6);
        class C22 {
            static [v21](a24, a25, a26) {
            }
        }
        const v30 = {
            next() {
                return { done: 10000 };
            },
        };
        return v30;
    },
};
const v33 = new Int16Array(Date, -128, -128);
function f34() {
    const v35 = new Date(WeakSet, Date, -128, ...v33, ...v31);
    return v35;
}
f34();
%PrepareFunctionForOptimization(f34);
%OptimizeFunctionOnNextCall(f34);
f34();
