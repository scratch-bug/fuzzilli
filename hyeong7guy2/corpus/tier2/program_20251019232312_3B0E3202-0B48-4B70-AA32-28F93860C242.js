function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4, a5, a6) {
    try { ("NFD").postMessage(); } catch (e) {}
    this.toString = f3;
    Object.defineProperty(F1, this, { set: a4 });
    return F1;
}
Worker.constructor = f3;
try { Worker.constructor(F1, "NFD", F1, "NFD", F1); } catch (e) {}
