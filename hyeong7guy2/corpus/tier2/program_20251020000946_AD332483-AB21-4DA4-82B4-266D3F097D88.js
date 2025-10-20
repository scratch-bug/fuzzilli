class C0 {
}
function f1() {
    function f2() {
        function f3(a4) {
            function f5(a6) {
                for (let v7 = 0; v7 < 5; v7++) {
                    for (let v8 = 0; v8 < 5; v8++) {
                    }
                    let v9 = 0;
                    do {
                        const v10 = async (a11, a12) => {
                            await v10;
                            return v10;
                        };
                        v9++;
                    } while (10)
                }
                return a4;
            }
            return f2;
        }
        return f3;
    }
    const v16 = { getPrototypeOf: f1 };
    const v18 = Proxy.revocable;
    try { new v18(); } catch (e) {}
    const v20 = new Proxy(C0, v16);
    v20.__proto__;
    return C0;
}
try { f1(); } catch (e) {}
