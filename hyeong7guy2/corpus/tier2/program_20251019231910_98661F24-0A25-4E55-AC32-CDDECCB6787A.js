class C0 {
}
function f1() {
    const v7 = {
        valueOf(a3, a4, a5) {
            a5?.[a5];
            return this;
        },
        getPrototypeOf: f1,
    };
    const v9 = f1.revocable;
    try { v9(); } catch (e) {}
    for (let i13 = 1000, i14 = 10; i13 === i14;) {
    }
    const v20 = new Proxy(C0, v7);
    v20.__proto__;
    return C0;
}
try { f1(); } catch (e) {}
