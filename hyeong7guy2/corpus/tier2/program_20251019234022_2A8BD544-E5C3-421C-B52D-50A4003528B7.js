function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v75 = {
        [v6]() {
            const v74 = {
                next() {
                    function F9(a11, a12, a13, a14) {
                        if (!new.target) { throw 'must be called with new'; }
                        function F15(a17, a18) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f19() {
                                function f20(a21) {
                                    const v58 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
                                    const t7 = WebAssembly.Module;
                                    const v61 = new t7(v58);
                                    function f62() {
                                    }
                                    const v63 = { f: f62 };
                                    const v64 = { m: v63 };
                                    const t13 = WebAssembly.Instance;
                                    const v66 = new t13(v61, v64);
                                    v66.exports;
                                    gc();
                                    ("🙌🏿").split("🙌🏿");
                                }
                                return f20;
                            }
                            Object.defineProperty(this, "toString", { get: f19 });
                        }
                        const v71 = new F15();
                        v71.hasOwnProperty(v71);
                    }
                    new F9();
                },
            };
            return v74;
        },
    };
    const v78 = new Int16Array();
    new Date(Symbol, Date, 882, ...v78, ...v75);
}
const v83 = new Worker(f0, { type: "function" });
v83.getMessage();
