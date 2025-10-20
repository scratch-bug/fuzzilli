function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i5 = 512; i5 < 20000; ++i5) {
    }
    let v11;
    try { v11 = new a3(); } catch (e) {}
    function F12(a14, a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        const v18 = `
            try {
                function F19(a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f23() {
                        function f24(a25) {
                            function F26() {
                                if (!new.target) { throw 'must be called with new'; }
                            }
                            class C28 extends F26 {
                            }
                            class C29 {
                            }
                            function F31(a33, a34) {
                                if (!new.target) { throw 'must be called with new'; }
                                function f35() {
                                    function f36(a37) {
                                        for (let v38 = 0; v38 < 5; v38++) {
                                            function f39(a40, a41) {
                                                return f39;
                                            }
                                        }
                                        new C28();
                                        try { C29(Symbol, f35); } catch (e) {}
                                        return C29;
                                    }
                                    f36(a33);
                                    %OptimizeMaglevOnNextCall(f36);
                                    return f36;
                                }
                                Object.defineProperty(this, "toString", { get: f35 });
                            }
                            const v45 = new F31();
                            v45.toString(f24, f24, F0, F0);
                            eval();
                            return v45;
                        }
                        f24();
                        return a3;
                    }
                    Object.defineProperty(this, "toString", { get: f23 });
                }
                const v50 = new F19();
                class C51 {
                    static [v50](a53, a54, a55) {
                    }
                }
            } catch(e56) {
            }
        `;
        eval(v18);
    }
    new F12(512, v11, v11, F12);
}
new F0(F0, F0);
