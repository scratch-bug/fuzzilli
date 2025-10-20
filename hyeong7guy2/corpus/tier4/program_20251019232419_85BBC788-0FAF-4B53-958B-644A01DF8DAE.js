const v2 = Array(127);
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(); } catch (e) {}
    v2["shift"]();
}
gc();
new F3();
