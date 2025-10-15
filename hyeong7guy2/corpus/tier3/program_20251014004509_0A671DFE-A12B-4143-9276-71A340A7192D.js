class C1 extends WeakMap {
}
const v2 = {};
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(this, a6); } catch (e) {}
    const v10 = new C1();
    v10[38];
    [Symbol];
}
new F4();
new F4();
