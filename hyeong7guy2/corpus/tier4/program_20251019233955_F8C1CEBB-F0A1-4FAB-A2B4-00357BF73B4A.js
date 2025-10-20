function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        const v11 = [];
        v11.pop();
        v11.at(F3);
        %OptimizeFunctionOnNextCall(F7);
    }
    new F7();
}
const v15 = new F0();
new F0(v15);
new F0();
