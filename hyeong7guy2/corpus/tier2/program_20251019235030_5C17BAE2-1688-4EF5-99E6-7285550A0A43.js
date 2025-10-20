function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const v14 = `
                    function F15(a17, a18) {
                        if (!new.target) { throw 'must be called with new'; }
                        const v20 = class extends Uint32Array {
                            set f(a22) {
                            }
                        }
                    }
                    F15(F15, F8);
                `;
                eval(v14);
            }
            new F8();
            return f0;
        }
        new Worker(f4, { type: "function" });
        return f0;
    }
    f1(f1, f1());
    return f1;
}
({ construct: f0 }).construct();
