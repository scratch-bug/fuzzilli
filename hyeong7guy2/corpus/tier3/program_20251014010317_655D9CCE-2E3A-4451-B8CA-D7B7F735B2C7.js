const v1 = new WeakSet();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this?.constructor;
    try { new v12(); } catch (e) {}
    a11--;
    this.e = v1;
}
F8.length = F8;
new F8(F8, -1.0);
new F8(F3, v1);
new Float64Array();
function F20(a22) {
    if (!new.target) { throw 'must be called with new'; }
    function f23(a24) {
        const v25 = Symbol.keyFor(Symbol);
        v25 ?? v25;
    }
}
new F20();
