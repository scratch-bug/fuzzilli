function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function f14() {
                    return f14;
                }
                const v15 = class extends f14 {
                    constructor(a17, a18) {
                        super();
                        function f19(a20, a21) {
                            function F23(a25, a26) {
                                if (!new.target) { throw 'must be called with new'; }
                                function f27(a28, a29, a30) {
                                    return f19;
                                }
                                f27(a21, arguments);
                            }
                            new F23(a11, a17);
                            return F8;
                        }
                        f19();
                        function f35() {
                            return f4;
                        }
                        WebAssembly.compileStreaming(this, a10).catch(f35);
                    }
                }
                new v15();
                new F8();
            }
            new F8();
            return a3;
        }
        new Worker(f4, { type: "function" });
        return Worker;
    }
    const v45 = f1(f1, f1);
    f1(f1, v45);
    return v45;
}
({ construct: f0 }).construct();
