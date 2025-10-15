function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v11 = String.prototype.localeCompare;
        const v12 = ["p","p"];
        try { v11.apply("p", v12); } catch (e) {}
        return a4;
    }
    f5(f5, f5, F1);
    %OptimizeFunctionOnNextCall(f5);
}
const v15 = new F1();
const v16 = new F1(v15, "p");
new F1("p", v16);
