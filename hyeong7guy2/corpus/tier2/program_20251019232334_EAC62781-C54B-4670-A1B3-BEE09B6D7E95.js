function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const v14 = `
                    function F15(a17, a18) {
                        if (!new.target) { throw 'must be called with new'; }
                        function F19(a21, a22) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        class C23 {
                            static [F19](a25, a26, a27) {
                            }
                        }
                    }
                    F15(f4, f4);
                `;
                eval(v14);
            }
            const v31 = new F8();
            return v31;
        }
        new Worker(f4, { type: "function" });
        return f1;
    }
    f1(f1(), f0);
    return f1;
}
({ construct: f0 }).construct();
