const v1 = Symbol.iterator;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        try { this.decodeURIComponent(v1); } catch (e) {}
        return a8;
    }
    f6(a4, this, Symbol);
    %OptimizeFunctionOnNextCall(f6);
}
const v12 = new F2(Symbol, F2);
const v13 = v12.constructor;
new v13();
new F2(v13, v12);
