class C0 {
}
function f1() {
    const v2 = { getPrototypeOf: f1 };
    const v4 = Proxy.revocable;
    try { new v4(C0, v2, v4, f1, v2); } catch (e) {}
    const v6 = new Proxy(C0, v2);
    v6.__proto__;
    for (let i = 0; i < 5; i++) {
        class C9 {
            ["288eB53aA9F4a46Aa1C6"](a11, a12, a13, a14) {
            }
        }
    }
    return f1;
}
try { f1(); } catch (e) {}
