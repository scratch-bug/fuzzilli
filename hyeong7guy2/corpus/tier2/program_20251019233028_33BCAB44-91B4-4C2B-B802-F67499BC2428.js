class C0 {
}
function f1() {
    const v9 = {
        getPrototypeOf: f1,
        toString(a3, a4, a5, a6) {
            try {
            } catch(e7) {
                const v8 = {};
            }
            return C0;
        },
    };
    try { v9(); } catch (e) {}
    const v12 = new Proxy(C0, v9);
    v12.__proto__;
    return f1;
}
try { f1(); } catch (e) {}
