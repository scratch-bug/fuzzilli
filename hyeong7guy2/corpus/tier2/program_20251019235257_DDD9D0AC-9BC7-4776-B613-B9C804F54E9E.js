function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v40 = {
        [v6]() {
            const v39 = {
                next() {
                    function F9(a11, a12, a13, a14) {
                        if (!new.target) { throw 'must be called with new'; }
                        function F15(a17, a18) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f19() {
                                function f20(a21) {
                                    function F22(a24, a25, a26, a27) {
                                        if (!new.target) { throw 'must be called with new'; }
                                        function f29() {
                                            return this;
                                        }
                                        WebAssembly.compileStreaming(a26, a1).catch(f29);
                                        globalThis.console.trace();
                                    }
                                    new F22();
                                    return F9;
                                }
                                return f20;
                            }
                            Object.defineProperty(this, "toString", { get: f19 });
                        }
                        const v36 = new F15(F9, this);
                        v36.hasOwnProperty(v36);
                    }
                    const v38 = new F9();
                    return v38;
                },
            };
            return v39;
        },
    };
    const v43 = new Int16Array(Symbol, 882, a2);
    const v44 = new Date(Symbol, Date, 882, ...v43, ...v40);
    return v44;
}
const v48 = new Worker(f0, { type: "function" });
v48.getMessage(v48, "function", v48);
