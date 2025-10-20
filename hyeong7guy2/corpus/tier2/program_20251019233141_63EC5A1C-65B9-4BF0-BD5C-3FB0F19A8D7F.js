class C0 {
}
function f1() {
    const v2 = { getPrototypeOf: f1 };
    const v4 = Proxy.revocable;
    try { new v4(); } catch (e) {}
    const v6 = new Proxy(C0, v2);
    v6.__proto__;
    for (let i9 = 0;
        (() => {
            [-31063,25190,3,-65537,-2,-268435456,6,4,-60075];
            for (let v11 = 0; v11 < 5; v11++) {
            }
            return 20000;
        })();
        ) {
    }
    return f1;
}
try { f1(); } catch (e) {}
