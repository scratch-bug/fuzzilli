let v0 = 4096;
class C1 {
}
function f2() {
    ++v0;
    const v4 = { getPrototypeOf: f2 };
    const v6 = Proxy.revocable;
    try { new v6(); } catch (e) {}
    const v8 = new Proxy(C1, v4);
    return v8.__proto__;
}
try { f2(); } catch (e) {}
