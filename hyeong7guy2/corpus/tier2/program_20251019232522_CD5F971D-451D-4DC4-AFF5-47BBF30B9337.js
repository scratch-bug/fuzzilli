class C0 {
}
function f1() {
    const v2 = { getPrototypeOf: f1 };
    const v4 = f1.revocable;
    try { new v4(); } catch (e) {}
    const v6 = new Proxy(C0, v2);
    const v7 = v6.__proto__;
    for (let i10 = 0;
        (() => {
            v4.defineProperty = Symbol;
            return v7;
        })();
        ) {
    }
    return C0;
}
try { f1(); } catch (e) {}
