function f0() {
    return f0;
}
const v3 = new Proxy(f0, {});
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(); } catch (e) {}
    v3.__proto__ = Object;
}
new F4();
for (let i13 = 0, i14 = 10; i14; i14--) {
}
