function f1() {
    return "-9007199254740992";
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
F3[6] = "-9007199254740992";
WeakSet.valueOf = f1;
const v9 = Symbol.iterator;
const v15 = {
    [v9]() {
        F3[6] >>>= 10;
        const v14 = {
            next() {
                return { done: F3 };
            },
        };
        return v14;
    },
};
function f17() {
    new Date(WeakSet, Date, 882, ...v15, ...v15);
}
f17();
f17();
%OptimizeMaglevOnNextCall(f17);
f17();
