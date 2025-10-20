const v0 = class {
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { v0(); } catch (e) {}
    const v10 = new ArrayBuffer(6, { maxByteLength: 2745220628 });
    const v12 = new Uint8Array(v10);
    v12.a = v12;
    try { new v4(); } catch (e) {}
}
new F1(F1);
