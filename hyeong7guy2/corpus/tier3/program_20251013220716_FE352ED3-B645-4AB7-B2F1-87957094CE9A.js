function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
    }
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
gc({ execution: "async" });
const v10 = async () => {
    for (let i12 = 0; i12 < 20000;) {
    }
};
