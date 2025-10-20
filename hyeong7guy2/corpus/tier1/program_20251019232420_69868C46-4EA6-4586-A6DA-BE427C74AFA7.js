const v3 = Symbol.iterator;
const v41 = {
    [v3]() {
        const v19 = {
            next() {
                const v7 = { done: 10 };
                ([-4096,1964577369]).fill;
                for (let i12 = 0, i13 = 10; i13; i13--) {
                }
                return v7;
            },
        };
        v19.next();
        function F21() {
            if (!new.target) { throw 'must be called with new'; }
        }
        function f23(a24) {
            for (let v26 = 0; v26 < 5; v26++) {
                const v29 = v26 ? { a: 1 } : Object;
                v29.toISOString = v29;
            }
            f23[4] | 7;
            const v34 = { a: 1.1 };
            function F35(a37, a38) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F35.d = F21;
            return v34.a;
        }
        f23(WeakSet);
        return v19;
    },
};
function f43() {
    new Date(WeakSet, Date, 882, ...v41, ...v41);
    return v41;
}
f43();
%PrepareFunctionForOptimization(f43);
%OptimizeMaglevOnNextCall(f43);
f43();
