const v3 = Symbol.iterator;
const v9 = {
    [v3]() {
        const v8 = {
            next() {
                return { done: 10 };
            },
        };
        return v8;
    },
};
const v12 = new Int16Array();
function f13() {
    const v14 = new Date(WeakSet, Date, 882, ...v12, ...v9);
    return v14;
}
f13();
%PrepareFunctionForOptimization(f13);
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    function f20() {
        function f21(a22) {
            return a22;
        }
        %OptimizeMaglevOnNextCall(f13);
        return f21;
    }
    Object.defineProperty(this, "toString", { get: f20 });
}
const v23 = new F16(882, v9);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
f13();
