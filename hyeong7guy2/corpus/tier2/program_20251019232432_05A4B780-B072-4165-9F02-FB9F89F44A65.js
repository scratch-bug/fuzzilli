try {
    function f0() {
        function F1(a3, a4) {
            if (!new.target) { throw 'must be called with new'; }
            function f5() {
                function f6(a7) {
                    const v9 = new Uint32Array(this);
                    const v10 = v9.length;
                    const v11 = { month: v10 };
                    for (let i14 = 0, i15 = 10; i15; i15--) {
                    }
                }
                f6();
                return f6;
            }
            Object.defineProperty(this, "toString", { get: f5 });
        }
        const v22 = new F1();
        v22.length = v22;
        class C23 {
            static [v22](a25, a26, a27) {
            }
        }
    }
    ({ construct: f0 }).construct();
} catch(e30) {
}
