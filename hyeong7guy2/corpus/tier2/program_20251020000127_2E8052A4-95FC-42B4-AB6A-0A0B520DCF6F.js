const v2 = new Float32Array(255);
class C3 {
}
function f4() {
    const v10 = {
        m(a6, a7, a8, a9) {
            super.c = a6;
            return a7;
        },
        getPrototypeOf: f4,
    };
    const v12 = Proxy.revocable;
    try { new v12(v10, v2, v10, f4); } catch (e) {}
    const v14 = new Proxy(C3, v10);
    v14.__proto__;
    return v10;
}
try { f4(); } catch (e) {}
Object.entries(v2);
