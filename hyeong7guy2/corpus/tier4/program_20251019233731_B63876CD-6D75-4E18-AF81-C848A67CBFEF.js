function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = class {
    }
    async function f7(a8, a9) {
        v6 ? v6 : a9;
        eval();
        await f7;
        return a5;
    }
    f7(F0, f7);
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
new F0();
