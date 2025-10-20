function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12() {
            function f13(a14) {
                try {
                    function F15(a17, a18) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    function F19() {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v22 = new F19();
                    v22.constructor;
                    class C25 extends BigInt64Array {
                    }
                    new C25();
                    for (let i30 = (() => {
                            const v28 = {};
                            const v29 = {};
                            return 0;
                        })();
                        i30 < 20000;
                        i30++) {
                    }
                    for (let v36 = 0; v36 < 5; v36++) {
                    }
                    for (let v37 = 0; v37 < 5; v37++) {
                    }
                } catch(e38) {
                }
            }
            %OptimizeMaglevOnNextCall(f13);
            return f13;
        }
        Object.defineProperty(this, "toString", { get: f12 });
    }
    const v39 = new F8();
    class C40 {
        static [v39](a42, a43, a44) {
        }
        static [v39](a46, a47, a48) {
        }
    }
}
const v49 = new F4(BigInt64Array);
new F4(v49);
new F4();
new Date(1.1);
