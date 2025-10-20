for (let i2 = 0, i3 = 10; i3; i3--) {
}
const v10 = new Map();
const v14 = Symbol.iterator;
const v28 = {
    [v14]() {
        const v26 = {
            next() {
                try { this.next(); } catch (e) {}
                const v19 = { done: 10 };
                let v20 = v10.has(10);
                function F21(a23, a24) {
                    if (!new.target) { throw 'must be called with new'; }
                    v20--;
                }
                return v19;
            },
        };
        v26.next();
        return v26;
    },
};
function f30() {
    const v31 = new Date(WeakSet, Date, 882, ...v10, ...v28);
    try { v31.setFullYear(); } catch (e) {}
}
f30();
%PrepareFunctionForOptimization(f30);
%OptimizeFunctionOnNextCall(f30);
f30();
