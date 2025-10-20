for (let v0 = 0; v0 < 5; v0++) {
    for (let [i30, i31] = (() => {
            function F2(a4, a5) {
                if (!new.target) { throw 'must be called with new'; }
                function f6() {
                    function f7(a8) {
                        const v10 = new SharedArrayBuffer();
                        const v12 = new DataView(v10);
                        try { v12.setInt8(v0, v0); } catch (e) {}
                    }
                    %OptimizeMaglevOnNextCall(f7);
                    return f7;
                }
                Object.defineProperty(this, "toString", { get: f6 });
            }
            const v14 = new F2(0, v0);
            class C15 {
                static [v14](a17, a18, a19) {
                }
            }
            for (let i22 = 0, i23 = 10; i23; i23--) {
            }
            return [0, 10];
        })();
        i31;
        i31--) {
    }
}
