class C0 {
}
function f1() {
    const v2 = { getPrototypeOf: f1 };
    const v4 = f1.revocable;
    try { v4(); } catch (e) {}
    const v6 = new Proxy(C0, v2);
    function f7() {
        for (let i9 = 0;
            (() => {
                for (let [...v11] of arguments) {
                }
                return 20000;
            })();
            ) {
        }
        return v2;
    }
    return v6.__proto__;
}
try { f1(); } catch (e) {}
