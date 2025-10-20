const v4 = Symbol.iterator;
const v29 = {
    [v4]() {
        function f7() {
            return f7;
        }
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f12(a13, a14, a15) {
                function F17(a19, a20, a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F17(a15, -1, f12, a11, -1, a10, f7, F8);
                return F17;
            }
            f12(v4, a11, -693855627);
        }
        new F8();
        const v28 = {
            next() {
                return { done: -693855627 };
            },
        };
        return v28;
    },
};
const v31 = new Int16Array();
function f32() {
    new Date(WeakSet, Date, -55924, ...v31, ...v29);
    return Int16Array;
}
f32();
%PrepareFunctionForOptimization(f32);
%OptimizeFunctionOnNextCall(f32);
f32();
