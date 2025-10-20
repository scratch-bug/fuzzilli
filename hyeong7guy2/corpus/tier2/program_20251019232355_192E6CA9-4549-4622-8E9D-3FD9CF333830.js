class C0 {
}
function f1() {
    function f2() {
        function f3(a4) {
            function f5(a6) {
                for (let v8 = 0; v8 < 5; v8++) {
                    const v10 = v8 ? {} : Object;
                    v10.toISOString = v10;
                }
                return a4;
            }
            return f3;
        }
        return f2;
    }
    const v11 = { getPrototypeOf: f1 };
    const v13 = Proxy.revocable;
    try { new v13(f2, f1, v11, f1); } catch (e) {}
    const v15 = new Proxy(C0, v11);
    return v15.__proto__;
}
try { f1(); } catch (e) {}
