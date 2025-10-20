const v0 = /Ra\S(\1a)/du;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    v5.prototype = v5;
    try { new v5(a4, v0); } catch (e) {}
}
new F1();
