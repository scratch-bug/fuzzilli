const v1 = new WeakSet();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(); } catch (e) {}
    this.g = v1;
}
const v7 = F2.isPrototypeOf();
new F2();
v7.__proto__.valueOf(v1, v7, WeakSet);
new F2();
new F2(WeakSet);
const v14 = new Date();
v14.setSeconds(WeakSet, F2);
function f16() {
}
const v20 = new Worker(f16, { type: "function" });
v20.onmessage;
