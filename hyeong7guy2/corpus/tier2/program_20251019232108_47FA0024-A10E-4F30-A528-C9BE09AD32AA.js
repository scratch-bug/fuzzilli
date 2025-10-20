class C0 {
}
function f1() {
    function f2() {
        const v4 = class {
            static {
                switch (Uint8ClampedArray) {
                }
            }
        }
        return v4;
    }
    const v6 = { getPrototypeOf: f1 };
    const v8 = Proxy.revocable;
    try { new v8(); } catch (e) {}
    const v10 = new Proxy(C0, v6);
    v10.__proto__;
    return f2;
}
try { f1(); } catch (e) {}
