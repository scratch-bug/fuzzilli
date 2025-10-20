function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try {
                const v7 = a6 !== a6;
                v7 && v7;
                const v10 = {};
                const v11 = new SharedArrayBuffer(a6, this);
                Uint8Array(v11);
                const v14 = class extends a3 {
                    static get e() {
                        const v20 = {
                            [Symbol]() {
                                eval();
                            },
                        };
                        super[f4];
                    }
                }
                `-63824`;
            } catch(e23) {
            }
            return a6;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v24 = new F0(F0, F0);
v24.toString();
class C26 {
    static [v24](a28, a29, a30) {
    }
}
