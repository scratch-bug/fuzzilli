const v0 = class {
}
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
function f4(a5, a6, a7) {
    a5?.[v0];
    const v10 = {};
    try { ("NFD").postMessage(a5, v0, f4, a7); } catch (e) {}
    this.toString = f4;
    Object.defineProperty(F2, this, { set: a5 });
    return F2;
}
Worker.constructor = f4;
try { Worker.constructor(); } catch (e) {}
