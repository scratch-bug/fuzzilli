const v4 = Symbol.iterator;
const v20 = {
    [v4]() {
        const v6 = [1.0];
        function f7() {
            return Date;
        }
        function f8(a9) {
            return v4;
        }
        Object.defineProperty(v6, 3, { configurable: true, enumerable: true, get: f7, set: f8 });
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            try { a12.findIndex(F10, Symbol, v6, F10, this); } catch (e) {}
        }
        new F10(v6);
        const v19 = {
            next() {
                return { done: 10000 };
            },
        };
        return v19;
    },
};
const v22 = new Int16Array();
function f23() {
    const v24 = new Date(WeakSet, Date, -128, ...v22, ...v20);
    return v24;
}
f23();
%PrepareFunctionForOptimization(f23);
%OptimizeFunctionOnNextCall(f23);
f23();
