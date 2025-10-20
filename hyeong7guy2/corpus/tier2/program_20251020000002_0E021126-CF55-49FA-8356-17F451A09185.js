class C0 {
}
function f1() {
    const v4 = new Proxy(C0, { getPrototypeOf: f1 });
    for (const v5 in v4) {
    }
    return Proxy;
}
try { f1(); } catch (e) {}
