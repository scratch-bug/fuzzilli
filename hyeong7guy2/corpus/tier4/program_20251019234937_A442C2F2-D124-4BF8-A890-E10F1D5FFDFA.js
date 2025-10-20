const v0 = [-Infinity,1.0,-2.1044341338444834,-6.790553755693544];
function f2() {
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        const v10 = Object.is(v0, Date);
        async function f11(a12, a13, a14) {
            await v10;
            return a12;
        }
    }
    const v16 = new F4(f2, Object, f2, Date);
    return v16;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2();
