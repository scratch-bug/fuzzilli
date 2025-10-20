class C0 {
}
function f1() {
    const v13 = {
        getPrototypeOf: f1,
        o(a3, a4) {
            function F5(a7, a8) {
                if (!new.target) { throw 'must be called with new'; }
                function f9() {
                    const v12 = {
                        [Symbol]() {
                        },
                    };
                    return v12;
                }
            }
            return f1;
        },
    };
    const v15 = Proxy.revocable;
    try { new v15(); } catch (e) {}
    const v17 = new Proxy(C0, v13);
    v17.__proto__;
    return Proxy;
}
try { f1(); } catch (e) {}
