function f2() {
    return 1073741825;
}
Uint32Array.toString = f2;
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
}
const v8 = class extends F3 {
    [Uint32Array];
}
new v8();
