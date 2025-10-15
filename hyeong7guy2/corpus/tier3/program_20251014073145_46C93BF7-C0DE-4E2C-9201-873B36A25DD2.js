class C0 {
}
function f1(a2) {
    function f3() {
        C0.f >>>= a2;
        return f3;
    }
    const v7 = new Worker(f3, { type: "function" });
    return v7;
}
Proxy.constructor = f1;
const t11 = Proxy.constructor;
t11(Proxy, f1, C0);
