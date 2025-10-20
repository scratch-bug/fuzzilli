class C0 {
}
function f1() {
    const v2 = { getPrototypeOf: f1 };
    const v4 = f1.revocable;
    let v5;
    try { v5 = v4(); } catch (e) {}
    v5 ?? v5;
    const v7 = new Proxy(C0, v2);
    function f8() {
        for (let i10 = 0;
            (() => {
                for (let [...v12] of arguments) {
                }
                return 20000;
            })();
            ) {
        }
        return v5;
    }
    v7.__proto__;
    return v4;
}
try { f1(); } catch (e) {}
