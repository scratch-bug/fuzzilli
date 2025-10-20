const v4 = Symbol.iterator;
const v30 = {
    [v4]() {
        function f7() {
            return f7;
        }
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f12(a13, a14, a15) {
                function F17(a19, a20, a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                    try { a21.bind(); } catch (e) {}
                }
                new F17(a15, -1, f12, a11, -1, a10, f7, F8);
                return Date;
            }
            f12(this, WeakSet, Date);
        }
        new F8(v4, f7);
        const v29 = {
            next() {
                return { done: -693855627 };
            },
        };
        return v29;
    },
};
const v32 = new Int16Array();
function f33() {
    new Date(WeakSet, Date, -55924, ...v32, ...v30);
    return f33;
}
f33();
%PrepareFunctionForOptimization(f33);
%OptimizeFunctionOnNextCall(f33);
f33();
