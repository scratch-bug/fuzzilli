function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [-16674,1024,-9007199254740991,1735893730,-347250470,-11,257];
            function F8(a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F8();
            function f12(a13, a14) {
                try {
                    function F17(a19, a20, a21, a22) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f23(a24) {
                            for (let v25 = 0; v25 < 5; v25++) {
                            }
                            function f26() {
                            }
                            globalThis.console.trace();
                            return -1;
                        }
                    }
                    const t22 = "🙌🏿";
                    t22[2] = "🙌🏿";
                } catch(e30) {
                }
                return f12;
            }
            v11[f12] = v7;
            function f31(a32, a33) {
                return f5;
            }
            const v36 = [v11];
            new Worker(f31, { arguments: v36, type: "function" });
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v39 = new F0(F0, F0);
class C40 {
    static [v39](a42, a43, a44) {
    }
}
