class C0 {
}
function f1() {
    const v2 = { getPrototypeOf: f1 };
    const v3 = async (a4, a5) => {
        await a4;
    };
    const v8 = Proxy.revocable;
    try { new v8(); } catch (e) {}
    const v10 = new Proxy(C0, v2);
    return v10.__proto__;
}
try { f1(); } catch (e) {}
