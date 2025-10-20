function f1(a2) {
    return this;
}
Object.defineProperty(this, "c", { set: f1 });
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        this.c = 6;
        return a9;
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
const v13 = new F3();
const v14 = new F3();
new F3(v14, v13);
