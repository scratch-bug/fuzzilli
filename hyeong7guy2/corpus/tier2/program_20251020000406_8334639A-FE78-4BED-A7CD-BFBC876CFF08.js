function f0() {
    function f1(a2) {
    }
    f1();
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            const v43 = {
                construct(a14, a15) {
                    const v18 = new SharedArrayBuffer(7);
                    const v20 = new DataView(v18);
                    function f21(a22, a23, a24) {
                        for (let i26 = 0; i26 < 1; i26++) {
                        }
                    }
                    for (let i33 = 0; i33 < 20000; i33++) {
                        const v40 = [f10,f10,f10];
                        f21(a8, v40, v40);
                    }
                    v20.setInt32();
                    return DataView;
                },
            };
            v43.construct();
            return a8;
        }
        f11();
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v46 = new F6();
class C47 {
    static [v46](a49, a50, a51) {
    }
}
const v52 = { done: f0 };
