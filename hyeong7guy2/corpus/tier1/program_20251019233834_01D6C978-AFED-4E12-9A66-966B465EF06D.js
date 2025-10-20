const v3 = Symbol.iterator;
const v19 = {
    [v3]() {
        function F6() {
            if (!new.target) { throw 'must be called with new'; }
            const v8 = this.constructor;
            try { new v8(v3, 10, v3); } catch (e) {}
            [{ a: 1 }];
            const v14 = { a: 1.1 };
        }
        new F6();
        const v18 = {
            next() {
                return { done: 10 };
            },
        };
        return v18;
    },
};
const v22 = new Int16Array(v19, 882, 882);
function f23() {
    new Date(WeakSet, Date, 882, ...v22, ...v19);
    return Date;
}
f23();
%PrepareFunctionForOptimization(f23);
%OptimizeFunctionOnNextCall(f23);
f23();
