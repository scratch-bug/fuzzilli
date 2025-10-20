const v2 = new Float64Array(3);
const v3 = v2[2];
const v7 = Symbol.iterator;
const v16 = {
    [v7]() {
        eval();
        const v14 = {
            next() {
                return { done: 10 };
            },
        };
        try { v14(v3); } catch (e) {}
        return v14;
    },
};
const v19 = new Int16Array();
function f20() {
    const v21 = new Date(WeakSet, Date, 882, ...v19, ...v16);
    return v21;
}
f20();
const v23 = f20();
try { v23.toTemporalInstant(); } catch (e) {}
%OptimizeFunctionOnNextCall(f20);
f20();
