function f2() {
    const v3 = { getPrototypeOf: f2 };
    const v5 = Proxy.revocable;
    let v6;
    try { v6 = new v5(-218n, v5, v3); } catch (e) {}
    v6 ?? Symbol;
    const v8 = new Proxy(Proxy, v3);
    v8.__proto__;
    for (let i12 = (() => {
            for (let v10 = 0; v10 < 5; v10++) {
            }
            return 0;
        })();
        20000;
        ) {
    }
    return f2;
}
try { f2(); } catch (e) {}
