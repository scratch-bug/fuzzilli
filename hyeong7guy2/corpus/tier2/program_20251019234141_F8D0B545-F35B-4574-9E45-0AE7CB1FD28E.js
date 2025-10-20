class C0 {
}
class C1 {
}
function f2() {
    for (const v3 in C0) {
        switch (v3) {
        }
    }
    const v4 = { getPrototypeOf: f2 };
    const v6 = Proxy.revocable;
    let v7;
    try { v7 = new v6(Proxy, v4, v6); } catch (e) {}
    const v8 = new Proxy(C1, v4);
    v8.__proto__;
    return v7;
}
try { f2(); } catch (e) {}
