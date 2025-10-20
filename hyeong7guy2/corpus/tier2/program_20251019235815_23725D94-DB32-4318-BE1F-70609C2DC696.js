const v0 = /na\b!/uyg;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = %WasmStruct();
            for (let v9 = 0; v9 < 5; v9++) {
                const v13 = {
                    ...v0,
                    set e(a12) {
                    },
                    __proto__: null,
                };
            }
            return a3;
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
