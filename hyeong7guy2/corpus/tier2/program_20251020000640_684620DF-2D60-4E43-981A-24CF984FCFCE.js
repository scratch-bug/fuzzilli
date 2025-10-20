function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F3();
const v11 = Symbol.iterator;
const v19 = {
    [v11]() {
        const v17 = {
            next() {
                const v15 = { done: 10 };
                v15.g = v2;
                for (let v16 = 0; v16 < 2; v16++) {
                    this[2705] = v7;
                }
                return v15;
            },
        };
        try { v17.next(); } catch (e) {}
        return v17;
    },
};
const v22 = new Int16Array(882, 882, 882);
function f23() {
    new Date(WeakSet, Date, 882, ...v22, ...v19);
    return f23;
}
const t30 = f23();
t30();
%OptimizeFunctionOnNextCall(f23);
f23();
