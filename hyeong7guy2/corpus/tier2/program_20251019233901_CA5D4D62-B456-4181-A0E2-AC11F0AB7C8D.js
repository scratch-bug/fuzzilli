class C0 {
}
function f1() {
    const v2 = { getPrototypeOf: f1 };
    const v4 = Proxy.revocable;
    try { new v4(); } catch (e) {}
    /\x01?/dsygmvi;
    const v7 = new Proxy(C0, v2);
    v7.__proto__;
    return v2;
}
try { f1(); } catch (e) {}
