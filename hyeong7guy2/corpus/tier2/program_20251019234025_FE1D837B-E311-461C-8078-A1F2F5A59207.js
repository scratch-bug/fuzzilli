function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const v14 = `
                    function F16(a18, a19) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f20() {
                            function F21(a23, a24) {
                                if (!new.target) { throw 'must be called with new'; }
                            }
                            eval("");
                            \`E${"includes"}XQd\`;
                            return a11;
                        }
                        Object.defineProperty(this, "toString", { get: f20 });
                    }
                    const v29 = new F16();
                    class C30 {
                        static [v29](a32, a33, a34) {
                        }
                    }
                `;
                eval(v14);
            }
            const v37 = new F8();
            return v37;
        }
        const v41 = new Worker(f4, { type: "function" });
        return v41;
    }
    f1(f1, f0);
    f1(f0, f1);
    return f0;
}
({ construct: f0 }).construct();
