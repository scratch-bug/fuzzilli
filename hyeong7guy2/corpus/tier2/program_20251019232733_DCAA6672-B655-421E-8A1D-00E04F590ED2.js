class C0 {
}
function f1() {
    const v2 = { getPrototypeOf: f1 };
    const v4 = Proxy.revocable;
    let v5;
    try { v5 = new v4(); } catch (e) {}
    v5 ?? v5;
    const v7 = new Proxy(C0, v2);
    v7.__proto__;
    return v2;
}
try { f1(); } catch (e) {}
