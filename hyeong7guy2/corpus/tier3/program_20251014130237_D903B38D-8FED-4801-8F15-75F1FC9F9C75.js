const v1 = new WeakSet();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.length = v1;
    function f6(a7, a8, a9) {
        a7.length;
        return this;
    }
    f6(this);
    %OptimizeFunctionOnNextCall(f6);
}
const v12 = new F2();
const v13 = new F2();
const t13 = v13.constructor;
new t13(v12);
