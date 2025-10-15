function f0() {
    return f0;
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = F1.constructor;
const v7 = new Proxy(v4, { get: f0 });
try { new v7(); } catch (e) {}
