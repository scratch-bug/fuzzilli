class C0 {
}
function f1() {
    const v2 = { getPrototypeOf: f1 };
    const v4 = Proxy.revocable;
    Symbol.for(Symbol);
    let v7;
    try { v7 = new v4(); } catch (e) {}
    v7 ?? v7;
    const v9 = new Proxy(C0, v2);
    v9.__proto__;
    return Symbol;
}
try { f1(); } catch (e) {}
