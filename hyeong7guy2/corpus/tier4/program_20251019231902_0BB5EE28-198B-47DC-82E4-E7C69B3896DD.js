const v1 = new Uint16Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.constructor(); } catch (e) {}
    -v1.length;
    %OptimizeFunctionOnNextCall(F2);
}
new F2();
new F2();
