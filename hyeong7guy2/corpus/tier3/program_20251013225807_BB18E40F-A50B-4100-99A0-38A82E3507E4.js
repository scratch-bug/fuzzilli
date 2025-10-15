const v2 = class extends WeakSet {
}
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    v9.prototype = v9;
    try { v9(a5, a7, "o"); } catch (e) {}
}
const v11 = new F3();
const v12 = new F3(v2, v2, v2, F3);
const v13 = new F3(v2, v11, v12);
try { v13.prototype(); } catch (e) {}
