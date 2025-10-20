class C0 {
}
function f1() {
    const v5 = {
        set e(a3) {
            try {
            } catch(e4) {
            }
        },
        getPrototypeOf: f1,
    };
    try { v5(); } catch (e) {}
    const v8 = new Proxy(C0, v5);
    return v8.__proto__;
}
try { f1(); } catch (e) {}
