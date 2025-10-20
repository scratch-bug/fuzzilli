class C0 {
}
function f1() {
    const v6 = {
        getPrototypeOf: f1,
        o(a3, a4) {
            /[a-zA-Z0-9][^2]/syvi;
            return a3;
        },
    };
    const v8 = Proxy.revocable;
    try { new v8(); } catch (e) {}
    const v10 = new Proxy(C0, v6);
    v10.__proto__;
    return C0;
}
try { f1(); } catch (e) {}
