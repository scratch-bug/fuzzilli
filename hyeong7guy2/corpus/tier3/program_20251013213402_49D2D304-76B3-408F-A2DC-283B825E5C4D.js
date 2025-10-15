const v1 = class extends Date {
}
const v2 = new v1();
v2.toTimeString();
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6 >>> a6;
    const v8 = this.constructor;
    try { new v8(this); } catch (e) {}
}
new F4(v2);
new F4();
