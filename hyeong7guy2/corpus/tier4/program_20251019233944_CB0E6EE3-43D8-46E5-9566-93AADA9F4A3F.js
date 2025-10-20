const v1 = this.Float16Array;
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = {};
    const v12 = new v1();
    function f13() {
        let v14;
        try { v14 = new Date(WeakSet, Date, 882, ...v12, ...v10); } catch (e) {}
        return v14;
    }
    f13();
    %PrepareFunctionForOptimization(f13);
    %OptimizeFunctionOnNextCall(f13);
    f13();
}
new F2();
