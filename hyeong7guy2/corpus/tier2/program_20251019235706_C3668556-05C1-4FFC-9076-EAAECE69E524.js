const v4 = Symbol.iterator;
const v30 = {
    [v4]() {
        const v6 = [1.0];
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11() {
                function f12(a13) {
                    Array.of(v6)[0].pop();
                }
                f12(f12);
                a9[3] = this;
                return f12;
            }
            f11();
            a9.g ||= a9;
            Object.defineProperty(this, "toString", { get: f11 });
        }
        const v20 = new F7(v6);
        class C21 {
            static [v20](a23, a24, a25) {
            }
        }
        const v29 = {
            next() {
                return { done: 10000 };
            },
        };
        return v29;
    },
};
const v32 = new Int16Array();
function f33() {
    const v34 = new Date(WeakSet, Date, -128, ...v32, ...v30);
    return v34;
}
f33();
%PrepareFunctionForOptimization(f33);
%OptimizeFunctionOnNextCall(f33);
f33();
