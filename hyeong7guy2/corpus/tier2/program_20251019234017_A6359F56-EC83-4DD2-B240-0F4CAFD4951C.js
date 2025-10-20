const v5 = Symbol.iterator;
const v31 = {
    [v5]() {
        const v7 = [1.0];
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            a10[3] = 268435439;
            function f12() {
                function f13(a14) {
                    Array.of(v7)[0].pop();
                }
                f13();
                a10[3] = this;
                return f13;
            }
            f12();
            a10.g ||= a10;
            Object.defineProperty(this, "toString", { get: f12 });
        }
        const v21 = new F8(v7);
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
const v33 = new Int16Array();
function f34() {
    new Date(WeakSet, Date, -128, ...v33, ...v31);
    return WeakSet;
}
f34();
%PrepareFunctionForOptimization(f34);
%OptimizeFunctionOnNextCall(f34);
f34();
